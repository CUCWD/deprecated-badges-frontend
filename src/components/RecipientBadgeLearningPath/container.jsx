import { connect } from 'react-redux';

import RecipientBadgeLearningPath from '../../components/RecipientBadgeLearningPath';
import { fetchPosts } from '../../data/actions/posts';

const mapStateToProps = state => (
  {
    posts: state.posts.posts,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPosts: () => dispatch(fetchPosts()),
  }
);

const RecipientBadgeLearningPathPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipientBadgeLearningPath);

export default RecipientBadgeLearningPathPage;






