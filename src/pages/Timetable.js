import React from 'react';
import TimetableItems from '../data/TimeTable';

class Timetable extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <div id="about">
          <div className="container">
            <h1>Time table</h1>
            {
              TimetableItems.map(Item => (
                <div>
                <h2>{Item.day}</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">TIME</th>
                      <th scope="col">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Item.timetable.map(_item => (
                        <tr>
                          <th scope="row">{_item.time}</th>
                          <td>{_item.description}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                </div>
            ))
            }
          </div>
        </div>
      </section>

    )
  }
}

export default Timetable;