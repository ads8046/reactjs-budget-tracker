import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>Aug 14th 2022</div>
            <div className='expense-item__description'>
                <h4>Title</h4>
                <div className='expense-item__price'>$299.99/-</div>
            </div>
        </div>
    );
}

export default ExpenseItem;