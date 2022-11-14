import React, {useContext, useState} from 'react'
import AuthContext from '../../../context/AuthContext'
import UserContext from '../../../context/UserContext'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import {DOMAIN} from '../../../utils/domain'

const AddPostModal = (props) => {

    const {authTokens} = useContext(AuthContext);
    const {me} = useContext(UserContext);
    
    const [input, setInput] = useState({
        user: me.id,
        description: '',
        post_image: '',
    })

    const postData = async(e) => {
       
        if(input.description.length > 0 || input.post_image.length > 0){
            try{
                const response = await fetch(DOMAIN + '/api/post/posts/',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization' : `Bearer ${authTokens.access}`,
                            },
                            body: JSON.stringify(input),
                        }
                    );
                if(!response.ok){
                    console.log(response , 'hereeeeeeeeee')
                }
                const JSONresponse = await response.json();
                console.log(JSONresponse)
            }catch(error){
                console.log(error)
            }
        }
    }


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
                                <Form.Label>What's on your mind?</Form.Label>
                                <Form.Control
                                    onChange={e => setInput({...input, description: e.target.value})}
                                    as="textarea" 
                                    rows={2} 
                                    placeholder = 'Write here!'/>

                                <Form.Group>
                                    <Button 
                                        style={{marginTop: 20}}
                                        variant="dark" 
                                        type="submit"
                                        onClick={postData}
                                        >
                                        
                                        Publish
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control 
                                onChange={e => setInput({...input, post_image: e.target.value})}
                                placeholder=''
                                ></Form.Control>
                        </Col>
                    </Row>
                </Modal.Body>



                <Modal.Footer>
                    <Button variant="danger" onClick={props.close}>Close</Button>
                </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddPostModal