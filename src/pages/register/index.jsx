import { useState } from 'react';
import styled from './styles.module.css'


const Register = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')

    const submit = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        }

        const res = await fetch('http://localhost:3000/user/register', options);
        const data = await res.json();
        console.log(data);
    };

    return (
        <div className={styled.main}>
            <h1>REGISTER</h1>
            <div className={styled.forms}>
                <input className={styled.input} type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <input className={styled.input} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <input className={styled.input} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <button className={styled.input} onClick={submit}>Submit</button>
            </div>
        </div>
    )
};

export default Register;