import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDateComponent/ExpenseDate';

const ExpenseItem = (props) => {
    const expenseTitle = props.title;
    const expenseAmount = `$${props.amount}/-`;

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h4>{expenseTitle}</h4>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;