import React, { Component } from 'react';
import classes from './Orders.module.css';
import Order from '../../components/Order/Order'

class Orders extends Component {
    render () {
        return (
            <div className={classes.Orders}>

                <Order />
                <Order />
            </div>
        );
    }

}

export default Orders;