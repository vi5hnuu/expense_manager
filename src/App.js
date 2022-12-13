import { useState } from "react";
import ExpenseAnalysis from "./components/Expenses/ExpenseAnalysis";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"
  ];
  const initial_expenses = [
    { id: 'e1', 'title': 'Car insurance', amount: 294.00, date: new Date(2021, 2, 28) },
    { id: 'e2', 'title': 'School fees', amount: 8905.00, date: new Date(2021, 2, 29) },
    { id: 'e3', 'title': 'Electricity bill', amount: 6000.00, date: new Date(2021, 3, 28) },
    { 'title': 'Heath insurance', amount: 500.00, date: new Date(2021, 5, 28) },
    { id: 'e4', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 5, 9) },
    { id: 'e5', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2020, 2, 8) },
    { id: 'e6', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 9, 7) },
    { id: 'e7', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2020, 2, 5) },
    { id: 'e8', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 7, 9) },
    { id: 'e9', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 4, 7) },
    { id: 'e10', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 6, 5) },
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

  function barHeights() {
    const barHeights = { jan: 0.0, feb: 0.0, mar: 0.0, apr: 0.0, may: 0.0, jun: 0.0, jul: 0.0, aug: 0.0, sep: 0.0, oct: 0.0, nov: 0.0, dec: 0.0 }

    const total = filterExpenses.reduce((prev, cur) => {
      return prev + cur.amount
    }, 0.0)

    filterExpenses.forEach(expense => {
      barHeights[monthNames[expense.date.getMonth()]] += expense.amount
    })
    if (total)
      for (const key in barHeights) {
        barHeights[key] = barHeights[key] * 100 / total
      }
    console.log(barHeights)

    return barHeights
  }


  const addFilterHandler = (event) => {
    console.log(event.target.value);
    setfilterYear(event.target.value)
  }

  return <Card className="main">
    <NewExpense onNewExpense={addExpenseHandler} />
    <ExpenseAnalysis onFilterSelected={addFilterHandler} barHeights={barHeights} />
    <Expenses items={filterExpenses} />
  </Card>
}

export default App;
