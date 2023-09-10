import '../Style/start.css'
import PropTypes from "prop-types";

export const Start = ({ onNextClick }) => {

    
  const handleNextClick1 = () => {
    onNextClick([true,true])
  };
  const handleNextClick2 = () => {
    onNextClick([true,false])
  };

    return(<>
    <section className='start'>
        <h1 className='title-start'>Welcome to country quiz</h1>
        <div className='start-div'>
            <div className='start-img-div'>
                <img className='img-start' src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/quiz-draw.png?raw=true" alt="quiz-draw.png" />
            </div>
            <div className='start-button-div'>
                <button onClick={handleNextClick1} className='button-start'>Start</button>
                <button onClick={handleNextClick2} className='button-creatte'>Create</button>
            </div>
        </div>
    </section>
    </>)
}

Start.propTypes = {
  onNextClick: PropTypes.func.isRequired
}
