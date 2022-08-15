import ExpenseItem from './components/ExpenseItemComponent/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const renderExpenseItems = expenses.map( (item) => 
      <ExpenseItem 
          id={item.id} 
          title={item.title}
          amount={item.amount}
          date={item.date}
      />
  ); 

  return (
    <div className='App-header'>
        <h3>Expense Tracker</h3>
        {renderExpenseItems}
    </div>
  );
}

export default App;
