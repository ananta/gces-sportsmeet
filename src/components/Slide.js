import React from 'react';

class Slide extends React.Component {

  render() {
    const { event, active } = this.props;
    return (
      <div className={'carousel-item' + (active ? ' active' : '')}>
        <div style={{ textAlign: 'center', padding: '8px' }}>
          <img alt={event.name} style={{ margin: '16px', height: 120, width: 120 }} src={event.image} />
        </div>
        <div className="card-body text-center" style={{ background: '#0003', color: '#fff', padding: '16px' }}>
         <h1 className="card-title" style={{ fontSize: '24px', fontWeight: 900 }}>{ event.name }</h1>
         <div style={{ paddingBottom: '24px' }}>
          <p>{ event.description }</p>
          {
            event.action && <div style={{ marginTop: '16px' }} dangerouslySetInnerHTML={{ __html: event.action }} />
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
