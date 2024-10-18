import React, {useState} from 'react'
import { Link,  useNavigate} from 'react-router-dom'
import { login as authLogin} from '../store/authSlice'
// ye naam yaha is file me as 'authLogin' use krenge
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'

// using 5:56:15 for react-hook-form
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    // register and handleSubmit are functions
    const [error, setError] = useState("")
    // handleSubmit is a function from react-hook-form


    const login = async (data) => {
        // always clean the error
        setError("")
        try {
            console.log("data", data);
            
            // data ke andar wrapper ata
            const session = await authService.login(data)
            console.log("session", session);
            
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) { dispatch(authLogin({userData}))}

               
            }
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }

    
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* jab form submit hoga to handle submit ek event hai, to aise khud   bana lena */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                {/* ye component vala input hai */}
                <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        // chatgpt or regex use krke email ko validate krna
                        // apply validation on email from react-hook-form documentation


                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }

                })}
                // har baar input field me ye karna padega kyoki useForm use kr rhe, kisi aur field me register use kr rhe to spread krna pdega
                // brackets me valuse unique rkhna "email"
                />

                <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password",{
                    required: true,
                    // validate mn kre to pass kre vrna nhi
                })}
                />

                <Button
                type='submit'
                className='w-full'
                >
                    Sign In
                </Button>

            </div>
        </form>
        </div>
    </div>
  )
}

export default Login

// Head to ./Signup.jsx