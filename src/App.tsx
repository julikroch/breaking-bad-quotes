import styled from '@emotion/styled';
import { useState } from 'react';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 7rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [phrase, setPhrase] = useState({})

  const apiCall = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await api.json()
    setPhrase(quote[0])
  }

  return (
    <Container>
      <Quote />

      <Button
        onClick={apiCall}
      >
        Get phrase
      </Button>

    </Container>
  );
}

export default App;
