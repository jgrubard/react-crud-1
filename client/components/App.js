import React, { Component } from 'react';
import { getUsersFromServer } from '../store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    return (
      <div>
        <h2>This is the Main App Page</h2>
      </div>
    );
  }
}

const mapState = ({ users }) => {
  console.log(users);
  return {
    users
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => dispatch(getUsersFromServer())
  }
}

export default connect(mapState, mapDispatch)(App);