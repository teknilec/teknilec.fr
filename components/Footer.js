import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        &copy; Teknilec {(new Date).getFullYear()}. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
