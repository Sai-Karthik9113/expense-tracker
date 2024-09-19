import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Rectangle } from 'recharts';
import Button from "../Button/Button";
import styles from './HorizontalBarChart.module.css';

const HorizontalBarChart = ({ barChartData, handleExpense }) => {
    const sortedData = [...barChartData].sort((a, b) => b.price - a.price);
    
    return (
        <div className={styles.barChart}>
            {sortedData.length === 0 ? (
                <div className={styles.noDataMessage}>
                    <p>Add your expenses to see the trend.</p>
                    <Button 
                        style={{ background: 'linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)', color: '#ffffff', marginTop: '19px' }}
                        onClick={handleExpense} 
                        text='+ Add Expense' 
                        className={styles.addExpenseButton}
                    />
                </div>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sortedData} layout="vertical" >
                        <XAxis type="number" stroke="none" />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={120} />
                        <Tooltip />
                        <Bar 
                            dataKey="price" 
                            fill="#8784D2" 
                            barSize={22}
                            shape={<Rectangle radius={[0, 10, 10, 0]} />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default HorizontalBarChart;