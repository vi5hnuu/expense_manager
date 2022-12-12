import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import NoExpense from './NoExpense';

function Expenses(props) {
    console.log("Expenses created.");

    const data = props.items
    const expenseList = (data.length > 0) ?
        (data.map((expense) => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        }))
        : <NoExpense key='#' />
    return <Card className='expenses'>
        {expenseList}
    </Card>
}
export default Expenses