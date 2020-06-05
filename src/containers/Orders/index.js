import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler'
import styled from 'styled-components';
import order from '../../actions/order';

const OrdersDiv = styled.div`
 width: 100%;
 padding-top: 35px;
`

class Orders extends Component {
  
    componentWillMount(){
      const { token, userId } = this.props;
      this.props.fetchOrders(token, userId)
    }

    render(){
      const { orders, loading } = this.props;
      let transformedOrders = '';
      if(loading){
       transformedOrders = <Spinner />;
     }else if(orders){  
       transformedOrders = orders.map(order => <Order key={order.id} price={order.price} ings={order.ings} />)
      }
           //     if(orders){
           // transformedOrders = Object.keys(this.state.orders)
           // .map(key => {
           //     return [...Array(orders[key])].map(order => <Order key={key} order={order} /> )
           // })
         // }
     
        return(
            <OrdersDiv>
              {transformedOrders}
            </OrdersDiv>
        )
    }
}

const mapStateToProps = state => {
  console.log(state.auth.token)
  return{
    orders: state.orders.orders,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return{
  fetchOrders: (token, userId) => dispatch(order.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));