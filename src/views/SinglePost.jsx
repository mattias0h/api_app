import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import AllComments from './AllComments';

class SinglePost extends Component {

  componentDidMount() {
    this.props.onGetPost(this.props.match.params.id);
  }
  

  render() {
    const { post, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <h1>Post</h1>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              <Post key={ post.id } {...post} />
              }
              <Link to={`/posts/${post.id}/comments`} className="pull-right">Comments</Link>
          </Col>
        </Row>
      </Grid>
    );
  }

}

const mapStateToProps = (state) => {
  return state.posts
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPost: (id) => { dispatch(ActionCreators.fetchPost(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
