import React from 'react';
import Search from './Home/Search';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import axios from 'axios';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      userInfo: [],
    };

    axios.get(`/api/profiles/${loggedInUser.id}`)
    .then((results) => {
      console.log(results.data);
      this.setState({
        userInfo: results.data,
      });
    }).catch((error) => {
      console.log(error);
    });

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  
  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  // Hide dropdown menu when user clicks out
  handleDropdownClick(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // Hide dropdown menu when user clicks out
  handleBodyClick() {
    this.setState({
      isOpen: false
    });
  }


  render () {
    return (
        <div>
          <div className="site_header">
            <div className="logo">
              <Link to="/"><h1>ynck</h1></Link>
            </div>
            {this.props.loggedInUser ? (
              <nav>
                <img className ='header-photo' src={this.state.userInfo.profile_image}/>
                <li><a onClick={this.handleDropdownClick} href="#">{ this.props.loggedInUser.first } <span className="dropdown_arrow"></span></a></li>
                <DropdownMenu isOpen={this.state.isOpen} loggedInUser={this.props.loggedInUser}/>
              </nav>
              ) : (
              <nav>
                <li><a href="/signup">Sign up</a></li>
                <li><a href="/login">Log in</a></li>              
              </nav>
              )}
          </div>
          <div className="divider"></div>
        </div>
    );
  }
}

export default Header;