import React, { Component } from 'react';
import SocialShare from 'react-simple-social';

class ShareUs extends Component {
  render() {
    return <div>
        <p style={{ color: "white" }}>
          Click here!
        </p>
        <SocialShare url="http://devpointlabs.com/" title="DevPoint Labs" sites={["facebook", "twitter", "reddit", "linkedin", "email"]} color="white" width="20" height="20" theme="roundedsquare" />
      </div>;
  }
}

export default ShareUs;