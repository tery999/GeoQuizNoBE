import { useEffect, useRef, useState } from 'react'
import * as styles from "./AmericaCapitals.module.css"
import { useCustomCapitals } from '../../../Services/useCustomCapitals';
import { getAmericaData, getAmericaDataPlus } from '../../../Services/Services';


export default function AmericaCapitalsPlus () {
    //using custom hook, doesnt look pretty, need to make it better
    const [ countryArrShuffled, choices, setChoices, currentCapital, setCurrentCapital, loaded, correctAsnwers, totalAnswers, currentTurn] = useCustomCapitals(getAmericaDataPlus);
  

    const fourChoices = [];
    fourChoices.push(currentCapital);
    const choicesWithoutCurrent = choices.filter((flagObj) => {
      return flagObj?.name !== currentCapital?.name;
    })
    const choicesWithoutCurrentShuffled = choicesWithoutCurrent.sort(() => Math.random() - 0.5);
    const threeLeft = choicesWithoutCurrentShuffled.slice(0, 3);
    fourChoices.push(...threeLeft);
    const fourChoicesShuffled = fourChoices.sort(() => Math.random() - 0.5);
  
    const choiceClickFunction = (name) => {
      if (name === currentCapital.name) {
        correctAsnwers.current++;
      }
      debugger;
      const newCurCap = countryArrShuffled.splice(0, 1)[0];
      currentTurn.current++;
      setCurrentCapital(newCurCap);
    }
  
    const ResetFunction = () => {
      window.location.reload();
    }
    debugger;
    const currentCapitalName = currentCapital?.name;
    return (
      <div className={styles.container}>
        {currentTurn.current <= totalAnswers.current &&
          <div> {currentTurn.current}/{totalAnswers.current}</div>
        }
        {loaded && currentCapitalName &&
          <>
           <div className={styles.capitalNameDiv}>
            {currentCapital.Capital}
           </div>
            <div className={styles.Options}>
              {fourChoicesShuffled.map((oneOption => {
                return <button key={oneOption._id[0]} onClick={() => choiceClickFunction(oneOption.name)}> {oneOption.name}</button>
              }))}
  
            </div>
          </>
        }
        {!currentCapitalName && correctAsnwers.current !== totalAnswers.current &&
          <div className={styles.FinalScore}>Your score is {correctAsnwers.current} out of {totalAnswers.current}</div>
        }
        {!currentCapitalName && correctAsnwers.current === totalAnswers.current &&
          <div className={styles.FinalScore}>Perfect score</div>
        }
  
        {!currentCapitalName &&
          <button className={styles.tryAgain} onClick={ResetFunction}> Try again </button>
        }
      </div>
    )
  }
 