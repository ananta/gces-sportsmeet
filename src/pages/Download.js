import React from "react";

import DownloadItems from "../data/Download";
import { DownloadURL } from "./";
class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloads: [],
      isBusy: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataURL = DownloadURL;
    this.setState({ isBusy: true });
    try {
      const downloads = await fetch(dataURL);
      const _downloads = await downloads.json();
      this.setState({ downloads: _downloads });
    } catch (exp) {
      this.setState({ error: exp.message });
    }
    this.setState({ isBusy: false });
  }
  render() {
    const { isBusy, error, downloads } = this.state;

    if (!downloads && error) return <h1>DATA UNAVAILABLE</h1>;
    return (
      <section className="wrapper">
        <div id="about">
          <div className="container">
            <h1>Download</h1>
            <div className="row">
              {downloads.map(item => (
                <div className="col-md-6">
                  <div className="download">
                    <div className="card">
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        {item.description && <p>{item.description}</p>}
                        <a
                          target="_blank"
                          className="btn btn-action"
                          href={item.link}
                        >
                          View Tiesheet
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isBusy && (
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fa fa-circle-o-notch fa-spin"
                    style={{ fontSize: "40px" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
