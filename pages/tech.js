import arrow from '../static/arrow.png'
import Link from 'next/link'
import Box from '../components/box'
import Tool from '../components/tool'
import Game from '../components/game'
import Router from 'next/router'

export default (props) => {
    return (
        <div id="Alayout">
            <div id="arrowbox" onClick={() => Router.push('/about?history=tech', '/about')}>
                <img src={arrow} id="arrow" />
                <a>About</a>
            </div>
            <Box>
                <h3 id="Game">Game</h3>
                <Game />
            </Box>
            <Box>
                <h3 id="Tool">Tool</h3>
                <Tool />
            </Box>            
            <style jsx>{`
                #Alayout {
                    height: 100%;
                    width: 170%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    animation: tech 1s forwards;
                }
                #arrowbox {
                    width: 10%;
                }
                #arrow {
                    width: 50%;
                    transform: rotate(180deg);
                }
                #arrowbox:hover {
                    opacity: 0.6;
                }
                @keyframes tech {
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
    );
}