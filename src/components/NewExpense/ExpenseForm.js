import React, { useState } from 'react';

import './ExpenseForm.css';

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [expenseInput, setExpenseInput] = useState({
    //     title: '',
    //     date: '',
    //     amount: '',
    // })

    // const changeHandler = e => {
    //     let { name, value } = e.target;
    //     setExpenseInput(prevState => ({ ...prevState, [name]: value }))
    // }

    const titleChangeHandler = e => {
        let { value } = e.target;
        setEnteredTitle(value)
    }

    const dateChangeHandler = e => {
        let { value } = e.target;
        setEnteredDate(value)
    }

    const amountChangeHandler = e => {
        let { value } = e.target;
        setEnteredAmount(value)
    }

    const submitHandler = e => {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        props.cancelNewExpense()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                    type='text'
                    name='title'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='text'
                        name='amount'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        name='date'
                        value={enteredDate}
                        min='2019-01-01'
                        step='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.cancelNewExpense} type='button'>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}