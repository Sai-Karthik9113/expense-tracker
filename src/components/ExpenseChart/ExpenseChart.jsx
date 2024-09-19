import React from 'react';
import styles from './ExpenseChart.module.css';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import useScreenSize from '../../Helpers/ScreenSize';

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, total }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    // Calculate percentage
    const percentage = ((value / total) * 100).toFixed(0);

    return (
        <text
            x={x}
            y={y}
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fontWeight={700}
        >
            {`${percentage}%`}
        </text>
    );
};

const renderLegend = (props) => {
    const { payload } = props;
    const isMediumScreen = window.innerWidth < 1024 && window.innerWidth > 768;
    
    return (
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 10 }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
                    {/* Custom legend icon */}
                    <span
                        style={{
                            display: 'inline-block',
                            width: 20,
                            height: 8,
                            backgroundColor: entry.color,
                            marginRight: '4px',
                        }}
                    />
                    {/* Custom legend text */}
                    <span style={{ fontFamily: 'Open Sans', color: 'white' }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};


const ExpenseChart = ({ expenseData }) => {
    const { isMediumScreen, isSmallScreen } = useScreenSize();
    const colorMapping = {
        Food: '#A000FF',
        Entertainment: '#FF9304',
        Travel: '#FDE006'
    };

    const totalPrice = expenseData.reduce((sum, item) => sum + item.price, 0);;
    

    return (
        <ResponsiveContainer className={styles.container} width={isMediumScreen ? '60%' : (isSmallScreen ? '100%' : '30%')} height={250}>
            {
                expenseData.length === 0 ? (
                    <div className={styles.noDataMessage}>
                        <p>Visualize your spending insights here!</p>
                    </div>
                ) : (
                    <PieChart className={styles.chartContainer} width={400} height={250}>
                        <Pie
                            data={expenseData}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            stroke='none'
                            dataKey='price'
                            labelLine={false}
                            label={(props) => <CustomLabel {...props} total={totalPrice} />}
                        >
                            {
                                expenseData.map((data) => (
                                    <Cell key={`cell-${data.category}`}  fill={colorMapping[data.category]} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                        {
                            isMediumScreen ? (<Legend content={renderLegend} layout="vertical" verticalAlign="middle" align="right" />) : (<Legend content={renderLegend} />)
                        }
                        <Legend
                            content={renderLegend}
                        />
                    </PieChart> 
                )
            }
        </ResponsiveContainer>
    );
};

export default ExpenseChart;