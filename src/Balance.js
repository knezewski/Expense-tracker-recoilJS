import React from "react";
import { useRecoilValue } from "recoil";
import { balanceState } from "./Selectors";

export const Balance = () => {
   const balance = useRecoilValue(balanceState)

   return (
      <div>
         <h4>Your Balance</h4>
         <h1>{balance}</h1>
      </div>
   )
}