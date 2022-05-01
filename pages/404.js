import React from 'react'
import CustomLink from '../components/CustomLink'

const Custom404 = () => {
    return (
        <>
            <div className="container pt-5">
                <div className="d-flex justify-content-center">
                    <h1>Page non trouvée</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <CustomLink href="/">
                        <h2>
                            {"Retourner à la page d'accueil"}
                        </h2>
                    </CustomLink>
                </div>
            </div>
        </>
    )
}

export default Custom404
