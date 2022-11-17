import React, {useContext, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import {DOMAIN} from '../../utils/domain'

const AddPostModal = (props) => {

    const {authTokens, user} = useContext(AuthContext);
    
    const [input, setInput] = useState({
        user: user.user_id,
        description: '',
    })

    const inpFile = document.getElementById('inpFile');

    const postData = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('inpFile',inpFile.files[0])
        console.log(inpFile.files)
        // if(input.description.length > 0 || input.post_image.length > 0){
        //     try{
        //         const response = await fetch(DOMAIN + '/api/post/posts/',{
        //                     method: 'POST',
        //                     headers: {
        //                         'Content-Type': 'application/json',
        //                         'Authorization' : `Bearer ${authTokens.access}`,
        //                     },
        //                     body: JSON.stringify(input),
        //                 }
        //             );
        //         if(!response.ok){
        //             console.log(response , 'hereeeeeeeeee')
        //         }
        //         const JSONresponse = await response.json();
        //         console.log(JSONresponse)
        //     }catch(error){
        //         console.log(error)
        //     }
        // }
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
                        Publica algo!
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form>
                                <Form.Label>Cuentanos algo!</Form.Label>
                                <Form.Control
                                    onChange={e => setInput({...input, description: e.target.value})}
                                    as="textarea" 
                                    rows={1} 
                                    placeholder = 'Escribe aqui!'/>

                                <Form.Group>
                                    <Button 
                                        style={{marginTop: 20}}
                                        variant="dark" 
                                        type="submit"
                                        onClick={postData}
                                        >
                                        
                                        Publicar
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Form.Label>Publica un momento!</Form.Label>
                            <Form.Control 
                                id = 'inpFile'
                                type = 'file'
                                placeholder=''
                                ></Form.Control>
                        </Col>
                    </Row>
                </Modal.Body>



                <Modal.Footer>
                    <Button variant="danger" onClick={props.close}>Cerra</Button>
                </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddPostModal