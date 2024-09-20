    import React, { useEffect, useState } from "react";
    import { useSnackbar } from "notistack";
    import TopContainer from "../components/TopContainer/TopContainer";
    import BottomContainer from "../components/BottomContainer/BottomContainer";
    import Modal from 'react-modal';
    // import Modal from "../components/Modal/Modal";
    import IncomeForm from "../components/IncomeForm/IncomeForm";
    import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
    import styles from './Home.module.css';

    const HomePage = () => {    
        const { enqueueSnackbar } = useSnackbar();
        const savedExpense = localStorage.getItem('expense');
        const [balance, setBalance] = useState(() => {
            const savedBalance = localStorage.getItem('balance');
            return savedBalance && !isNaN(savedBalance) ? parseFloat(savedBalance) : 5000;
        });
        const [expense, setExpense] = useState(() => {
            return savedExpense ? JSON.parse(savedExpense) : [];
        });
        const [totalExpense, setTotalExpense] = useState(() => {
            const expenseArray = savedExpense ? JSON.parse(savedExpense) : [];
            return Array.isArray(expenseArray) ? expenseArray.reduce((total, item) => total + (item.price || 0), 0) : 0;
        });

        const [chartData, setChartData] = useState([]);
        const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);
        const [isIncomeFormVisible, setIsIncomeFormVisible] = useState(false);
        const [editingExpense, setEditingExpense] = useState(null);

        useEffect(() => {
            const categoryWiseExpense = Array.isArray(expense) ? expense : [];
            const groupedData = [];
            categoryWiseExpense.forEach(({ category, price }) => {
                const spentData = groupedData.find(item => item.category === category);
                if (spentData) {
                    spentData.price += price;
                } else {
                    groupedData.push({ name:category, category, price });
                }
            });
            setChartData(groupedData);
        }, [expense]);

        useEffect(() => {
            const spentIncome = localStorage.getItem('expense');
            if (spentIncome === null) {
                localStorage.setItem('expense', JSON.stringify([]));
            }
            const balanceAvailable = localStorage.getItem('balance');
            if (balanceAvailable === null) {
                localStorage.setItem('balance', JSON.stringify(5000));
            }
            console.log('Saved balance from localStorage:', balanceAvailable);
            setBalance(balanceAvailable ? parseFloat(balanceAvailable) : 5000);
            setExpense(spentIncome ? JSON.parse(spentIncome) : []);
        }, []);

        useEffect(() => {
            localStorage.setItem('balance', JSON.stringify(balance));
        }, [balance]);

        useEffect(() => {
            if (Array.isArray(expense)) {
                localStorage.setItem('expense', JSON.stringify(expense));
                const total = expense.reduce((total, item) => total + (item.price || 0), 0);
                setTotalExpense(total);
            } else {
                localStorage.setItem('expense', JSON.stringify([]));
                setTotalExpense(0);
            }
        }, [expense]);

        const handleAddExpense = () => {
            setEditingExpense(null);
            setIsExpenseFormVisible(true);
        }

        const handleAddBalance = () => {
            setIsIncomeFormVisible(true);
        }

        const handleAddIncome = (income) => {
            setBalance((prevBalance) => prevBalance + income);
            setIsIncomeFormVisible(false);
        }

        const handleExpense = (addedExpense) => {
            setExpense((prevExpense) => {
                const newExpenses = [...prevExpense, addedExpense];
                if (addedExpense.price <= balance) {
                    setBalance((prevBalance) => prevBalance - addedExpense.price);
                    return newExpenses;
                } else {
                    enqueueSnackbar('The expense amount exceeds your current balance. Please adjust the amount to be within your available balance or add more balance.', {variant: 'error'});
                    return prevExpense;
                }
            });
            setIsExpenseFormVisible(false);
        }

        const handleUpdateExpense = (updatedExpense) => {
            setExpense(prevExpense => {
                const oldExpense = prevExpense.find(exp => exp.id === updatedExpense.id);

                const difference = updatedExpense.price - oldExpense.price;

                if (difference <= balance) {
                    const updatedExpenses = prevExpense.map(exp => 
                        exp.id === updatedExpense.id ? updatedExpense : exp
                    );
                    setBalance(prevBalance => prevBalance - difference);
                    return updatedExpenses;
                } else {
                    enqueueSnackbar('The expense amount exceeds your current balance. Please adjust the amount to be within your available balance or add more balance.', {variant: 'error'});
                    return prevExpense;
                }
            });
            setIsExpenseFormVisible(false);
        }

        const handleEditExpense = (expenseToEdit) => {
            setEditingExpense(expenseToEdit);
            setIsExpenseFormVisible(true);
        }

        const handleDeleteExpense = (id, price) => {
            setExpense((prevExpense) => {
                const updatedExpenses = prevExpense.filter(exp => exp.id !== id);
                localStorage.setItem('expense', JSON.stringify(updatedExpenses));
                setBalance(prevBalance => prevBalance + price);
                return updatedExpenses;
            });
        }

        const handleCloseButton = () => {
            setIsIncomeFormVisible(false);
            setIsExpenseFormVisible(false);
        }

        return (
            <>
                <h1>Expense Tracker</h1>
                <div className={styles.parentContainer}>
                    <TopContainer
                        balance={balance}
                        totalExpense={totalExpense}
                        onAddIncome={handleAddBalance}
                        onAddExpense={handleAddExpense}
                        chartData={chartData}
                    />
                    <BottomContainer
                        expense={expense}
                        chartData={chartData}
                        onAddExpense={handleAddExpense}
                        onEditExpense={handleEditExpense}
                        onDeleteExpense={handleDeleteExpense}
                    />
                    <Modal isOpen={isIncomeFormVisible} ariaHideApp={false} className={styles.modalContent} overlayClassName={styles.overlay} style={{ content: { maxWidth: '90%', margin: 'auto' } }}>
                        <IncomeForm onAddingIncome={handleAddIncome} onCancel={handleCloseButton} />
                    </Modal>
                    <Modal isOpen={isExpenseFormVisible} ariaHideApp={false} className={styles.modalContent} overlayClassName={styles.overlay} style={{ content: { maxWidth: '90%', margin: 'auto' } }}>
                        <ExpenseForm 
                            onAddingExpense={handleExpense} 
                            formTitle={editingExpense ? "Edit Expenses" : "Add Expenses"} 
                            onCancel={handleCloseButton} 
                            expense={editingExpense} 
                            onUpdateExpense={handleUpdateExpense}
                        />
                    </Modal>
                </div>
            </>
        );
    }

    export default HomePage;