import { Form, Button } from "react-bootstrap";

function Contact() {
    return (
        <>
            <h1 className="font-weight-light">Contact Me</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Contact
                </Button>
            </Form>
        </>
    )
}

export default Contact;