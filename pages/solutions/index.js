import React from "react";
import dataSolutions from './../../data/solutions.yml'

const Solutions = ({ solutions = {} }) => {
    return (
        <div className="container">
            <h1 className="text-center">Nos solutions</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dolores pariatur molestiae itaque est nesciunt, illo dolorem hic sequi ullam consequuntur iure sunt expedita facere incidunt minus, veritatis nisi perferendis! Nobis, quisquam eaque repellat sit, nam saepe ea provident ipsa impedit necessitatibus voluptates doloribus hic corporis fugiat similique labore rem?</p>

            <div className="row row-cols-3">
                {
                    Object.keys(solutions).map((solutionSlug) => {
                        const sol = solutions[solutionSlug];
                        return (
                            <div className="col mb-4" key={solutionSlug}>
                                <div className="card" key={solutionSlug}>
                                    <div className="card-body">
                                        <h5 className="card-title">{sol?.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">{"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export const getStaticProps = async () => {
    return {
        props: {
            solutions: dataSolutions,
        },
    }
}

export default Solutions;
