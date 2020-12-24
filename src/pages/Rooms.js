import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () =>  {
    return ( 
        <>
        <Hero hero="roomsHero">
            <Banner subtitle="">
            <iframe width="1200" height="800" src="https://boxcast.tv/view-embed/mr4wvjtpg4nfirzyncd9?showTitle=0&showDescription=0&showHighlights=0&showRelated=0&defaultVideo=next&market=smb&showDocuments=0&showIndex=0&showDonations=1&showCountdown=1&hidePreBroadcastTextOverlay=0" frameBorder="0" scrolling="auto" allowfullscreen="true" allow="autoplay; fullscreen"></iframe>
            <Link to='/' className="btn-primary">
            Буцах
            </Link>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
        );
};

export default Rooms;