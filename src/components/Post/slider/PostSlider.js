import Carousel from 'react-bootstrap/Carousel';

function PostSlider() {

  const photos = [
    'https://images.pexels.com/photos/9834735/pexels-photo-9834735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2221318/pexels-photo-2221318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8041064/pexels-photo-8041064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  return (
    <Carousel>
      {photos.map(photo => {
        return (
          <Carousel.Item key = {photo}>
            <img
              className="d-block w-100"
              src={photo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default PostSlider;