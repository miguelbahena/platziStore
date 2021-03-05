import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({history}) => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const paypalOptions = {
        clientId: 'AXVmXKXsBBkD1MEgUZWNJq9KbH_6X54LMwUZWO4JbL7KV-BvTbl0PHDQOffucKpNU2weYD1-8y5EDjgn',
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        console.log(sum)
        return sum;
    };

    const handlePaymentSuccess = (data) => {
        console.log(data);

        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }

            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {
                    cart.map((item) => (
                        <div className="Payment-item" key={item.title}>
                            <div className="Payment-element">
                                <h4>{item.title}</h4>
                                <span>
                                    $ {' '} {item.price}
                                </span>
                            </div>
                        </div>
                    ))
                }
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div>
                Sidebar
            </div>
        </div>
    );
}

export default Payment;