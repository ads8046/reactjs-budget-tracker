import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDateComponent/ExpenseDate';

const ExpenseItem = (props) => {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = `$${props.amount}/-`;

    return (
        <div className='expense-item'>
            <ExpenseDate date={expenseDate} />
            <div className='expense-item__description'>
                <h4>{expenseTitle}</h4>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;