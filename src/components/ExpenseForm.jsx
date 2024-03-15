// components/ExpenseForm.js
import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import '../components/ExpenseForm.css';
import { Alert } from 'bootstrap';

const ExpenseForm = ({ expense, onSubmit }) => {
  const [description, setDescription] = useState(expense ? expense.description : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');

  const { addExpense, updateExpense } = useContext(ExpenseContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    // Your logic for adding the expense goes here
    // After successfully adding the expense, set showAlert to true
    setShowAlert(true);

    // Optionally, you can reset showAlert after a certain duration to hide the alert automatically
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide the alert after 3 seconds (adjust the duration as needed)

    e.preventDefault();
    const newExpense = { description, amount: parseFloat(amount) };
    if (expense) {
      updateExpense(expense.id, newExpense);
    } else {
      addExpense(newExpense);
    }
    setDescription('');
    setAmount('');
    onSubmit && onSubmit();
  };

  return (
    <div>
      {/* Alert component */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Your expense added successfully!
        </div>
      )}

      <div className='heading'>
        <h2>Log Your Expenses</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div style={{textAlign: "center"}}>
          <div className='expense'>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='input-text' placeholder='Description of the expense' />
            <div className='amount-date'>
              <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} className='input-text' placeholder='Amount spent' />
              <input type='date' value={amount} onChange={(e) => setAmount(e.target.value)} className='input-text' placeholder='Amount spent' />
            </div>
          </div>
          <button className='button' type='submit' onClick={handleSubmit}>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
