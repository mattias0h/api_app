import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Comment from '../components/Comment';

class AllComments extends Component {

  componentDidMount() {
    this.props.onGetComments(this.props.match.params.postId);
  }

  render() {
    const { comments, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <h1>Comments</h1>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              _.map(comments, (comment, id) => {
                return <Comment key={ comment.id } {...comment} />
              }) }
          </Col>
        </Row>
      </Grid>
    );
  }

}

const mapStateToProps = (state) => {
  return state.comments
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetComments: (postId) => { dispatch(ActionCreators.fetchComments(postId)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllComments);
