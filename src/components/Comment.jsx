import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Comment extends Component {

  render() {
    const { name, email, body } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          <strong>{ name }</strong>
          <br />
          { email }
        </Panel.Heading>
        <Panel.Body>
          { body }
        </Panel.Body>
      </Panel>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
