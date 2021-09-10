import { Phrase } from '../App'

type QuoteProps = {
    phrase: Phrase
}

const Quote = (props: QuoteProps) => {
    const { phrase } = props

    return (
        <div>
            {phrase.author}
        </div>
    )
}

export default Quote
