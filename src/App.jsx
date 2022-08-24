import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CartProvider  from './CartContext';

export const CartContext = React.createContext([]);

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:id' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        </CartProvider>
       
      </BrowserRouter>
      

    </div>
  );


}

export default App;
