import Carousel from 'react-bootstrap/Carousel';

function PostSlider(props) {

  const {data} = props;

  return (
    <Carousel>
      <Carousel.Item key = {data}>
            <img
              className="d-block w-100"
              src={data}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
    </Carousel>
  );
}

export default PostSlider;