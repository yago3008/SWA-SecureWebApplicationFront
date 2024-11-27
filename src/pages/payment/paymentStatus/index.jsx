import { useEffect, useState } from 'react';
import styled from './styles.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const payment = () => {

    const { transactionId } = useParams()
    const [paymentData, setPaymentData] = useState('');
    const navigate = useNavigate();

    const redirect = (path) => {
        navigate(path);
    };

    const paymentStatus = async (transactionId) => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
        const res = await fetch(`http://localhost:3000/payment/status/${transactionId}`, options);
        const data = await res.json();
        setPaymentData(data.payment);
        
    }

    useEffect(() => {
        paymentStatus(transactionId);
    }, [])

    return (
        <div className={styled.main}>
            <h1>Payment Status</h1>
            <div className={styled.forms}>
                    <p>Transaction ID: {paymentData.id}</p>
                    <p>Total Price: {paymentData.totalPrice}</p>
                    <p>Payment Method: {paymentData.paymentMethod}</p>
                    <p>Status: {paymentData.status}</p>
            </div>
            <div>
                <button onClick={() => redirect('/')} className={styled.button}>Main</button>
            </div>
        </div>
    );
}

export default payment;