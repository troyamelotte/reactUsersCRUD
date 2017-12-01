import React, { Component } from 'react';

class HeaderForm extends Component{
    constructor(props){
      super(props);
      this.state = {};
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(value);
      this.setState({
        [name]: value
      });
    }
    render(){
      return (
        <div className="">
          <form>
            <input type="text" placeholder="first name" name="first_name" onChange={this.handleInputChange.bind(this)}/>
            <input type="text" placeholder="last name" name="last_name" onChange={this.handleInputChange.bind(this)}/>
            <input type="text" placeholder="email" name="email" onChange={this.handleInputChange.bind(this)}/>
            <input type="text" placeholder="age" name="age" onChange={this.handleInputChange.bind(this)}/>
            <button onClick={(e)=>{
              e.preventDefault();
              this.props.addUser(this.state)
            }}> Submit </button>
          </form>
        </div>
      );
    }
}

export default HeaderForm;
