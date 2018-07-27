import React, { Component } from 'react';
import SocialShare from 'react-simple-social';

class ShareUs extends Component {
  render() {
    return <div>
        <p style={{ color: "white" }}>
          Click here!
        </p>
      <SocialShare url={`http://localhost:3000/events/${this.props.event.id}`} title="DevPoint and such" sites={["facebook", "twitter", "reddit", "linkedin", "email"]} color="purple" width="20" height="20" theme="roundedsquare" />
      </div>;
  }
}

export default ShareUs;