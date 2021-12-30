import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses(props) {
    return (
        <div className='expenses'>
            {props.expenses.map(expense => {
                return (
                    <ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                )
            })}
        </div>
    )
}