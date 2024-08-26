import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('cash-in');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddTransaction = () => {
    if (!amount || !category || !date || !time) return;

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      type,
      category,
      date,
      time,
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setCategory('');
    setDate('');
    setTime('');
  };

  const calculateTotals = () => {
    let totalCashIn = 0;
    let totalCashOut = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'cash-in') {
        totalCashIn += transaction.amount;
      } else {
        totalCashOut += transaction.amount;
      }
    });

    const totalBalance = totalCashIn - totalCashOut;

    return {
      totalCashIn,
      totalCashOut,
      totalBalance,
    };
  };

  const totals = calculateTotals();

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <div className="form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="cash-in">Cash In</option>
          <option value="cash-out">Cash Out</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <div className="totals">
        <h3>Totals</h3>
        <p>Total Cash In: ${totals.totalCashIn.toFixed(2)}</p>
        <p>Total Cash Out: ${totals.totalCashOut.toFixed(2)}</p>
        <p>Total Balance: ${totals.totalBalance.toFixed(2)}</p>
      </div>

      <div className="transactions">
        <h3>Transactions</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <div>{transaction.date} {transaction.time}</div>
              <div>{transaction.type === 'cash-in' ? '+' : '-'}${transaction.amount.toFixed(2)}</div>
              <div>{transaction.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
