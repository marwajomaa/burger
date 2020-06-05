import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/authAction';
import { NavigationItemsUl, NavigationItem } from './style';


const navigationItems = ({token, logout}) => {
    return(
    <NavigationItemsUl>
        <NavigationItem to="/" active>Burger Builder</NavigationItem>
        {token&&<NavigationItem to="/orders">Orders</NavigationItem>}
        {token? (<NavigationItem label='logout' onClick={logout} >logout</NavigationItem>
        ):<NavigationItem to="/auth">Sign in</NavigationItem>}
    </NavigationItemsUl>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);