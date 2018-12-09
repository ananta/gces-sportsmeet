import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Link to="/">
            <img src={require('../resources/sportsmeet_logo.png')} alt="GCES SportsMeet" style={{height: '80px'}} />
          </Link>
          <Link to='/about'>About</Link>
          |
          <Link to='/tiesheet'> Tiesheet</Link>
          |
          <Link to='/timetable'> TimeTable</Link>
          |
          <Link to='/downloads'> Downloads</Link>
          
          <a href="http://gces.edu.np">
            <img src={require('../resources/gces_logo.png')} alt="SportsMeet" style={{height: '80px'}} />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
