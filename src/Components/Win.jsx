import '../Style/win.css'
import PropTypes from "prop-types";

export const Win = ({ sendWinClick, onWinClick, finish, sendCountCorrect, setSendCountCorrect }) => {

   const handleWinClick = () => {
    const currentStart = [...onWinClick]
    currentStart[0] = false
    sendWinClick(currentStart)
    setSendCountCorrect(0)
    finish(false)
   }

    return (<>
    <section className="win-quiz">
        <h2 className="h2-quiz-title">Country quiz</h2>
        <div className="win-quiz-div">
            <img className='win-quiz-img' src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/country-quiz-win.png?raw=true" alt="img-win-quiz"/>
            <div className='info-quiz-win'>
                <h1 className='h1-quiz-win'>Results</h1>
                <p className='p-quiz-win'>You go <strong className='strong-quiz-win'>{sendCountCorrect}</strong> correct answer</p>
            </div>
            <button onClick={handleWinClick}  className='button-try-again'>Try again</button>
        </div>
    </section>
    </>)
}

Win.propTypes = {
    sendWinClick: PropTypes.func.isRequired,
    onWinClick: PropTypes.array.isRequired,
    finish: PropTypes.func.isRequired,
    sendCountCorrect: PropTypes.number.isRequired,
    setSendCountCorrect: PropTypes.func.isRequired
}
