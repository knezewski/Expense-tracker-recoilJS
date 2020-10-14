import React, { Fragment, useEffect } from "react";
import { Transaction } from "./Transaction";
import { transactionListState } from "./atoms";
import { useRecoilState } from "recoil";


export const TransactionList = () => {
   const [transactionList, setTransactionList] = useRecoilState(
      transactionListState)

   useEffect(() => {
      setTransactionList(JSON.parse(localStorage.getItem("TRANSACTION_LIST")))
   }, [setTransactionList])

   return (
      <Fragment>
         <h3>Transaction History</h3>
         <ul className="list">
            {transactionList !== null &&
            transactionList.map(transaction => (
               <Transaction key={transaction.id}
               transaction={transaction} />
            ))}
         </ul>
      </Fragment>
   )
}