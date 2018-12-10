import React from 'react';

// import TiesheetItems from '../data/Tiesheet';

class Tiesheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationId: props.match.params.organizationId,
      update: null,
      tiesheets: [],
      isBusy: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataURL = "https://github.com/anantabastola/gces-sportsmeet/blob/master/src/data/Tiesheet.json";
    this.setState({ isBusy: true });
    try {
      const tiesheets = await fetch(dataURL, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }});
      const _tiesheet = await tiesheets.json()
      this.setState({ tiesheets: JSON.stringify( _tiesheet.data()) });
    } catch (exp) {
      this.setState({ error: exp.message })
    }
    this.setState({ isBusy: false });
  }
  render() {
    console.log(this.state);
    const TiesheetItems = this.state.tiesheets;
    const error = this.state.error;

    if(!TiesheetItems && error)
    return (
      <h1>DATA UNAVAILABLE</h1>
    )
    return (
      <section className="wrapper">
        <div id="about">
          <div className="container">
            <h1>TIE SHEETS</h1>
            {
              TiesheetItems.map(Item => (
                <div>
                  <h1>{Item.day}</h1>
                  <div className="row">
                    {
                      Item.tiesheets.map(item => (
                        <div className="col-md-6">
                          <div className="download">
                            <div className="card">
                              <div className="card-body">
                                <h3>{item.title}</h3>
                                {
                                  item.description && <p>{item.description}</p>
                                }
                                <a target="_blank" className="btn btn-action"
                                  href={item.link}>Get Tiesheet</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
            </div>
        </div>
      </section>
    );
  }
}

export default Tiesheet;
