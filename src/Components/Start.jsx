import '../Style/start.css'

export const Start = () => {
    return(<>
    <section className='start'>
        <h1 className='title-start'>Welcome to country quiz</h1>
        <div className='start-div'>
            <div className='start-img-div'>
                <img className='img-start' src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/quiz-draw.png?raw=true" alt="quiz-draw.png" />
            </div>
            <div className='start-button-div'>
                <button className='button-start'>Start</button>
                <button className='button-creatte'>Create</button>
            </div>
        </div>
    </section>
    </>)
}
