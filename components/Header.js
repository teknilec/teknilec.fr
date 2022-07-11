import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
                id="mainNav"
            >
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">
                            <ExportedImage
                                src="/images/teknilec-logo.png"
                                alt="Large Image"
                                width="200px"
                                height="25px"
                            />
                        </a>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link me-lg-3" href="/solutions">Solutions</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link me-lg-3" href="/realisations">Réalisations</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link me-lg-3" href="/carrieres">Carrières</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link me-lg-3" href="/contact">Contact</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
