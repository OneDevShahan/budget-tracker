// components/ExpenseForm.js
import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../components/ExpenseForm.css";

const ExpenseForm = ({ expense, onSubmit }) => {
  const { addExpense, updateExpense } = useContext(ExpenseContext);
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [amount, setAmount] = useState(expense ? expense.amount : "");
  const [date, setDate] = useState(
    expense ? expense.date : formatDate(new Date())
  );
  const [showAlert, setShowAlert] = useState(false);

  // Get today's date in the format dd/mm/yyyy
  const today = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split("/")
    .reverse()
    .join("-");
  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log("Date", event.target.value);
    setSelectedDate(event.target.value);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    const newExpense = { description, amount: parseFloat(amount), date };
    if (expense) {
      updateExpense(expense.id, newExpense);
    } else {
      addExpense(newExpense);
    }
    setDescription("");
    setAmount("");
    setDate("");
    onSubmit && onSubmit();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="heading">
          <h3>Log Your Expenses</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="expense-form">
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-text"
              placeholder="Description of the expense"
            />
            {/* <div className="amount-date"> */}
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-text"
              placeholder="Amount spent"
            />
            <input
              type="date"
              id="dateInput"
              name="dateInput"
              value={selectedDate}
              onChange={handleDateChange}
              max={today}
              className="input-text"
              placeholder="Date spent"
            />
            {/* </div> */}
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>
            Add Expense
          </button>
          {/* Alert component */}
          {showAlert && (
            <div className="alert alert-success my-2" role="alert">
              Your expense added successfully!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
