import React from 'react';

class OurWork extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
    
      
  }
  render () {
    return (
      <div className="user_stream">
        <h2>Our Work</h2>
        <div className="image_grid">
        { this.props.images.map((image, i) => <img src={image.url} key={i} />) }
        </div>
      </div>
    );
  }
}

export default OurWork;