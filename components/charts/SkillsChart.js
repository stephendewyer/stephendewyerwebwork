import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const SkillsChart = () => {

    const yLabels = {
        0 : 'beginner',
        50 : 'experienced',
        100 : 'expert',
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
  
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'what I bring to the table',
                font: {
                    size: 18
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 50,
                    callback: function(value, index, values) {
                        return yLabels[value];
                    },
                }
                
            },
        }
    };
  
    const labels = ['UX design', 'interaction design', 'user research', 'web development', 'art', 'editing'];
  
    const data = {
        labels,
        datasets: [
            {
                label: 'my skills',
                data: [100, 100, 75, 100, 100, 100],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
}

export default SkillsChart;