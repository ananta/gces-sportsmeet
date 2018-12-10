import React from "react";
import { TiesheetURL } from ".";

class Tiesheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationId: props.match.params.organizationId,
      tiesheets: [],
      isBusy: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataURL = TiesheetURL;
    this.setState({ isBusy: true });
    try {
      const tiesheets = await fetch(dataURL);
      const _tiesheet = await tiesheets.json();
      this.setState({ tiesheets: _tiesheet });
    } catch (exp) {
      this.setState({ error: exp.message });
    }
    this.setState({ isBusy: false });
  }

  render() {
    const { tiesheets, error, isBusy } = this.state;
    if (!tiesheets && error) return <h1>DATA UNAVAILABLE</h1>;
    return (
      <section className="wrapper">
        <div id="about">
          <div className="container">
            <h1>TIE SHEETS</h1>
            {tiesheets.map(Item => (
              <div>
                <h1>{Item.day}</h1>
                <div className="row">
                  {Item.tiesheets.map(item => (
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
                              Get Tiesheet
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
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Tiesheet;
