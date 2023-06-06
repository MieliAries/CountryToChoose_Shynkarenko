import React from 'react';
import canadaflag from '../images/canadaflag.png'
import swedenflag from '../images/swedenflag.png'
import denmarkflag from '../images/denmarkflag.jpg'
import worldmap from '../images/worldmap.png'

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${worldmap})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center'
            }}
        >
            <h1 style ={{width: '100%', textAlign: 'center'}}>It is a home page</h1>
            <h1 style ={{width: '100%', textAlign: 'center'}}>Here you can see the top 3 countries people usually want to live in:</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
            }}>
                <div style ={{width: '33%', textAlign: 'center'}}>
                    <h1>Sweden</h1>
                    <img src={swedenflag} alt="swedenflag" style ={{height: '30%'}}/>
                </div>
                <div style ={{width: '33%', textAlign: 'center'}}>
                    <h1>Denmark</h1>
                    <img src={denmarkflag} alt="denmarkflag" style ={{height: '30%'}}/>
                </div>
                <div style ={{width: '33%', textAlign: 'center'}}>
                    <h1>Canada</h1>
                    <img src={canadaflag} alt="canadaflag" style ={{height: '30%'}}/>
                </div>
            </div>
            <div >

            </div>
            <div >

            </div>
        </div>
    );
};

export default Home;