import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Import Contexts
import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		if (!cart.find(itemAdd => itemAdd.id === item.id)) {
			setCart([...cart, item]);
		}
	};

	// remove the given item from the cart
	const removeItem = id => {
		setCart(cart.filter(item => item.id !== id));
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>

				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>

			</CartContext.Provider>
		</ProductContext.Provider>
	);
}
export default App;