import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import query from './authentication.graphql';
import history from '../../core/history';

class AuthenticationRequired extends React.Component {

  static propTypes = {
    location: PropTypes.string,
    data: PropTypes.shape({
      me: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  static defaultProps = {
    location: undefined,
  }

  render() {
    const { data: { me } } = this.props;
    if (!me) {
      if (history) {
        history.push(this.props.location ? `/signin?next=${this.props.location}` : '/signin');
      }
    }
    return <div />;
  }
}

export default graphql(query)(AuthenticationRequired);
