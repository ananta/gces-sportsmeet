import React from "react";
import { TimetableURL } from "./";

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timetable: [],
      isBusy: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataURL = TimetableURL;
    this.setState({ isBusy: true });
    try {
      const timetable = await fetch(dataURL);
      const _timetable = await timetable.json();
      this.setState({ timetable: _timetable });
    } catch (exp) {
      this.setState({ error: exp.message });
    }
    this.setState({ isBusy: false });
  }

  render() {
    const { isBusy, error, timetable } = this.state;
    if (!timetable && error) return <h1>DATA UNAVAILABLE</h1>;
    return (
      <section className="wrapper">
        <div id="about">
          <div className="container">
            <h1>Time table</h1>
            {timetable.map(Item => (
              <div>
                <h2>{Item.day}</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">TIME</th>
                      <th scope="col">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Item.timetable.map(_item => (
                      <tr>
                        <th scope="row">{_item.time}</th>
                        <td>{_item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
      </section>
    );
  }
}

export default Timetable;
