import React from "react";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import Button from "../Button/Button";
import styles from './TopContainer.module.css';

const TopContainer = ({ balance, totalExpense, onAddIncome, onAddExpense, chartData }) => {
    return (
        <div className={styles.topChildContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.children}>
                    <p>Wallet Balance: <span style={{ color: 'lawngreen', fontWeight: '700'}}>₹{balance}</span></p>
                    <Button onClick={onAddIncome} text='+ Add Income' style={{ background: 'linear-gradient(90deg, #B5DC52 0%, #89E148 100%)'}} />
                </div>
                <div className={styles.children}>
                    <p>Expenses: <span style={{ color: 'orange', fontWeight: '700' }}>₹{totalExpense}</span></p>
                    <Button onClick={onAddExpense} text='+ Add Expense' style={{ background: 'linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)'}} />
                </div>
            </div>
            <ExpenseChart expenseData={chartData} />
        </div>
    );
}

export default TopContainer;