import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

const initialTransaction = [
  { amount: 500, desc: "Cash" },
  { amount: -40, desc: "Book" },
  { amount: -200, desc: "Camera" },
];

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }

  // function onDeleteTransaction(index){
  //  dispatch({
  //    type: "DELETE",
  //    payload: index.initialTransaction
  //  })

  // }

  return (
    <TransactionContext.Provider
      value={{
        transaction: state,
        addTransaction,

      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
