import React from 'react';
import styled from 'styled-components';

class StandardPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: {}
      }
    }
  
  componentDidMount() {
    let data = {
      title: "About",
      body: "This is a test"
    }
    this.setState({data});
  }
    render() {
      let {title, body} = this.state.data;
      return (
        <div className="container">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      )
    }
}

export default StandardPage;