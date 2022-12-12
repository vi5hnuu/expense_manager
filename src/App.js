import { useState } from "react";
import ExpenseAnalysis from "./components/Expenses/ExpenseAnalysis";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  const initial_expenses = [
    { id: 'e1', 'title': 'Car insurance', amount: 294.00, date: new Date(2021, 2, 28) },
    { id: 'e2', 'title': 'School fees', amount: 890505.00, date: new Date(2021, 2, 29) },
    { id: 'e3', 'title': 'Electricity bill', amount: 600000.00, date: new Date(2021, 3, 28) },
    { 'title': 'Heath insurance', amount: 500.00, date: new Date(2021, 5, 28) },
    { id: 'e4', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 2, 5) },
  ]
  const [filterYear, setfilterYear] = useState('All')
  const [expenses, setExpenses] = useState(initial_expenses)
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
  }

  let filterExpenses = null
  if (filterYear === 'All') {
    filterExpenses = expenses
  } else {
    filterExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filterYear)
  }

  const addFilterHandler = (event) => {
    console.log(event.target.value);
    setfilterYear(event.target.value)
  }

  return <Card className="main">
    <NewExpense onNewExpense={addExpenseHandler} />
    <ExpenseAnalysis onFilterSelected={addFilterHandler} />
    <Expenses items={filterExpenses} />
  </Card>
}

export default App;
