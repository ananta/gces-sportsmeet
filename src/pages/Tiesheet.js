import React from 'react';

import TiesheetItems from '../data/Tiesheet';

class Tiesheet extends React.Component {
  render() {
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
