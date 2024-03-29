import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const sampleExpenses = [
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
  const [expenses, setExpenses] = useState(sampleExpenses);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, updateExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
