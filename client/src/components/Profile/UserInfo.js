import React from 'react';
import { Link } from 'react-router-dom';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }

  handleEditProfile() {
    console.log('handleeditprofiled');
    this.setState({
      editMode: true
    });
  }

  render() {
    var tempHardCodedBio = 'My tattoos are my source of strength, with which I channel sasha fierce.';
    return ( 
      <div className="profile_info">
        <img src={this.props.userInfo.profile_image} className="user_profile_image"/>
        { !this.state.editMode ?
          <div>
            <h2 className="user_display_name">{this.props.userInfo.first} {this.props.userInfo.last}</h2>
            <p> { tempHardCodedBio } </p>
            { loggedInUser.id === this.props.userInfo.id ?
              <a href="#" onClick={this.handleEditProfile}>edit profile</a>
              : null
            }
          </div>
          : 
          <div className="editMode">
            <input name="name" type="text" placeholder={`${this.props.userInfo.first} ${this.props.userInfo.last}`}/>
            <textarea className="editBio" name="bio" placeholder={`${tempHardCodedBio}`} />
          </div>
        }
      </div>
    );
  }
}


export default UserInfo;