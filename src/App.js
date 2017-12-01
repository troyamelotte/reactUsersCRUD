import React, { Component } from 'react';
import UserList from './UserList';
import HeaderForm from './HeaderForm';
class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }
  getAll(){
    fetch("http://localhost:8000/users")
      .then(data => data.json())
      .then(response => {
        this.setState({
          users: response
        });
      })
  }
  componentDidMount(){
    this.getAll();

  }
  addUser(user){
    console.log(user);

    fetch("http://localhost:8000/users", {
      method:"post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(data =>{
      console.log("done!");
      this.getAll();
    })
  }

  deleteUser(id){
    fetch("http://localhost:8000/delete/"+id)
      .then(data=>{
        this.getAll();
      })
  }
  render() {
    return (
      <div className="App">
        <HeaderForm addUser={this.addUser.bind(this)} />
        <UserList users={this.state.users} deleteUser={this.deleteUser.bind(this)} />
      </div>
    );
  }
}

export default App;
