import React, { useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BillingChart = ({ monthlyBilling }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Billing Insight',
                data: monthlyBilling,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            },
        ]
    };

    return (
        <div>
            <Line data={data}
                options={{
                    // responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }} />
        </div>
    );
};

export default BillingChart;