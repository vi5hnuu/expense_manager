import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'

const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random() }
        props.onNewExpense(expenseData)
    }

    return <Card className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </Card>
}

export default NewExpense