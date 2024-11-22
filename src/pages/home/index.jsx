import { useEffect, useState } from 'react';
import styled from './styles.module.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const redirect = (path) => {
        navigate(path)
    }

    return (
        <div className={styled.main}>
            <h1>Main</h1>
            <div className={styled.forms}>
                <button onClick={() => redirect('/products')} >Products</button>
                <button onClick={() => redirect('/cart')} >Cart</button>
                <button onClick={() => redirect('/payment')} >Payment</button>
            </div>
        </div>
    )

}

export default Home;