import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";


const Redirect = ({to}) => {
    const router = useRouter();
    useEffect(() => {
        router.push(to);
    }, [to]);
    return null;
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email did not be empty')
    const [passwordError, setPasswordError] = useState('Password did not be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is incorrect')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        if (!pass.test(e.target.value)) {
            setPasswordError('Password is incorrect')
            if (!e.target.value) {
                setPasswordError('Password did not be empty')
            }
        } else {
            setPasswordError('')
        }
    }


    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const [shouldRedirect, setShouldRedirect] = useState(false);
    if (shouldRedirect) {
        return <Redirect to="/PersonalPage" />
    }


    return (

        <div id="r13">
            <Head>
                <title>Login</title>
            </Head>
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <div className="login-wr">
                            <h1>Sign in</h1>
                            <form className="form">
                                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                                <input onChange={emailHandler} value={email} onBlur={blurHandle} name="email"
                                       type="text"
                                       placeholder="Enter your email"/>
                                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                                <input onChange={passwordHandler} value={password} onBlur={blurHandle} name="password"
                                       type="password"
                                       placeholder="Enter your password"/>
                                <button disabled={!formValid} onClick={()=> setShouldRedirect(true)} type="submit">Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;