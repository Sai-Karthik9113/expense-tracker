import React, { useState } from "react";
import styles from './IncomeForm.module.css';
import Button from "../Button/Button";
import useScreenSize from "../../Helpers/ScreenSize";

const IncomeForm = ({ onAddingIncome, onCancel }) => {
    const [income, setIncome] = useState('');
    const { isSmallScreen } = useScreenSize();

    const handleIncomeChange = (event) => {
        setIncome(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (income) {
            onAddingIncome(Number(income));
            setIncome('');
        }
    }

    return (
        <div className={styles.container}>
            <h1>Add Balance</h1>
            <form onSubmit={handleSubmit}>
                <input type='number' value={income} onChange={handleIncomeChange} placeholder="Income Amount" required />
                <div className={styles.formRow}>
                    <Button
                    text='Add Balance'
                    type='submit'
                    style = {{
                        height: '51px',
                        width: isSmallScreen ? '100%' : '70%',
                        fontFamily: "'Open Sans', sans-serif",
                        boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)',
                        background: 'linear-gradient(0deg, #F4BB4A, #F4BB4A)',
                        padding: '10px'
                    }}
                    />
                    <Button
                        text='Cancel'
                        onClick={onCancel}
                        style={{
                            height: '51px',
                            width: isSmallScreen ? '50%' : '40%',
                            fontFamily: "'Open Sans', sans-serif",
                            boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)',
                            color: 'black',
                            fontWeight: '400',
                            background: 'linear-gradient(0deg, #E3E3E3, #E3E3E3)',
                            padding: '10px 20px'
                        }}
                    />
                </div>
            </form>
        </div>
    )
};

export default IncomeForm;