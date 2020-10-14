import React from 'react';
import './App.css';
import { Header } from './Header'
import { Balance } from './Balance'
import { ExpenseStatus } from './ExpenseStatus'
import { TransactionList } from './TransactionList'
import { NewTransaction } from './NewTransaction'

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <ExpenseStatus />
                <TransactionList />
                <NewTransaction />
            </div>
        </>
    )
}

export default App;
