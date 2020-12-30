import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "Complimentary Welcome Drink on Arrival is provided. Drinks are served with Soft Drinks options"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "The resort is hub to many hiking paths with access to nearby alpine lakes"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: "For your convenience Free Shuttle Services offered by the resort"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "We provide the world's best Strongest Beer for Beer Lovers"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
