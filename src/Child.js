import React, { useContext, useState } from "react";
import { TransactionContext } from "./TransContext";

function Child() {
  let { transaction, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();

    if (Number(newAmount) === 0) {
      alert("Please enter correct value");
      return false;
    }
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });

    setDesc("");
    setAmount(0);
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0) income = income + transaction[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0) expense += transaction[i].amount;
    }
    return expense;
  };


  return (
    <div className="Container">
      <h1 className="Text-center">Expense Tracker</h1>

      <h3>
        Your Balance <br /> ${getIncome() + getExpense()}
      </h3>

      <div className="Expense-container">
        <h3>
          INCOME <br /> ${getIncome()}
        </h3>

        <h3>
          EXPENSE <br />${getExpense()}
        </h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="Transaction-list">
        {transaction.map((transObj, ind) => {
          return (
            <li key={ind}>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>

      <h3>Add new transaction</h3>
      <hr />

      <form className="Transation-form" onSubmit={handleAddition}>
        <label>
          Enter Discription <br />
          <input
            value={newDesc}
            type="text"
            placeholder="Discription"
            onChange={(ev) => setDesc(ev.target.value)}
            required
          />
        </label>

        <br />
        <label>
          Enter Amount <br />
          <input
            value={newAmount}
            type="number"
            placeholder="Amount"
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
