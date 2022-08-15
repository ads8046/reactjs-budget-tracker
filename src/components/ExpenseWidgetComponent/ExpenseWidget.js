import ExpenseItem from "../ExpenseItemComponent/ExpenseItem";
import './ExpenseWidget.css';

const ExpenseWidget = (props) => {
  const renderExpenseItems = props.expenses.map((item) => (
    <ExpenseItem
      id={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return (
    <div className="Widget-container">
      <h4>Purchases</h4>
      {renderExpenseItems}
    </div>
  );
};

export default ExpenseWidget;
