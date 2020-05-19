import React, {Component} from 'react'
import Auxiliary from '../../hoc/auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerToggleClicked = () => {
        this.setState( ( prevState ) => {
           return { showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Auxiliary>
                <div>
                    <Toolbar drawerToggleClicked = {this.sideDrawerToggleClicked} />
                    <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />
                </div>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}
export default Layout;
