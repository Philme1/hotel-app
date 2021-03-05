import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaMusic, FaTaxi, } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  constructor(props) {
      super(props)
      this.state = {
        services: [
          {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaMusic />,
            title: "Night Club",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaTaxi />,
            title: "Book taxi",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          }
        ]
      };
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}