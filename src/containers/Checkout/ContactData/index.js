import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button';
import axios from '../../../axios-order.js';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Input';
import styled from 'styled-components';

const ContactDataDiv = styled.div`
 margin: 20px auto;
 width: 80%;
 text-algin: center;
 @media(min-width: 600px){
     width: 500px
 }
`

class ContactData extends Component {
    state ={
        name:'',
        email: '',
        street: '',
        postalCode: '',
        loading: false
    }

    handleClick = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleOrder = (e) => {
        e.preventDefault();
        const { name, email, street, postalCode } = this.state;
        const { ings, price, userId, token } =this.props;
        console.log(userId, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuser')
     this.setState({loading: true});
    const order = {
        ings,
        price,
        name,
        email,
        street,
        postalCode,
        userId
    }
    console.log(order, 'ooooooooooooooo');
    
    axios.post('/orders.json?auth='+ token, order)
    .then(response =>{
         this.setState({loading: false});
         this.props.history.push('/')
        })
    .catch(err =>{
        console.log(err)
     this.setState({loading: false})
    })
        
    }


    render(){
        const { name, email, loading, street, postalCode } = this.state;
        let form = (
            <form onSubmit={this.handleOrder}>
                <Input type='text' value={name} name='name' placeholder='Your Name' handleClick={this.handleClick} />
                <Input type='email' value={email} name='email' placeholder='Your Email' handleClick={this.handleClick} />
                <Input type='text' value={ street } name='street' placeholder='Street' handleClick={this.handleClick} />
                <Input type='text' value={postalCode} name='postalCode' placeholder='Postal Code' handleClick={this.handleClick} />
                <Button type='success' label='ORDER' />
            </form>
        )

        if(loading){
            form = <Spinner />
        }
        return(
            <ContactDataDiv>
                <h4>Enter your contact data</h4>
                <p>{form}</p>
            </ContactDataDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        userId: state.auth.userId,
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(ContactData);