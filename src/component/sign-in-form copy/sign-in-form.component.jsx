
import { useState } from 'react';


import FormInput from '../form-input/form-input.component';

import './sign-in-form.style.scss'

import Button from '../button/button.component';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword  } from "../../utils/firebase/firebase.utils"



const defaultFormField = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    };

        const signInWithGoogle = async () => {
            await signInWithGooglePopup();
            
        }

        const handleSubmit = async (event) => {
            event.preventDefault();


            try {
              await signInAuthUserWithEmailAndPassword(email,password);
                
                resetFormFields();
            } catch(error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('incorrect password');
                        break;
                    case 'auth/user-not-found':    
                        alert('no user associated with email');
                        break;
                        default:
                            console.log(error)
                }
            }
        };   



        const handleChange = (event) => {
            const { name, value } = event.target;

            setFormFields({...formFields, [name]: value });
        }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>sign in with email and password</span>
            <form onSubmit={handleSubmit}>

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
                <div className='buttons-container'>
                <Button type="submit">Sign in</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                    GOOGLE SIGN IN
                </Button>
                </div>
            </form>
        </div>
    );
};


export default SignInForm;