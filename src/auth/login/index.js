import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '..';

const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location.state?.path || '/';

    const handleLogin = (e)=> {
        e.preventDefault();
        auth.login(user);
        navigate(redirectPath, { replace: true });
    }

    return (
        <>
            <label htmlFor="UserName">
                UserName: {' '}
                <input type="email" name="userName" id="userName" onChange={(e)=>setUser(e.target.value)} />
            </label>
            <button onClick={(e)=>handleLogin(e)}>Login</button>
        </>
    )
}

export default Login