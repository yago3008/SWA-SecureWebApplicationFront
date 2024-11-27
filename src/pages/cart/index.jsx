import { useEffect, useState } from 'react';
import styled from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [allItems, setAllItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const redirect = (path) => {
        navigate(path);
    };

    const getItems = async () => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        const res = await fetch('http://localhost:3000/cart/', options);
        const data = await res.json();
        setTotalPrice(data.totalPrice || 0);
        setAllItems(data.items || []);
    };

    const removeItem = async (productId, quantity) => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                productId: productId,
                quantity: quantity,
            }),
        };

        const res = await fetch(`http://localhost:3000/cart/remove/${productId}`, options);
        const data = await res.json();
        
        if (res.status === 200) {
            setAllItems(data.cart.items);
            setTotalPrice(data.cart.totalPrice);
        } else {
            console.error(data.error);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className={styled.main}>
            <h1>Cart</h1>
            <div className={styled.forms}>
                {allItems.length > 0 ? (
                    allItems.map((item) => (
                        <div key={item.productId} className={styled.card}>
                            <div>
                                <p>Product ID: {item.productId}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <button 
                                onClick={() => removeItem(item.productId, 1)} 
                                className={styled.button}
                            >
                                -
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
            <div>
                <button onClick={() => redirect('/')} className={styled.button}>Main</button>
            </div>
            <div>
                <p>Total price: {totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;
