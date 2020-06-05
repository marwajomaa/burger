import React, { Component } from 'react';
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from '../../actions/authAction';
// import withErrorHandler from '../../hoc/withErrorHandler';
import axios from 'axios';

const initialState = {
    email: '',
    password: '',
}

class Auth extends Component {
    state = {
        email: '',
        password: '',
        isSignUp: true
    }

    handleChange = (e) => {    
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit =(e) => {
        e.preventDefault();
       const {email, password, isSignUp} = this.state;
       console.log(this.props.auth);
       this.props.auth(email, password, isSignUp);
    //    this.setState(initialState)
    }

    switchSignUp = () => {
        this.setState({isSignUp: !this.state.isSignUp})
    }

    render() {
        const { email, password, isSignUp } = this.state;
        const { loading, error, isAuth } = this.props;

        let form = (
            <form onSubmit={this.handleSubmit}>
         <Input 
            type="email"
            value={email}
            name="email"
            placeholder="Your Email"
            handleClick={this.handleChange}/>
         <Input 
            type="text"
            value={password}
            name="password"
            placeholder="password"
            handleClick={this.handleChange}/>
             <Button type='success' label="Submit" />
        </form>
        )

        if(loading){
            form = <Spinner />
        }
        
        let redirect = null;
        if(isAuth){
            redirect = <Redirect to='/' />
        }

        return(
            <div style={{margin: '4rem auto'}}>
                {redirect}
                {isSignUp?<p>sign up for new  account</p>: <p>login to you account</p>}
                {form}
                {error&& <p>{error}</p>}
                <Button type="danger" label={isSignUp ? 'Switch to signin': 'Switch to signup'} clicked={this.switchSignUp} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    }
}
const mapDispatchToProps =dispatch => {
  return{
      auth: (email,password, isSignUp)=> dispatch(auth(email,password, isSignUp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);