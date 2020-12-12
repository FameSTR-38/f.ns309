import React, { Component } from 'react';
import {GiCarWheel,GiHomeGarage,GiRadiations,GiRss} from 'react-icons/gi';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<GiCarWheel/>,
                title:"Бидний зорилго",
                info:'Монгол дахь автоспорт болон тамирчдыг алдаршуулах'
            },
            {
                icon:<GiHomeGarage/>,
                title:"LiveStream",
                info:'Та гэрээсээ тэмцээн бүрийг алгасалгүй үзэж чадна.'
            },
            {
                icon:<GiRadiations/>,
                title:"Цаашид бид хөгжсөөр байх болно.",
                info:'Одоогоор бидэнд дөнгөж эхлэлийн үе шат учир цаашид алдаа дутагдал гарах тусам залруулж, илүү хөгжүүлэх болно'
            },
            {
                icon:<GiRss/>,
                title:"Хаанаас ч хандаж болно.",
                info:'Та хөдөө орон нутагт, эсвэл гадаад улс оронд байсан ч бид контент бүрийг таньд гацалтгүй дамжуулах болно.'
            }
        ]
    };
    render() {
        return (
        <section className="services">
        <Title title='Бидний давуу тал' />
        <div className="services-center">
            {this.state.services.map((item,index) => {
                return <article key={index} className="Бидний давуу тал">
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