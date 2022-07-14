import { useRouter } from 'next/router'
import dataSolutions from './../../data/solutions.yml'

const Solution = ({ solution }) => {
    const router = useRouter()
    const slug = router.query.slug

    return (
        <div className="container">
            <h3>Slug : {slug}</h3>
            <h3>Title : {solution.title}</h3>
        </div>
    )
}

export const getStaticPaths = async () => {
    const paths = Object.keys(dataSolutions).map((solutionSlug) => {
        return { params: { slug: solutionSlug } }
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    return {
        props: {
            solution: dataSolutions[context.params.slug],
        },
    }
}

export default Solution
