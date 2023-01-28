import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-up-form.style.scss'

import Button from "../button/button.component";



const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);


    const resetFormFields = () => {
        setFormFields(defaultFormField);

    }

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (password !== confirmPassword) {  
                alert("password do not match")
                return;

            }

            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);

                await createUserDocumentFromAuth(user, { displayName });

                
                resetFormFields();
                
            } catch(error) {
                if(error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email alredy in use');
                } else {
                console.log('user creation encauntered an error' ,error);
                }
            }
        };   



        const handleChange = (event) => {
            const { name, value } = event.target;

            setFormFields({...formFields, [name]: value });
        }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>sign up with email and password</span>
            <form onSubmit={handleSubmit}>

            <FormInput 
                label="Display Name"
                type='text'
                 required 
                 onChange={handleChange} 
                 name="displayName" 
                 value={displayName} />

            <FormInput 
                label="Email"
                type='email'
                 required 
                 onChange={handleChange} 
                 name="email" 
                 value={email} />

            <FormInput 
                label="Password"
                type='password'
                 required 
                 onChange={handleChange} 
                 name="password" 
                 value={password} />

            <FormInput 
                label="Confirm password"
                type='password'
                 required 
                 onChange={handleChange} 
                 name="confirmPassword" 
                 value={confirmPassword} />

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;