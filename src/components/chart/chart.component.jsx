import React from 'react'
import {Bar} from 'react-chartjs-2'
import './chart.styles.scss'

const Chart = ({chartData}) => {
    var labels = chartData.map(function(e) {
        return e.employee_name;
    })
    var values = chartData.map(function(e) {
        return e.employee_salary
    })

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Employee Salary",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                // borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: values,
            }
        ]
    }

    return (
    <div className="chart">
        {/* <h2>Bar Chart</h2> */}
        <Bar data={data} width={100} height={400} options={{
            maintainAspectRatio: false
          }} />
    </div>
 )
    
}

export default Chart;