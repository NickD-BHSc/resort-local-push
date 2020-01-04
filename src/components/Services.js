import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Great drinks for everyone to enjoy!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Walk until you drop!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"24/7 Shuttle Service",
                info: "Ride until you stop!"
            },
            {
                icon:<FaBeer/>,
                title:"Beer for Days",
                info: "Drink until you're sick!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
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
