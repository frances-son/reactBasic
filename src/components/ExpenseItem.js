import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';

function ExpenseItem(props) {

  let title = props.title;


  // 앞쪽에 정의
  const clickHandler = () => {
    title = 'Updated!';
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
