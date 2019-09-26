import React, { Component } from 'react'
import AOS from 'aos';
import { Card, Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

AOS.init();

export class App extends Component {
  renderCards() {
    const cardDetails = [
      "fade",
      "fade-up",
      "fade-down",
      "fade-left",
      "fade-right",
      "fade-up-right",
      "fade-up-left",
      "fade-down-right",
      "fade-down-left",
      "flip-up",
      "flip-down",
      "flip-left",
      "flip-right",
      "slide-up",
      "slide-down",
      "slide-left",
      "slide-right",
      "zoom-in",
      "zoom-in-up",
      "zoom-in-down",
      "zoom-in-left",
      "zoom-in-right",
      "zoom-out",
      "zoom-out-up",
      "zoom-out-down",
      "zoom-out-right",
      "zoom-out-left"
    ]
    const cards = cardDetails.map(item => {
      return <CardItem item={item} />
    })
    return cards;
  }
  render() {
    return (
      <div className="container">
        <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>

          <div data-aos="fade" style={{ display: "block" }}>
            <h1 className="pb-4">Welcome</h1>
            <h3>Scroll down to explore</h3>
          </div>
        </div>
        <Row>
          {this.renderCards()}
        </Row>
      </div>
    )
  }
}

export default App
