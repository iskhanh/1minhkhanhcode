import { createContext, useState } from 'react';

const navMobile = createContext();

function ContextProvider({ children }) {
    const [show, setShow] = useState(false);
    const activeNav = () => {
        setShow(!show);
    };
    const hideNav = () => {
        setShow(false);
    };
    const value = {
        show,
        activeNav,
        hideNav,
    };
    return <navMobile.Provider value={value}>{children}</navMobile.Provider>;
}

export { navMobile, ContextProvider };
