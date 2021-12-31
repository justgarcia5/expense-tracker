import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
    const [isNewExpense, setIsNewExpense] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData);
    }

    const addNewExpense = () => setIsNewExpense(true);
    const cancelNewExpense = () => setIsNewExpense(false);

    const formReveal = (isNewExpense) ? <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} cancelNewExpense={cancelNewExpense} /> : <button onClick={addNewExpense}>Add new expense</button>

    return (
        <div className='new-expense'>
            {formReveal}
        </div>
    )
}