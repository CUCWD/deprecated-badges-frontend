import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import DownloadLink from 'react-download-link';
import * as mime from 'mime-types';


class BadgeDownload extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      response: {},
    };
  }

  componentDidMount() {
    // Load the remote this.props.url to get the response data before rendering.
    axios
      .get(this.props.url, {
        responseType: 'arraybuffer',
      })
      .then((data) => {
        this.setState({ response: data });
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  loadImage() {
    if (this.state.response.status === 200) {
      const buffer = new Buffer(this.state.response.data, 'binary');
      const fileAssertionName = this.state.response.config.url.split('/').slice(-2, -1)[0];
      const mimeExtension = mime.extension(this.state.response.headers['content-type']);

      return (
        <div className="badge-download">
          <DownloadLink
            filename={`${fileAssertionName}.${mimeExtension}`}
            exportFile={() => Promise.resolve(buffer)}
          >
            Download
          </DownloadLink>
        </div>
      );
    }

    return (null);
  }

  render() {
    return (
      this.loadImage()
    );
  }
}

BadgeDownload.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BadgeDownload;
