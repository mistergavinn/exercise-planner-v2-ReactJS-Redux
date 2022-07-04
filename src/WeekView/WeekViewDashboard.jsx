import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DayView from './DayView';

const days =[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function WeekViewDashboard() {
    return (
      <div>
        This is WeekViewDashboard
        <div className="border-outline3">
          <Container fluid>
            <Row>
              {days.map((day) => (
                <Col>
                  <DayView day={day}/>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default WeekViewDashboard;