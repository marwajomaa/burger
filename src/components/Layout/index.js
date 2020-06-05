import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Toolbar from '../Navigation/Toolbar';
import { Main } from './style';
import SideBar from '../Navigation/Sidebar';

class Layout extends Component{
    state = {
        showSideBar: false
    }

    sideBarCloseHandler = () => {
     this.setState({ showSideBar : false })
    }

    toggleSideBar = () => {
        this.setState(prevState =>{
           return {showSideBar: !prevState.showSideBar}
        });
    }
    
    render() {
        const { showSideBar } = this.state;
        return(
            <Aux>
     <Toolbar toggleMenu={this.toggleSideBar} />
     <SideBar open={showSideBar} closeSideBar={this.sideBarCloseHandler} />
    <Main>
        {this.props.children}
    </Main>
    </Aux> 
        )
    }
}

export default Layout;