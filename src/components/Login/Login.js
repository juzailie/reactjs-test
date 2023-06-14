import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Login.css';
import Button from '../Generic/Button/Button';
import Input from '../Generic/Input/Input';
import AuthService from '../../Services/AuthService';

class Login extends Component {

    state = {
        orderForm: {
            name: {
                label: 'Username',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true,
                    message: "Username is required"
                },
                valid: false,
                touched: false
            },
            password: {
                label: 'Password',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    message: "Password is required"
                },
                valid: false,
                touched: false
            }
        },
        dovalidation: false,
        formIsValid: false,
        loading: false
    }

    loginHandler = ( event ) => {

        event.preventDefault();

        // authenticate user credential
        AuthService.authticate( {
            username: this.state.orderForm.name.value,
            password: this.state.orderForm.password.value
          }).then((response) => {
            let data = response.data;
            if(response.status === 200)
                this.validateloginresult(data);
          });
    }

    validateloginresult(data){
        if(data.status === true)
        {
            this.props.login(data.status);
            this.props.history.push("/myprofile");
        }else{
            // TODO: show error msg
            alert("invalid credential")
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render (){

        const formElementsArray = [];
        for (let key in this.state.orderForm) {

            console.log("key ", key);

            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.loginHandler}>
                <div id="login-data">
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        label={formElement.config.label}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        validation_message={formElement.config.validation.message}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                </div>
                <div className="form-group">
                    <div className="row pull-left">
                        <div className="col-md-12">
                            <NavLink className={"btn btn-link forgot-password"} to="/forgotpwd" exact>I forgot my password</NavLink>
                        </div>
                    </div>
                    <div className="row pull-right">
                        <div className="col-md-12">
                            <Button>Sign in</Button>
                        </div>
                    </div>
                </div>
            </form>
        );

        return (

            <div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3 offset-md-2">
                        <center><span>Sign in to start your session</span></center>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3 offset-md-2">
                        {form}


                         {/* <form onSubmit={loginHandler}>
                            <div id="login-data">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"
                                        id="username" 
                                        placeholder="UserName" 
                                        className="form-control" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                        id="password" 
                                        placeholder="Password" 
                                        className="form-control" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <div className="row pull-left">
                                        <div className="col-md-12">
                                            <NavLink className={"btn btn-link forgot-password"} to="/forgotpwd" exact>I forgot my password</NavLink>
                                        </div>
                                    </div>
                                    <div className="row pull-right">
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-danger" onClick={authContext.login}>Sign In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> */}

                    </div>
                </div>
            </div>
        );
    }
  
};
  
export default withRouter(Login); 

//React.memo(Login);