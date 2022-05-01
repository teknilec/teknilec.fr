import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main id="mainBody">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
