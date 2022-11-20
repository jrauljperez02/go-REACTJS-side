import Carousel from 'react-bootstrap/Carousel';
import React, {useState, useContext} from 'react';
import UserContext from '../../../context/UserContext'

import Modal from 'react-bootstrap/Modal';

function PostSlider(props) {

  const {data} = props;
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('')
  const {allUsers} = useContext(UserContext);

  return (
    <>
      <Carousel fade>
        {[data.post_image].map(imageURL => (
          <Carousel.Item key = {imageURL} onClick = {() => {
              setShow(true);
              setSelectedImage(imageURL);
            }}>
            <img
              style={{borderRadius: 20}}
              
              src={imageURL}
              alt="First slide"
            />
            {allUsers[data.user] === undefined ? null : <Carousel.Caption style = {{textAlign: 'left'}}>
                <h3>{allUsers[data.user].name}</h3>
                <p>{allUsers[data.user].username}</p>
              </Carousel.Caption>}
          </Carousel.Item>
        ))}


      </Carousel>

      <Modal
          show={show}
          size = 'xl'
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Body>

          <Carousel>
            <Carousel.Item key = {data}>
                  <img
                    style={{borderRadius: 20}}
                    className="d-block w-100"
                    src={selectedImage}
                    alt="First slide"
                  />
                {allUsers[data.user] === undefined ? null : <Carousel.Caption  style = {{textAlign: 'left'}}>>
                <h3>{allUsers[data.user].name}</h3>
                <p>{allUsers[data.user].username}</p>
              </Carousel.Caption>}
              </Carousel.Item>
          </Carousel>

           
          </Modal.Body>
        </Modal>


    </>
  );
}

export default PostSlider;