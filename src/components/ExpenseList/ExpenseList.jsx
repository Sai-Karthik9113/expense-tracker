import React from 'react';
import { CiRollingSuitcase } from "react-icons/ci";
import { PiGiftLight, PiPizzaLight } from "react-icons/pi";
import { MdOutlineCancel, MdOutlineEdit } from "react-icons/md";
import { IconButton, Pagination, PaginationItem } from '@mui/material';
import { LeftArrowIcon, RightArrowIcon } from '../../Helpers/Icons';
import styles from './ExpenseList.module.css';

const ExpenseList = ({ expenseData, onEditExpense, onDeleteExpense }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 3;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Food':
                return <PiPizzaLight />;
            case 'Entertainment':
                return <PiGiftLight />;
            case 'Travel':
                return <CiRollingSuitcase />;
            default:
                return null;
        }
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleDeleteClick = (expense) => {
        onDeleteExpense(expense.id, expense.price);
        
        const remainingItems = expenseData.length - 1;
        const maxPage = Math.ceil(remainingItems / itemsPerPage);
    
        if (currentPage > maxPage) {
            setCurrentPage(maxPage);
        }
    };

    const offset = (currentPage - 1) * itemsPerPage;
    const paginatedExpenses = (Array.isArray(expenseData) ? expenseData : []).slice(offset, offset + itemsPerPage);

    return (
        <div className={styles.expensesList}>
            {expenseData.length === 0 ? (
                <div className={styles.noDataMessage}>
                    <p>No expenses to display. Please add some expenses to see them here.</p>
                </div>
            ) : (
                <>
                    {paginatedExpenses.map((expense) => (
                        <div key={expense.id} className={styles.expenseItem}>
                            <div className={styles.icon}>
                                {getCategoryIcon(expense.category)}
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.title}>{expense.title}</h3>
                                <p className={styles.date}>{formatDate(expense.date)}</p>
                            </div>
                            <div className={styles.price}>
                                ₹{expense.price}
                            </div>
                            <div className={styles.actions}>
                                <IconButton 
                                    className={styles.deleteButton} 
                                    style={{ backgroundColor: '#FF3E3E', color: '#ffffff', padding: '10px !important', borderRadius: '15px' }}
                                    onClick={() => handleDeleteClick(expense)}
                                >
                                    <MdOutlineCancel />
                                </IconButton>
                                <IconButton 
                                    className={styles.editButton} 
                                    style={{ backgroundColor: '#F4BB4A', color: '#ffffff', padding: '10px !important', borderRadius: '15px' }}
                                    onClick={() => onEditExpense(expense)}
                                >
                                    <MdOutlineEdit />
                                </IconButton>
                            </div>
                        </div>
                    ))}

                    <Pagination
                        count={Math.ceil(expenseData.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        className={styles.pagination}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: LeftArrowIcon, next: RightArrowIcon }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '37px',
                                    height: '37px',
                                    boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)',
                                    ...(item.type === 'previous' || item.type === 'next'
                                        ? {
                                            backgroundColor: '#F1F1F1',
                                            color: '#222222',
                                            borderRadius: '15px',
                                        }
                                        : {
                                            // Active page style
                                            backgroundColor: item.page === currentPage ? '#43967B !important' : '#D3D3D3 !important',
                                            borderRadius: '5px',
                                            fontFamily: 'Ubuntu, sans-serif',
                                            fontSize: '24px',
                                            fontWeight: 400,
                                            color: item.page === currentPage ? 'white !important' : '#555555 !important',
                                        }
                                    ),
                                }}
                                {...item}
                            />
                        )}
                    />
                </>
            )}
        </div>
    );
};

export default ExpenseList;
