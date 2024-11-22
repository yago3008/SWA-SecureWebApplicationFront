import { useEffect, useState } from 'react';
import styled from './styles.module.css'
import { useNavigate } from 'react-router-dom';


const products = () => {

    const [allProducts, setAllProducts] = useState([])

    const fetchProducts = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch('http://localhost:3000/product', options);
        const data = await res.json();
        console.log(data)
        setAllProducts(data.allProducts);
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
                            <button className={styled.button}>+</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default products;