import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random() }
        props.onNewExpense(expenseData)
    }

    function showAddExpenseModal() {
        setIsEditing(true)
    }
    function hideAddExpenseModal() {
        setIsEditing(false)
    }
    return <Card className='new-expense'>
        {!isEditing && <button className='btn__addExp' onClick={showAddExpenseModal}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancelEditing={hideAddExpenseModal} />}
    </Card>
}

export default NewExpense