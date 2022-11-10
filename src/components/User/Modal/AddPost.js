import React from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

const AddPostModal = (props) => {
  return (
    <div className='container'>
        <Modal
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header clooseButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create a post
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form>
                                <Form.Label>Text</Form.Label>
                                <Form.Control type="text" name="email" required placeholder="text"/>
                                
                                <div className='form-check' style={{paddingTop: 15}}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Is staff?
                                    </label>
                                </div>

                                <div className='form-check'>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Is superuser?
                                    </label>
                                </div>


                                <Form.Group>
                                    <Button 
                                        style={{marginTop: 10}}
                                        variant="primary" 
                                        type="submit">
                                        Publish
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>



                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddPostModal