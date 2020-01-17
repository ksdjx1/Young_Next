import main from '../static/Main.jpg'
import arrow from '../static/arrow.png'
import Link from 'next/link'

const About = (props) => {
    const { router } = props;
    console.log(router.query.history)

    if (router.query.history == 'tech') {
        return (
            <div id="indexlay">
                <Link href="/art">
                    <div id="arrowbox">
                        <img src={arrow} id="arrow" />
                        <a>Art</a>
                    </div>
                </Link>
                <div>
                    <div id="box">
                        <img src={main} id="me"/>
                    </div>
                    <p>강영진 (姜英真)<br></br>Kang Yeong Jin<br></br>カンヨンジン</p>
                    <p>Sogang Univ. Art&Technology</p>
                    <p>Musician<br></br>Writer<br></br>Programmer</p>
                    <p>Sound Engineering<br></br>Japanese translation/interpreting<br></br>C, Java, JavaScript</p>
                </div>
                <Link href="/tech">
                    <div id="arrowbox">
                        <a>Tech</a>
                        <img src={arrow} id="arrow2" />
                    </div>
                </Link>
                <style jsx>{`
                    #indexlay {
                        height: 100%;
                        width: 10%;
                        text-align: center;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        animation: index 1s ease-in-out forwards;         
                    }
                    #box {
                        margin: auto;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        overflow: hidden;
                        box-shadow: 0 3px 6px rgba(0,0,0,0.34), 0 3px 6px rgba(0,0,0,0.57);
                    }
                    #arrowbox {
                        width: 10%;
                    }
                    #arrow {
                        width: 50%;
                        transform: rotate(180deg);
                    }
                    #arrow2 {
                        width: 50%;
                    }
                    #arrowbox:hover {
                        opacity: 0.6;
                    }
                    #me {
                        height: 100%;
                        object-fit: cover;
                    }
                    @keyframes index {
                        0% {
                            opacity: 0;
                            width: 40%;
                        }
                        40% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                            width: 100%;
                        }
                    }
                `}</style>
            </div>
        )
    }

    else if (router.query.history == 'art') {
        return (
            <div id="indexlay">
                <Link href="/art">
                    <div id="arrowbox">
                        <img src={arrow} id="arrow" />
                        <a>Art</a>
                    </div>
                </Link>
                <div>
                    <div id="box">
                        <img src={main} id="me"/>
                    </div>
                    <p>강영진 (姜英真)<br></br>Kang Yeong Jin<br></br>カンヨンジン</p>
                    <p>Sogang Univ. Art&Technology</p>
                    <p>Musician<br></br>Writer<br></br>Programmer</p>
                    <p>Sound Engineering<br></br>Japanese translation/interpreting<br></br>C, Java, JavaScript</p>
                </div>
                <Link href="/tech">
                    <div id="arrowbox">
                        <a>Tech</a>
                        <img src={arrow} id="arrow2" />
                    </div>
                </Link>
                <style jsx>{`
                    #indexlay {
                        height: 100%;
                        width: 170%;
                        text-align: center;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        animation: index 1s ease-in-out forwards;         
                    }
                    #box {
                        margin: auto;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        overflow: hidden;
                        box-shadow: 0 3px 6px rgba(0,0,0,0.34), 0 3px 6px rgba(0,0,0,0.57);
                    }
                    #arrowbox {
                        width: 10%;
                    }
                    #arrow {
                        width: 50%;
                        transform: rotate(180deg);
                    }
                    #arrow2 {
                        width: 50%;
                    }
                    #arrowbox:hover {
                        opacity: 0.6;
                    }
                    #me {
                        height: 100%;
                        object-fit: cover;
                    }
                    @keyframes index {
                        0% {
                            opacity: 0;
                            width: 170%;
                            height: 100%;
                        }
                        40% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                            width: 100%;
                            height: 100%;
                        }
                    }
                `}</style>
            </div>
        )
    }

    else return (
        <div id="indexlay">
            <Link href="/art">
                <div id="arrowbox">
                    <img src={arrow} id="arrow" />
                    <a>Art</a>
                </div>
            </Link>
            <div>
                <div id="box">
                    <img src={main} id="me"/>
                </div>
                <p>강영진 (姜英真)<br></br>Kang Yeong Jin<br></br>カンヨンジン</p>
                <p>Sogang Univ. Art&Technology</p>
                <p>Musician<br></br>Writer<br></br>Programmer</p>
                <p>Sound Engineering<br></br>Japanese translation/interpreting<br></br>C, Java, JavaScript</p>
            </div>
            <Link href="/tech">
                <div id="arrowbox">
                    <a>Tech</a>
                    <img src={arrow} id="arrow2" />
                </div>
            </Link>
            <style jsx>{`
                #indexlay {
                    height: 200%;
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    animation: index 1s ease-in-out forwards;         
                }
                #box {
                    margin: auto;
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.34), 0 3px 6px rgba(0,0,0,0.57);
                    animation: about 1s ease-in-out 1s both;
                }
                #arrowbox {
                    width: 10%;
                    animation: about 1s ease-in-out;
                }
                #arrow {
                    width: 50%;
                    transform: rotate(180deg);
                }
                #arrow2 {
                    width: 50%;
                }
                #arrowbox:hover {
                    opacity: 0.6;
                }
                #me {
                    height: 100%;
                    object-fit: cover;
                }
                @keyframes index {
                    from {
                        height: 200%;
                    }
                    to {
                        height: 100%;
                    }
                }
                @keyframes about {
                    0% {
                        opacity: 0;
                    }
                    30% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                p {
                    animation: about 1.7s ease-in-out;
                }
            `}</style>
        </div>
    )
}

export default About