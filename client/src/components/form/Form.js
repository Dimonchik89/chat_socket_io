import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import io from "socket.io-client"
import {nanoid} from "nanoid";
// import { socket } from '../../hooks/httpApi';

const socket = io.connect("http://localhost:4000")

const SendForm = ({handleClick}) => {
    const [message, setMessage] = useState("");


    return (
        <Form
            onSubmit={(e) => handleClick({e, message})}
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                    type="text" 
                    placeholder="Enter message" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default SendForm;