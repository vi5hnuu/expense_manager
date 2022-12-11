import Expenses from "./components/Expenses/Expenses";

function App() {
  console.log("App created.");
  const expenses = [
    { id: 'e1', 'title': 'Car insurance', amount: 294.00, date: new Date(2021, 2, 28) },
    { id: 'e2', 'title': 'School fees', amount: 890505.00, date: new Date(2021, 2, 29) },
    { id: 'e3', 'title': 'Electricity bill', amount: 600000.00, date: new Date(2021, 3, 28) },
    { 'title': 'Heath insurance', amount: 500.00, date: new Date(2021, 5, 28) },
    { id: 'e4', 'title': 'monthly grocery bill,monthly grocery bill', amount: 5000.00, date: new Date(2021, 2, 5) },
  ]
  return (
    <Expenses items={expenses} />
  );
}

export default App;
