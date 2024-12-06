import { useEffect, useState } from 'react';
import styled from './styles.module.css'
import { useNavigate } from 'react-router-dom';


const suppliers = () => {

    const [allSuppliers, setAllSuppliers] = useState([])
    const navigate = useNavigate()
        
    const [name, setName] = useState('')
    const [product, setProduct] = useState('')

    const redirect = (path) => {
        navigate(path)
    }
    
    const getSuppliers = async () => {
        const token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        const res = await fetch('http://localhost:3000/supplier', options);
        const data = await res.json();
        setAllSuppliers(data);
    }


    const registerNewSupplier = async () => {



        const token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                product: product
            })
        }
            const res = await fetch('http://localhost:3000/supplier/add', options);
            const data = await res.json();
            console.log(data)
        }

    useEffect(() => {
        getSuppliers();
    }, [])
    
    return (
        <div className={styled.main}>
            <h1>Suppliers</h1>
            <div className={styled.forms}>
                <input className={styled.input} type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                <input className={styled.input} type="text" placeholder='Product' onChange={(e)=>setProduct(e.target.value)}/>
                <button className={styled.input} onClick={registerNewSupplier}>Register</button>
            </div>
            <div className={styled.forms}>
                {
                    allSuppliers.map((supplier) => (
                        <div className={styled.card}>
                            <div>
                                <p>{supplier.name}</p>
                                <p>product: {supplier.product}</p>
                            </div>
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

export default suppliers;