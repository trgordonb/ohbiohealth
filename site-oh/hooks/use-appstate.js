import { useState, useContext, createContext, useEffect } from 'react';

const AppStateContext = createContext(undefined)

export function AppStateProvider({ children }) {
    const [hasDismissedNotification, setHasDismissedNotification] = useState(false)
	const [ cart, setCart ] = useState( null )

    useEffect( () => {
		if ( process.browser ) {
			let cartData = localStorage.getItem( 'woo-next-cart' )
			cartData = null !== cartData ? JSON.parse( cartData ) : ''
			setCart( cartData )
		}
	}, [] )

    return (
        <AppStateContext.Provider
            value={{
                hasDismissedNotification,
                setHasDismissedNotification,
                cart,
                setCart
            }}
        >
            {children}
        </AppStateContext.Provider>
    )
}

export function useAppState() {
    const context = useContext(AppStateContext)

    return context
}