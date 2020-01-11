import React from "react";

import "./index.css";
import Slide from "../components/Slide";
import { EventsURL } from "./";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isBusy: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataURL = EventsURL;
    this.setState({ isBusy: true });
    try {
      const events = await fetch(dataURL);
      const _events = await events.json();
      this.setState({ events: _events });
    } catch (exp) {
      this.setState({ error: exp.message });
    }
    this.setState({ isBusy: false });
  }

  render() {
    const { isBusy, error, events } = this.state;
    if (!events && error) return <h1>Data Unavailable</h1>;
    return (
      <section className="wrapper">
        <div className="container main-background">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ padding: "32px 0" }}>
                <div className="title">
                  <small className="title--event">
                    7<sup>th</sup>
                  </small>
                  <h1 className="title--gces">GCES</h1>
                  <h2 className="title--expo">SPORTS MEET</h2>
                  <p className="title--year">2020</p>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      "Sports is the greatest physical poetry"
                    </p>
                  </blockquote>
                </div>
                <hr />
                <div style={{ color: "#fff" }}>
                  <p>
                    <span style={{ width: "50px", display: "inline-block" }}>
                      Date
                    </span>
                    : &nbsp; 12<sup>th</sup> TO 16<sup>th</sup> January
                  </p>
                  <p>
                    <span style={{ width: "50px", display: "inline-block" }}>
                      Time
                    </span>
                    : &nbsp; 7 AM to 5 PM
                  </p>
                  <p>
                    <span style={{ width: "50px", display: "inline-block" }}>
                      Venue
                    </span>
                    : &nbsp; GCES
                  </p>
                </div>

                <hr />
                <div>
                  <span style={{ color: "#f8f8f8", margin: "8px 0" }}>
                    Have any queries or questions?
                  </span>{" "}
                  &nbsp;
                  <a
                    className="btn btn-sm btn-action"
                    href="mailto:mailarjunadhikari@gmail.com?subject=About+GCES+SPORTSMEET"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              {isBusy && (
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fa fa-circle-o-notch fa-spin"
                    style={{ fontSize: "40px" }}
                  ></i>
                </div>
              )}
              <div id="events" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner slider">
                  <ol className="carousel-indicators">
                    {events.map((event, index) => (
                      <li
                        key={index}
                        data-target="#events"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}
                      ></li>
                    ))}
                  </ol>
                  {events.map((event, index) => (
                    <Slide
                      key={"event+" + index}
                      active={index === 0}
                      event={event}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
