import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectDay } from '../Redux/Reducers/weekViewSlice';

function WeeklyTotals() {

  let totalDistance = 0;
  let totalDuration = 0;
  const days = useSelector(selectDay);
  days.map((day) => {
    totalDistance += parseInt(day.distance);
    totalDuration += parseInt(day.duration);
    return [totalDistance, totalDuration];
  });
  let totalDurationHours = totalDuration / 60;
    return (
      <div>
        Weekly Totals
        <Table boredered size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Run</th>
              <th>Bike</th>
              <th>Others</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Distance:</td>
              <td>23</td>
              <td>124</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>3.5</td>
              <td>5.2</td>
              <td>0.5</td>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th>Distance (Km):</th>
              <th>Duration (Hours):</th>
            </tr>
            <tr>
              <td colSpan={2}>Total:</td>
              <td>{totalDistance}</td>
              <td>{totalDurationHours}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default WeeklyTotals;