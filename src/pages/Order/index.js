import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetailsStart } from './../../redux/Orders/orders-actions';
import { useParams } from 'react-router-dom';
import OrderDetails from '../../components/OrderDetails';

const mapState = ({ ordersData }) => ({
    orderDetails: ordersData.orderDetails
})

const Order = () => {
    const { orderID } = useParams();
    const dispatch = useDispatch();
    const { orderDetails } = useSelector(mapState);
    const { orderTotal } = orderDetails;

    console.log(orderDetails, 'order details')

    useEffect(() => {
        dispatch(getOrderDetailsStart(orderID))
    },[])

    return (
        <div>
            <h1>
                Order ID: #{orderID}
            </h1>

            <h3>
                Total: {orderTotal}
            </h3>
        <OrderDetails order={orderDetails}/>

        </div>
    )
}

export default Order;
