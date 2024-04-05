
import React from 'react';
import CreateAccountSteps from '@/components/createaccount';
import NavbarLogin from '@/components/common/navbar/navbarlogin';

const CreateAccount = () => {
    return (
        <>
            <NavbarLogin />
            <CreateAccountSteps />
        </>
    )
}

export default CreateAccount;
