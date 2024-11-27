import { useEffect, useState } from 'react';
import styled from './styles.module.css'
import { useNavigate } from 'react-router-dom';


const products = () => {

    const [allProducts, setAllProducts] = useState([])
    const navigate = useNavigate()

    const redirect = (path) => {
        navigate(path)
    }
    
    const fetchProducts = async () => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        const res = await fetch('http://localhost:3000/product', options);
        const data = await res.json();
        setAllProducts(data.allProducts);
    }
    
    const addToCart = async (productId) => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                productId: productId,
                quantity: 1
            })
        }
            const res = await fetch('http://localhost:3000/cart/add', options);
            const data = await res.json();
            console.log(data)

        }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className={styled.main}>
            <h1>Products</h1>
            <div className={styled.forms}>
                {
                    allProducts.map((product) => (
                        <div className={styled.card}>
                            <div>
                                <p>{product.name}</p>
                                <p>price: {product.price}</p>
                                <p>stock: {product.stock}</p>
                            </div>
                            <button onClick={() => addToCart(product.id)} className={styled.button}>+</button>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={() => redirect('/')} className={styled.button}>Main</button>
            </div>
        </div>
    )
}

export default products;