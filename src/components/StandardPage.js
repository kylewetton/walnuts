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
        <Container>
          <h1>{title}</h1>
          <p>{body}</p>
        </Container>
      )
    }
}

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 2em;
`

export default StandardPage;