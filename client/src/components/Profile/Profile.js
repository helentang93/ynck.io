import React from 'react';
import axios from 'axios';

import UserInfo from './UserInfo';
import Feed from './Feed';
import Header from './../Header';
import Footer from './../Footer';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTattoos: [],
      myDesigns: [],
      myInspirations: [],
      userInfo: [],
    };
    this.getUserImages = this.getUserImages.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getUserImages();
    this.getUserInfo();
  }

  getUserImages() {
    axios.get('/api/profiles/images', {
      params: {
        id: this.props.match.params.id,
      }
    })
    .then((results) => {
      this.setState({
        myTattoos: results.data.tattoo,
        myDesigns: results.data.design,
        myInspirations: results.data.inspiration
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  getUserInfo() {
    axios.get(`/api/profiles/${this.props.match.params.id}`)
    .then((results) => {
      this.setState({
        userInfo: results.data,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Header loggedInUser={loggedInUser}/>
        <div className="feed_container">
          <div className="profile_sidebar">
            <UserInfo userInfo = {this.state.userInfo}/>
          </div>
          <div className="main_content">
            <Feed myTattoos = {this.state.myTattoos} myDesigns = {this.state.myDesigns} myInspirations = {this.state.myInspirations}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;