import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './style.css'

function PieForm() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [chartData, setChartData] = useState([]);

    const handleChange = (e) => {
        const box1Value = e.target.value ? parseFloat(e.target.value) : 0;
        const box2Value = 100 - box1Value;
        setValue1(box1Value);
        setValue2(box2Value);
    };
    const handleCreateChart = () => {
        const data = [
            { id: 1, value: value1, label: 'input 1' },
            { id: 2, value: value2, label: 'input 2' },
        ];
        setChartData(data);
    };

    return (
        <div className='piechart container'>
            <div className='piexhart row p-4' style={{ border: "2px solid black" }}>
                <div className='col-4 piechart mt-4'>
                    <label htmlFor="textbox1">Box 1:
                        <input
                            type="number"
                            id="textbox1"
                            onChange={handleChange}
                            value={value1}
                        />
                    </label>
                </div>
                <div className='col-4 piechart mt-4'>
                    <label htmlFor="textbox2">Box 2:
                        <input
                            type="number"
                            id="textbox2"
                            onChange={handleChange}
                            value={value2}
                        />
                    </label>
                </div>
                <div className='col-4 piechart mt-4'>
                    <button
                        className='piechart btn'
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            lineHeight: "20px",
                            boxShadow: "4px 4px 3px black",
                            border: "2px solid black",
                            padding: "10px 20px",
                            cursor: "pointer",
                            margin: "10px 0",
                            fontSize: "16px",
                            borderRadius: "5px",
                            width: "100%",
                        }}
                        onClick={handleCreateChart}
                    >
                        Create Chart
                    </button>
                    </div>
            </div>
            <div className="chart-container">
                <div className="chart">
                    <PieChart
                        series={[{ data: chartData }]}
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}

export default PieForm;