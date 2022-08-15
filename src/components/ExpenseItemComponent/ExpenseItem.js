import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseDate = new Date(props.date);
    const expenseTitle = props.title;
    const expenseAmt = `$${props.amount}/-`;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h4>{expenseTitle}</h4>
                <div className='expense-item__price'>{expenseAmt}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;