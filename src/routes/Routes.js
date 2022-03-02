import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-list-container/ItemListContainer';
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer'
import Cart from '../components/cart/Cart';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={ItemDetailContainer}/> 
                <Route path="*" element={<NotFound />}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;