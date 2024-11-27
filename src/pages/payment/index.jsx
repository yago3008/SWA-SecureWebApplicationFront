import { useEffect, useState } from 'react';
import styled from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const payment = () => {

    const [transactionId, setTransactionId] = useState([]);
    const navigate = useNavigate();

    const redirect = (path) => {
        console.log(path);
        navigate(path);
    };

    const creditCardPayment = async () => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        const res = await fetch('http://localhost:3000/payment/credit-card', options);
        const data = await res.json();
        setTransactionId(data.transactionId);
    }

    const PixPayment = async () => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        const res = await fetch('http://localhost:3000/payment/pix', options);
        const data = await res.json();
        setTransactionId(data.transactionId);
    }

    const handleRedirect = (transactionId) => {
        console.log(transactionId)
        if (transactionId) {
            redirect(`/payment/status/${transactionId}`);
        } else {
            redirect('/payment');
        }
    };

    return (
        <div className={styled.main}>
            <h1>Payment</h1>
            <div className={styled.forms}>
                <button onClick={() => creditCardPayment()} className={styled.button}>Credit card</button>
                <button onClick={() => PixPayment()} className={styled.button}>PIX</button>
            </div>
            <div className={styled.forms}>
                <button onClick={handleRedirect(transactionId)} className={styled.button}>Status</button>
                <button onClick={() => redirect('/')} className={styled.button}>Main</button>
            </div>
            
        </div>
    );
}

export default payment;