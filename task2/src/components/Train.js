import React from 'react';

const TrainSchedule = ({ scheduleData }) => {
    return (
        <div>
            <h2>Train Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Train Number</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((train) => (
                        <tr key={train.trainNumber}>
                            <td>{train.trainNumber}</td>
                            <td>{train.departureTime}</td>
                            <td>{train.arrivalTime}</td>
                            <td>{train.from}</td>
                            <td>{train.to}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainSchedule;
