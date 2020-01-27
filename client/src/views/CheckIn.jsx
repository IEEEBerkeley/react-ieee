import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IFrameComponent extends Component {
    iframe() {
        return {__html: this.props.iframe};
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={ this.iframe() } />
        );
    }
}

const iframe_airtable = '<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrUx5RnoM7qhuzXL?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="1229" style="background: transparent; border: 1px solid #ccc;"></iframe>'

class Calendar extends Component {

  render() {
      return (
        <div className="main">
          <div className="submenu">
            <ul>
            <Link to={"/events"}><li className="">Calendar</li></Link>
            <Link to={"/checkin"}><li className="">Check-in</li></Link>
            </ul>
          </div>
          <div class="content">
              <div class="containerCalendar">
                <IFrameComponent iframe={iframe_airtable} />
              </div>
          </div>
        </div>
    );
  }
}

export default Calendar;
