import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WeeklyTotals from './WeeklyTotals';

function StatDashboard() {
    return ( 
        <div>
            This is StatDashboard view
            <div className='border-outline2'>
                <Container fluid>
                    <Row>
                        <Col className='border-outline2'>Misc Views</Col>
                        <Col className='border-outline2'>Pace/Power </Col>
                        <Col className='border-outline2'>
                            <WeeklyTotals />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
     );
}

export default StatDashboard;