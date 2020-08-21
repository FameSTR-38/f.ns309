import React, { Component } from 'react';
import {GiCarWheel,GiHomeGarage,GiRadiations,GiRss} from 'react-icons/gi';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<GiCarWheel/>,
                title:"free tire",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                icon:<GiHomeGarage/>,
                title:"test drive",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                icon:<GiRadiations/>,
                title:"more gadgets",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                icon:<GiRss/>,
                title:"Hotspot and iot system",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        ]
    };
    render() {
        return (
        <section className="services">
        <Title title='services' />
        <div className="services-center">
            {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                   <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                </article>
            })}
        </div>    
         </section>
         );
    }
}