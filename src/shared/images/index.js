import React from 'react';

export const Logo = () => {
    return (
        <>
            <img src={require('../../assets/images/logo/logo.png')} alt="logo" style={{ maxWidth: "10%" }} draggable={false}/>
        </>
    );
};
