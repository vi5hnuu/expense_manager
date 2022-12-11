import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
    console.log("ExpenseItem created.");
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle("Updated")
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props['amount']}</div>
            </div>
            <button onClick={clickHandler}>Change color</button>
        </Card >
    )
}

export default ExpenseItem