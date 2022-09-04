import './page-style.css';

const AboutUs = () => {
    return(
        <div className=''>
            <section className='section' id='about'>
                <div className='about'>
                    <div className='about-container bg-grid'>
                        <div className='about-header'>
                            <img src="https://imgur.com/1dix7iw.jpg" />
                        </div>
                        <div className='about-data'>
                            <h1>Quelques Informations Supplémentaires Sur CodeFr :</h1>
                            <br></br>
                            <p>
                                Hey bienvenue, Je me présente je suis CodeFr le serveur présenté
                                sur ce site internet, J'espère que tu vas bien pour moi et mon
                                équipe ça va nickel. Donc si tu es là c'est que tu es curieux et
                                que tu souhaites avoir plus d'information sur le serveur, dans
                                ce cas je vais t'en donner pas mal.
                            <br></br><br></br>
                                Donc CodeFr est un serveur d'entraide au développement basé sur
                                une communauté 100% Française, nous avons créés le serveur le 26
                                Juin 2020 par xiaotox. Mais le projet n'était pas à son comble
                                puis le propriétaire décida de le relancer en pendant l'année
                                2022 pour aider le plus de personnes possibles. A présent le
                                serveur a eu une remise en beauté pendant le mois d'aout 2022
                                pour toute sont équipe de staff qui sera mentionnée dans un
                                autre onglet dédié à ça.
                            <br></br><br></br>
                                CodeFr existe pour vous aider ainsi que vous puisez apprendre
                                des choses en communiquant avec d'autre personne (développeur)
                                ainsi que poser des questions quand ça ne va pas ainsi que
                                partager de bons moments au sein du serveur. Et si tu souhaites
                                pourvoir aider le plus de personnes le rôle assistant est donc
                                fait pour toi donc n'hésite pas à rejoindre et faire une
                                commande avec le bot pour te l'attribuer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;