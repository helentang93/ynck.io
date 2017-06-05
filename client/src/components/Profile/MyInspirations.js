import React from 'react';
import Carousel from 'nuka-carousel';

const MyInspirations = React.createClass({

  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <div>  
        <h2>My Inspirations Feed</h2>
          <div className="image_grid">  
            <Carousel slidesToShow={3}>
              {this.props.myInspirations.map ((images, i) => <img src = {images.url}/>)}
            </Carousel>
          </div>
      </div>
    );
  }
});

export default MyInspirations;