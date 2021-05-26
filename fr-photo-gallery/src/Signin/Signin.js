import React from 'react';
import './Signin.css';

function Signin() {

    return (
        <div className="Signin">
            <div className="form-control">
                <form onSubmit=''>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;