import React from 'react';
import Carousel from 'nuka-carousel';

class MyDesigns extends React.Component {

  render() {
    return (
      <div>  
        <h2>My Designs</h2>
          <div className="image_grid">  
            <Carousel slidesToShow={3} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}>
              {this.props.myDesigns.map ((images, i) => <img key={i} src={images.url}/>)}
            </Carousel>
          </div>
      </div>
    );
  }
}

export default MyDesigns;