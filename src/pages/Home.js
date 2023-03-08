import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h2>home</h2>
            <ul>
                <li><Link to="/login">登录</Link></li>
            </ul>
        </>
    );
}

export default Home;