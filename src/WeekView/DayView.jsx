import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form } from 'react-bootstrap';
import { updateDescription, updateDistance, updateDuration } from '../Redux/Reducers/weekViewSlice';

const DayView = (props) => {
  const dispatch = useDispatch();

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
                value={props.distance}
                onChange={(e) => dispatch(updateDistance([props.day,e.target.value]))}
              />
            </Form.Group>

            {/* Duration field */}
            <Form.Group className="mb-3" controlId="formDuration">
              <Form.Label>Duration:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Minutes"
                value={props.duration}
                onChange={(e) => dispatch(updateDuration([props.day,e.target.value]))}
              />
            </Form.Group>

            {/* Description field */}
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={props.description}
                onChange={(e) => dispatch(updateDescription([props.day,e.target.value]))}
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
}

export default DayView;