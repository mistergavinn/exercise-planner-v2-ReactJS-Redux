import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectDay } from '../Redux/Reducers/weekViewSlice';
import DayView from './DayView';

//const days =[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function WeekViewDashboard() {
  const days = useSelector(selectDay); //taking value of day from store

    return (
      <div>
        This is WeekViewDashboard
        <div className="border-outline3">
          <Container fluid>
            <Row>
              {days.map((day) => (
                <Col>
                  <DayView 
                  key={day.day}
                  day={day.day} 
                  distance={day.distance}
                  duration={day.duration}
                  description={day.description}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default WeekViewDashboard;