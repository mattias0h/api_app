import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    const { id, title, body, showLink } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          { title }
          { showLink && <Link to={`/posts/${id}`} className="pull-right">Show</Link> }
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
