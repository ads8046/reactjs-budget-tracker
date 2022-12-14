import ExpenseWidget from './components/ExpenseWidgetComponent/ExpenseWidget';
import './App.css';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toothpaste',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 3, 28),
    },
    {
      id: 'e4',
      title: 'Desk',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e5',
      title: 'Chair',
      amount: 500,
      date: new Date(2022, 6, 17),
    },
  ];

  return (
    <div className='App-header'>
        <h3>Expense Tracker</h3>
        <ExpenseWidget expenses={expenses} />
    </div>
  );
}

export default App;
