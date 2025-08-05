import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <input type="text" placeholder="Expense Title" />
      <input type="number" placeholder="Amount" />
      <input type="date" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
