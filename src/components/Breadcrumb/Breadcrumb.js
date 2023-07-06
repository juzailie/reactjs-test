import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProductService from '../../Services/ProductService';

class Breadcrumb extends Component {

  state = {
    pathSegments: [""],
    isdashboard: false
  };

  componentDidMount() {
    let paths = this.props.location.pathname.split('/').filter(segment => segment !== '');
    this.setState({ pathSegments: paths })
  }

  shouldComponentUpdate(nextProps, nextState) {

    const currentpath = this.props.location.pathname;
    const newpath = nextProps.location.pathname;

    // let currentPaths = this.props.location.pathname.split('/').filter(segment => segment !== '');
    let newPaths = nextProps.location.pathname.split('/').filter(segment => segment !== '');

    if (currentpath !== newpath) {

      if (newPaths[0] === "product") {

        if (newPaths.length === 2) {

          ProductService.get(newPaths[1])
            .then((d) => {

              if (d.status === 200) {
                newPaths[1] = d.data.name;
                this.setState({ pathSegments: newPaths });
              }

            });
        } else {
          this.setState({ pathSegments: newPaths });
        }

      } else {
        this.setState({ pathSegments: newPaths });
      }

    }

    if (newPaths.length > 0) {

      if (newPaths[0] === "dashboard") {

        if (this.state.isdashboard !== true) {
          this.setState({ isdashboard: true });
        }

      } else {

        if (this.state.isdashboard === true) {
          this.setState({ isdashboard: false });
        }

      }


    }

    return true;

  }

  toPropertyPathName(paths) {

    let result = "";

    if (paths === "forgotpwd") {
      result = "Forgot Password";
    } else if (paths === "myprofile") {
      result = "My Profile";
    } else if (paths === "changepassword") {
      result = "Change Password";
    } else if (paths === "dashboard") {
      result = "Dashboard";
    } else if (paths === "product") {
      result = "Product";
    } else if (paths === "product") {
      result = "Product";
    } else if (paths === "login") {
      result = "Sign-In";
    } else if (paths === "unauthorized") {
      result = "Unauthorized";
    }else{
      result = paths;
    }

    return result;
  }

  render() {

    let paths = this.state.pathSegments;
    console.log("render path ", paths);

    return (
      <nav className={`${(paths.length === 0 || this.state.isdashboard) && 'd-none'}`} aria-label="breadcrumb">

        <ol className="breadcrumb">

          {paths.map((segment, index) => (

            <li key={index} className="breadcrumb-item active">

              <Link to={`/${paths.slice(0, index + 1).join('/')}`}>
                {this.toPropertyPathName(segment)}
              </Link>

            </li>

          ))}

        </ol>

      </nav>
    );
  }


};

export default withRouter(Breadcrumb);
