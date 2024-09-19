import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import styles from './BottomContainer.module.css';

const BottomContainer = ({ expense, chartData, onEditExpense, onDeleteExpense, onAddExpense }) => {
    return (
        <div className={styles.bottomChildContainer}>
            <div className={styles.box70}>
                <h1> <i>Recent Transactions</i> </h1>
                <ExpenseList expenseData={expense} onEditExpense={onEditExpense} onDeleteExpense={onDeleteExpense} />
            </div>
            <div className={styles.box30}>
                <h1> <i>Top Expenses</i> </h1>
                <HorizontalBarChart barChartData={chartData} handleExpense={onAddExpense} />
            </div>
        </div>
    );
}

export default BottomContainer;