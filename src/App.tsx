import { useState } from 'react';
import Quote from './components/Quote';
import { Container, Button } from './style';

export type Phrase = {
  author: string,
  quote: string
}

function App() {

  const [phrase, setPhrase] = useState<Phrase>({
    author: '',
    quote: ''
  })

  const apiCall = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await api.json()
    setPhrase(quote[0])
  }

  return (
    <Container>
      <Quote phrase={phrase} />

      <Button
        onClick={apiCall}
      >
        Get phrase
      </Button>

    </Container>
  );
}

export default App;
