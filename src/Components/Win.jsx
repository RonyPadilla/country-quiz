// import { useState } from 'react';
import '../Style/win.css'

export const Win = ({ onChildClick }) => {
    

   console.log(onChildClick)

    return (<>
    <section className="win-quiz">
        <h2 className="h2-quiz-title">Country quiz</h2>
        <div className="win-quiz-div">
            <img className='win-quiz-img' src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/country-quiz-win.png?raw=true" alt="img-win-quiz"/>
            <div className='info-quiz-win'>
                <h1 className='h1-quiz-win'>Results</h1>
                <p className='p-quiz-win'>You go <strong className='strong-quiz-win'>{4}</strong> correct answer</p>
            </div>
            <button onClick={onChildClick}  className='button-try-again'>Try again</button>
        </div>
    </section>
    </>)
}
