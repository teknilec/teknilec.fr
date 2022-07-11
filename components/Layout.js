import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }, [])

    return (
        <>
            <Header />
            <main id="mainBody">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
