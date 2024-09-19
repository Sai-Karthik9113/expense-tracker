import React, { useState, useEffect } from "react";
import styles from './ExpenseForm.module.css';
import Button from "../Button/Button";
import useScreenSize from "../../Helpers/ScreenSize";

const ExpenseForm = ({ onAddingExpense, formTitle, onCancel, expense, onUpdateExpense }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const categories = ['Food', 'Entertainment', 'Travel'];
    const { forExtraLargeDevices } = useScreenSize();

    useEffect(() => {
        if (expense) {
            setTitle(expense.title);
            setPrice(expense.price);
            setCategory(expense.category);
            setDate(expense.date);
        }
    }, [expense]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleDateChange = (event) => {
        const rawDate = event.target.value;
        setDate(rawDate);
    };

    const handleFocus = (e) => {
        e.target.type = 'date';
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.type = 'text';
            e.target.placeholder = 'dd/mm/yyyy'; // Revert to placeholder if no date is entered
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && price && category && date) {
            const expenseData = {
                id: expense?.id || generateUniqueId(),
                title: title,
                price: parseFloat(price),
                category: category,
                date: date
            };

            if (expense) {
                onUpdateExpense(expenseData);
            } else {
                onAddingExpense(expenseData);
            }
            
            setTitle('');
            setPrice('');
            setCategory('');
            setDate('');
        }
    }

    const generateUniqueId = () => {
        return Date.now() + '-' + Math.floor(Math.random() * 1000);
    }    

    return (
        <div className={styles.container}>
            <h1>{formTitle}</h1>
            <form onSubmit={handleSubmit} className={styles.expenseForm}>
                <div className={styles.formRow}>
                    <input type='text' value={title} placeholder="Title" onChange={handleTitle} required />
                    <input type='number' value={price} placeholder="Price" onChange={handlePrice} required />
                </div>
                <div className={styles.formRow}>
                    <select value={category} onChange={handleCategoryChange} required >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <input className={styles.dateInput} onFocus={handleFocus}
                        onBlur={handleBlur} type="text" onChange={handleDateChange} value={date} placeholder="dd/mm/yy" required />
                </div>
                <div className={styles.formRow} style={{ marginBottom: '1rem' }}>
                    <Button
                        className={styles.buttons}
                        text='Add Expense'
                        type='submit'
                        style = {{
                            height: '51px',
                            width: forExtraLargeDevices ? '100%': '48%',
                            fontFamily: "'Open Sans', sans-serif",
                            boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)',
                            background: 'linear-gradient(0deg, #F4BB4A, #F4BB4A)'
                        }}
                    />
                    <Button
                        className={styles.buttons}
                        text='Cancel'
                        onClick={onCancel}
                        style={{
                            height: '51px',
                            width: forExtraLargeDevices ? '100%': '30%',
                            fontFamily: "'Open Sans', sans-serif",
                            boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)',
                            color: 'black',
                            fontWeight: '400',
                            background: 'linear-gradient(0deg, #E3E3E3, #E3E3E3)'
                        }}
                    />
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;