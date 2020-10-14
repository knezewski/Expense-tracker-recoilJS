import { transactionListState } from "./atoms";
import { selector } from "recoil";

export const balanceState = selector ({
   key: "balanceState",
   get: ({ get }) => {
      const transactionList = get(transactionListState)
      const amount = transactionList.map((transaction) => transaction.amount)
      const balance = amount.reduce((acc, num) => (acc +=num),0).toFixed(2)

      return balance
   }
})

export const expenseStatState = selector ({
   key: "expenseStatState",
   get: ({ get }) => {
      const transactionList = get(transactionListState)
      const amounts = transactionList.map(transaction => transaction.amount)
      const income = amounts
         .filter((num) => num >= 0)
         .reduce((acc, num) => ( acc += num), 0)
         .toFixed(2)

      const expense =
         amounts
            .filter(num => num < 0)
            .reduce((acc, num) => acc + num, 0)
            -(1).toFixed(2)

      return {
         income,
         expense,
      }
   },
})

export const transactionListLocalStorage = selector({
   key: 'transactionListLocalStorage',
   get: ({ get }) => {
       const transactionList = get(transactionListState)
       localStorage.setItem(
           'TRANSACTION_LIST',
           JSON.stringify(transactionList)
       )
       return transactionList
   },
})