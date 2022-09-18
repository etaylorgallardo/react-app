import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import './userForm.css'

function UserForm({ cart }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  const [orderFirebase, setOrderFirebase] = useState({
    id: "",
    complete: false,
  });

  let total = 0;
  cart.forEach((item) => {
    total += item.precio * item.quantity;
  });

  const ordenDeCompra = {
    buyer: { ...userData },
    items: [...cart],
    total: total,
    date: new Date(),
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    const querydb = getFirestore();
    const collectionRef = collection(querydb, "ordenes");
    const order = await addDoc(collectionRef, ordenDeCompra);
    setOrderFirebase({ id: order.id, complete: true });
  }

  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  function handleReset(evt) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  if (orderFirebase.complete === true) {
    return (
      <div>
        <h1>Gracias por tu compra!</h1>
        <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
        </div>

        <div>
          <button type="submit" onTouch={handleSubmit}>
            Finalizar Compra
          </button>
          <button type="reset" onTouch={handleReset}>Vaciar Formulario</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
