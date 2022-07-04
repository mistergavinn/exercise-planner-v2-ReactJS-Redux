import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form } from 'react-bootstrap';


const DayView = (props) => {
  
  const dispatch = useDispatch();
  const [distance, setDistance] = useState(2);
  const [duration, setDuration] = useState(4);
  const [description, setDescription] = useState("Test");

    return (
      <div>
        <Container fluid className="border-outline3 text-align-center">
          <Form.Label>
            <h5>{props.day}</h5>
          </Form.Label>
          <Form>
            {/* Distance field */}
            <Form.Group className="mb-3" controlId="formDistance">
              <Form.Label>Distance:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Km"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </Form.Group>

            {/* Duration field */}
            <Form.Group className="mb-3" controlId="formDuration">
              <Form.Label>Duration:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Minutes"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>

            {/* Description field */}
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
}

export default DayView;