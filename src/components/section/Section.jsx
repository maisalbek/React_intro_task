import React from 'react';
import { Container, Form } from "react-bootstrap";


const Section = (props) => {
    return (
        <div>
            <Container className='w-50 mt-5'>
            <Form.Group className="mb-3">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Choose your Country</Form.Label>
                <Form.Select>
                <option>Kyrgyzstan</option>
                <option>Russia</option>
                <option>USA</option>
                </Form.Select>
            </Form.Group>
            <h2></h2>
            </Container>
        </div>
    );
};

export default Section;