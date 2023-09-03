import React, { useState } from "react";
import authService from "fBase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newAccount, setNewAccount] = useState(true) // 계정 유무에 따라 계정을 생성하거나 로그인
    const onChange = (event) => {
        const { target: { name, value } } = event
        if (name === 'email') {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            let data;
            if (newAccount) { // create account
                data = await createUserWithEmailAndPassword(authService, email, password);
            }
            else { // log in
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }
    return (

        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="email" placeholder="Email" required value={email} onChange={onChange} />
                <input type="password" name="password" placeholder="Password" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Log in"} />
            </form>
            <div>
                <button>Continue with google</button>
                <button>Continue with github</button>
            </div>
        </div>
    )

}

export default Auth