import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    console.log('new Expense form created');
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: Number.parseFloat(enteredAmount),
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onCancelEditing()
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')
    }
    return <form className='form' onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label >Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label >Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label >Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button className='btn__cancel' onClick={props.onCancelEditing}>Cancel</button>
            <button type='sumbit' className='btn__addExp'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm