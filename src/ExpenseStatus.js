import React from "react";
import { useRecoilValue } from "recoil";
import { expenseStatState } from "./Selectors";

export const ExpenseStatus = () => {
   const { income, expense } = useRecoilValue(expenseStatState)

   return (
      <div className="expense-status-container">
         <div>
            <h4>Income</h4> <p className="money plus">{income}</p>
         </div>
         <div>
            <h4>Expense </h4> <p className="money minus">{expense}</p>
         </div>
      </div>
   )
}
