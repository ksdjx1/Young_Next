import arrow from '../static/arrow.png'
import Link from 'next/link'
import Player from '../components/player'
import Box from '../components/box'
import Writing from '../components/writing'
import Router from 'next/router'

export default (props) => {
    return (
        <div id="Alayout">
            <Box>
                <h3>Music</h3>
                <Player />
            </Box> 
            <Box>
                <h3 id="Tool">Writing</h3>
                <Writing/>
            </Box>  
            <div id="arrowbox" onClick={() => Router.push('/about?history=art', '/about')}>
                <a>About</a>
                <img src={arrow} id="arrow" />
            </div>
            <style jsx>{`
                #Alayout {
                    height: 100%;
                    width: 10%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    animation: art 1s forwards;
                }
                #arrowbox {
                    width: 10%;
                }
                #arrow {
                    width: 50%;
                }
                #arrowbox:hover {
                    opacity: 0.6;
                }
                @keyframes art {
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
    );
}