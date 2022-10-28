import React from 'react';
import { ToastContainer, toast, cssTransition } from "react-toastify";

// https://animate.style/
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});

export const Info = () => {
    const info = (e)=> {
        e.preventDefault();
        toast.info("Hey 👋, see how easy!", {
            transition: bounce,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return(
        <>
            <button onClick={(e)=>info(e)} id="animate.css">
                Info
            </button>
            <ToastContainer transition={bounce} />
        </>
    );
};

export const Success = () => {
    const success = (e)=> {
        e.preventDefault();
        toast.success("Hey 👋, see how easy!", {
            transition: bounce,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return(
        <>
            <button onClick={(e)=>success(e)} id="animate.css">
                Success
            </button>
            <ToastContainer transition={bounce} />
        </>
    );
};

export const Warning = () => {
    const warning = (e)=> {
        e.preventDefault();
        toast.warn("Hey 👋, see how easy!", {
            transition: bounce,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return(
        <>
            <button onClick={(e)=>warning(e)} id="animate.css">
                Warn
            </button>
            <ToastContainer transition={bounce} />
        </>
    );
};

export const Error = () => {
    const error = (e)=> {
        e.preventDefault();
        toast.error("Hey 👋, see how easy!", {
            transition: bounce,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return(
        <>
            <button onClick={(e)=>error(e)} id="animate.css">
                Error
            </button>
            <ToastContainer transition={bounce} />
        </>
    );
};