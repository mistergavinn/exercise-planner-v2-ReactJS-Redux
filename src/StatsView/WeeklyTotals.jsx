import React from 'react';
import { Table } from 'react-bootstrap';

function WeeklyTotals() {
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
              <th>Distance:</th>
              <th>Duration:</th>
            </tr>
            <tr>
              <td colSpan={2}>Total:</td>
              <td>55</td>
              <td>124</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default WeeklyTotals;