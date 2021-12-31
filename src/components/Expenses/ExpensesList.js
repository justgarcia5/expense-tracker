import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

export default function ExpensesList(props) {
    if(props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.expenses &&
                props.expenses.map(expense =>(
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                ))}
        </ul>
    );
}