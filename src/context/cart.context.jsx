import { createContext, useState } from "react";

// first component (the one that shares the states)
const CartContext = createContext()

// second component (the one that holds the states)
function CartWrapper(props) {

  // here we add the states, functions, variables to transmit through our app
  const [items, setItems] = useState([])

  const passedContext = {
    items,
    setItems
  }

  return (
    <CartContext.Provider value={passedContext}>
      {props.children}
    </CartContext.Provider>
  )

}

export {
  CartContext,
  CartWrapper
}