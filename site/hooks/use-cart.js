import React, { useState, useEffect } from 'react';
export const CartContext = React.createContext([
	{},
	() => {}
]);

export const CartProvider = ( props ) => {

	const [ cart, setCart ] = useState( null );

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'woo-next-cart' );
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			setCart( cartData );

		}

	}, [] );

	return (
		<CartContext.Provider value={ [ cart, setCart ] }>
			{ props.children }
		</CartContext.Provider>
	);
};
