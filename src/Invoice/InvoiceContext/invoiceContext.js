// import React, { createContext, useContext } from 'react'

// const InvoiceContextProvider=createContext()

// // export const  useInvoiceContext=()=>{   
// //     return useContext(InvoiceContextProvider)
// // } 


// export function invoiceContext ({children}) {
// // let name="pratikk"
//   // let   value={name}
//   return (
//     <InvoiceContextProvider.Provider value={{ name : "prateek"}}>{children}</InvoiceContextProvider.Provider >
//   )
// }

// // export default invoiceContext
// export default InvoiceContextProvider

import { createContext , useState } from "react";

const CartContext= createContext();

export function CartProvider({children}){
  const [ items , setItems] =useState([]);
  // const addToCart = ()
  return (
    <CartContext.Provider value={{name :"prateek"}}>{children}</CartContext.Provider>
  )
}

export default CartContext;

