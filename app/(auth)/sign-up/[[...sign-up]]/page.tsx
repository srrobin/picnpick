import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className='flex items-center h-screen w-full'>
            <SignUp />
        </div>
    );
};

export default SignUpPage;