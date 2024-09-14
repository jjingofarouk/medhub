import React, { useState } from 'react';
import './TrackHealthProgress.css'; // Import CSS file for styling

const TrackHealthProgress = () => {
    const [progressData, setProgressData] = useState([
        { date: '2024-09-01', weight: '70 kg', steps: '5000', sleep: '7 hrs' },
        { date: '2024-09-02', weight: '69.5 kg', steps: '6000', sleep: '6.5 hrs' },
        // Add more sample data here
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            date: e.target.date.value,
            weight: e.target.weight.value,
            steps: e.target.steps.value,
            sleep: e.target.sleep.value
        };
        setProgressData([...progressData, newEntry]);
        e.target.reset();
    };

    return (
        <div className="track-health-progress">
            <h1>Track Your Health Progress</h1>
            <div className="progress-summary">
                <h2>Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Weight</th>
                            <th>Steps</th>
                            <th>Sleep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progressData.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.weight}</td>
                                <td>{entry.steps}</td>
                                <td>{entry.sleep}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="add-entry">
                <h2>Add New Entry</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input type="date" name="date" required />
                    </label>
                    <label>
                        Weight:
                        <input type="text" name="weight" placeholder="e.g., 70 kg" required />
                    </label>
                    <label>
                        Steps:
                        <input type="number" name="steps" placeholder="e.g., 5000" required />
                    </label>
                    <label>
                        Sleep:
                        <input type="text" name="sleep" placeholder="e.g., 7 hrs" required />
                    </label>
                    <button type="submit">Add Entry</button>
                </form>
            </div>
        </div>
    );
};

export default TrackHealthProgress;

