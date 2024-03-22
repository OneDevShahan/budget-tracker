// components/ExpenseList.js
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../components/ExpenseTable.css";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  const data = [
    {
      id: 1,
      description: "Groceries",
      amount: 50.0,
      date: "2024-03-15",
    },
    {
      id: 2,
      description: "Utility Bill",
      amount: 100.0,
      date: "2024-03-15",
    },
    {
      id: 3,
      description: "Dinner with Friends",
      amount: 80.0,
      date: "2024-03-15",
    },
    {
      id: 4,
      description: "Internet Subscription",
      amount: 60.0,
      date: "2024-03-15",
    },
    {
      id: 5,
      description: "Movie Tickets",
      amount: 25.0,
      date: "2024-03-15",
    },
  ];

  return (
    <div>
      <div>
        <div className="container">
          <h2>Expense Details</h2>
          <table class="table caption-top">
            <caption>List of users</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-dark">
              {expenses.map((item, index) => (
                <tr key={index}>
                  <td>{item.index}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <button onClick={() => deleteExpense(item.id)}>
                      Delete
                    </button>
                    <button onClick={() => deleteExpense(item.id)}>
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
