import React from 'react';
import { Container, Form } from 'react-bootstrap';


const DayView = (props) => {
    return (
      <div>
        <Container fluid className="border-outline3 text-align-center">
          <Form.Label>{props.day}</Form.Label>
          <Form>
            {/* Distance field */}
            <Form.Group className="mb-3" controlId="formDistance">
              <Form.Label>Distance (km):</Form.Label>
              <Form.Control type="number" placeholder="Planned distance.." />
            </Form.Group>

            {/* Duration field */}
            <Form.Group className="mb-3" controlId="formDuration">
              <Form.Label>Duration (mins):</Form.Label>
              <Form.Control type="number" placeholder="Planned duration.." />
            </Form.Group>
            
            {/* Description field */}
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
}

export default DayView;