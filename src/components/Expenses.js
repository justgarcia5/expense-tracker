import './Expenses.css';
import Card from './Card';
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    return (
        <Card className='expenses'>
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
        </Card>
    )
}