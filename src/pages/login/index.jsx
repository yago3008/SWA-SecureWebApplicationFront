import { useEffect, useState } from 'react';
import styled from './styles.module.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();


    const redirect = (path) => {
        navigate(path);
    };

    const submit = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        };
        const res = await fetch('http://localhost:3000/user/login', options);
        const resData = await res.json();
        setData(resData.error);
        
        if (res.status === 200) {
            localStorage.setItem('token', resData.user.token);
            redirect('/')
        } else {
            setError(true);
            console.log(error, res.status);
        }
    };

    return (
        <div className={styled.main}>
            <h1>Login</h1>
            <div className={styled.forms}>
                <input
                    className={styled.input}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={styled.input}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={submit} type="submit">Login</button>
                <div className={error ? styled.error : styled.hidden}>
                    <p>Message: {data}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
