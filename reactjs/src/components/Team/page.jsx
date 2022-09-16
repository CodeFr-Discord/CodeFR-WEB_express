import './page-style.css';

const Team = () => {
    return(
        <div className=''>
            <section className='section' id='team'>
                <div className='team'>
                    <div className='team-container'>
                        <div className='team-grid'>
                            <div className='team_profile-container'>
                                <div className='team_profile-header'>
                                    <img src="https://cdn.discordapp.com/attachments/1013588387560689705/1015576602169593988/6b13d3d588b38782940c3c81c7a3afe6.gif" alt="" />
                                </div>
                                <p className='info team_pseudo'>Xiaotox</p>
                                <p className='info rank'>
                                    <i className='fa-solid fa-keyboard'></i> Créateur
                                </p>
                                <p className='info location'>
                                    <i class="fa-solid fa-location-dot"></i> Paris, France
                                </p>
                                <div className='team-posts'>
                                    <p><span>11</span> Repo</p>
                                    <p><span>58</span> Commits</p>
                                    <p><span>4</span> Follows</p>
                                </div>
                                <div className='team-social'>
                                    <button class="team__youtube" onclick="window.location.href='https://www.youtube.com/channel/UCVK1QxuUTVgv_tDlFA8ZOmw'">
                                        <i class="fa-brands fa-youtube"></i>
                                    </button>
                                    <button class="team__github" onclick="window.loaction.href='https://github.com/Xiaotoxdev'">
                                        <i class="fa-brands fa-github"></i>
                                    </button>
                                    <button class="team__instagram" onclick="window.laction.href='https://www.instagram.com/xiaotoxdev/'">
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='team_profile-container'>
                                <div className='team_profile-header'>
                                    <img src="https://cdn.discordapp.com/avatars/853261887520505866/028f62172ad6f1cb37192e6036309719.webp?size=4096" alt="" />
                                </div>
                                <p className='info team_pseudo'>BouBouw</p>
                                <p className='info rank'>
                                    <i className='fa-solid fa-keyboard'></i> Créateur
                                </p>
                                <p className='info location'>
                                    <i class="fa-solid fa-location-dot"></i> Bordeaux, France
                                </p>
                                <div className='team-posts'>
                                    <p><span>11</span> Repo</p>
                                    <p><span>58</span> Commits</p>
                                    <p><span>4</span> Follows</p>
                                </div>
                                <div className='team-social'>
                                    <button class="team__youtube" onclick="window.location.href='https://www.youtube.com/channel/UCVK1QxuUTVgv_tDlFA8ZOmw'">
                                        <i class="fa-brands fa-youtube"></i>
                                    </button>
                                    <button class="team__github" onclick="window.loaction.href='https://github.com/Xiaotoxdev'">
                                        <i class="fa-brands fa-github"></i>
                                    </button>
                                    <button class="team__instagram" onclick="window.laction.href='https://www.instagram.com/xiaotoxdev/'">
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;