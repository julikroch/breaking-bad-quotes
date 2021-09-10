import { Phrase } from '../App'
import {PhraseContainer } from '../style'
import PropTypes from 'prop-types'

type QuoteProps = {
    phrase: Phrase
}

const Quote = (props: QuoteProps) => {
    const { phrase } = props

    return (
        <PhraseContainer>
            <h1>{phrase.quote}</h1>
            <p>{phrase.author}</p>
        </PhraseContainer>
    )
}

Quote.propTypes = {
    phrase: PropTypes.object.isRequired
}

export default Quote
