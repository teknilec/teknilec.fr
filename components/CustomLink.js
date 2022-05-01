import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';

const CustomLink = ({ href, children, className, activeClass = "active", onClick }) => {
    const router = useRouter();

    if (router.pathname.startsWith(href)) {
        className += " " + activeClass
    }

    return (
        <Link href={href}>
            <a className={className} onClick={onClick}>{children}</a>
        </Link>
    )
}

export default CustomLink
