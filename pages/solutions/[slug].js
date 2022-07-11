import { useRouter } from 'next/router'
import React from 'react'

const Solution = ({ }) => {
    const router = useRouter()

    return (
        <>
            <h2>{"SSI (système de sécurité incendie)"}</h2>
            <h3>{router.query.slug}</h3>

            <div className="row">
                <div className="row">
                    <h3>Détection incendie</h3>

                    <div className="row">
                        <div className="col col-md-8">
                            <p>
                                Un système de détection incendie a pour objectif de déceler et de signaler le plus tôt possible les prémices d’un sinistre, afin de réduire le délai de mise en œuvre des mesures de lutte contre l’incendie et d’en limiter l’impact.
                            </p>
                            <p>
                                Les détecteurs automatiques d’incendie (DAI), reposent sur différentes technologies qui permettent de rechercher les phénomènes liés à un départ de feu : gaz de combustion, fumée, flamme, chaleur…
                            </p>
                            <p>
                                Lors d’un incendie, le détecteur est activé, il envoie un signal à la centrale incendie. Ce signal est traduit d’une part en une information claire pour l’utilisateur, et d’autre part, dans le cadre d’un système de sécurité incendie (SSI), il met en œuvre les automatismes à commander pour protéger les personnes et les biens.
                            </p>
                            <p>
                                Doté de son propre centre de Recherche et Développement et toujours en quête d’innovation, DEF propose une gamme très large de systèmes de détection incendie, permettant de répondre aux problématiques les plus exigeantes. Détection ponctuelle, linéaire, par aspiration, adressable ou conventionnelle, filaire ou radio : chaque exploitant trouvera chez DEF une réponse adaptée à ses contraintes de site.
                            </p>
                        </div>
                        <div className="col col-md-4">
                            <img src="https://www.defonline.com/wp-content/uploads/2017/09/detection_incendie.png" alt="something" />

                            <img src="https://www.defonline.com/wp-content/uploads/2017/09/detection_incendie.png" alt="something" />
                        </div>
                    </div>

                    <div className="row">
                        <h4>Nos services</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat quaerat consectetur ab nobis non pariatur voluptatum neque consequatur unde qui voluptatem ratione error exercitationem, atque ipsa nihil sunt iusto provident dolorem eveniet cupiditate in autem. Minima modi neque quas molestiae asperiores ad aspernatur voluptatem facilis quidem. Vitae, pariatur aliquid.</p>

                        <ul>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, facilis! Odit esse impedit et quaerat quasi dolorum animi voluptatem, fuga vitae, voluptates totam quisquam quod veniam. Assumenda, iusto eos! Commodi.</li>
                            <li>Doloribus odit soluta blanditiis. Ducimus magnam tenetur excepturi obcaecati nulla nobis aut commodi, optio est sint neque quo quisquam possimus quas accusamus et esse laboriosam. Amet maiores atque ipsam praesentium?</li>
                            <li>Deleniti numquam, voluptatum est eveniet ipsum iste incidunt nulla qui enim excepturi quidem vel suscipit sint voluptatem et corrupti mollitia, similique aspernatur sit, repudiandae ex. Esse vero inventore fugiat aspernatur!</li>
                        </ul>
                    </div>

                    <div className="row">
                        <h4>Nous installons</h4>
                        <ul>
                            <li>SIEMENS</li>
                            <li>Chubb</li>
                            <li>DEF</li>
                            <li>ESSER</li>
                            <li>FINSECUR</li>
                            <li>AVISS</li>
                            <li>NEUTRONIC</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution
