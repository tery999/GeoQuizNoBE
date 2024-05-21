import { useEffect, useRef, useState } from 'react'
import * as styles from "./AsiaCapitals.module.css"
import { useCustomCapitals } from '../../../Services/useCustomCapitals';
import { getAsiaData, getAsiaDataPlus } from '../../../Services/Services';


export default function AsiaCapitalsPlus () {
  const {changeScoreFunc} = useContext(ScoreContext)
  const [reload, setReload] = useState(false);
    const [ countryArrShuffled, choices, setChoices, currentCapital, setCurrentCapital, loaded, correctAsnwers, totalAnswers, currentTurn] = useCustomCapitals(getAsiaDataPlus, reload);
  

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
      if (loaded && currentTurn.current > totalAnswers.current ) {
        debugger;
        changeScoreFunc({AsiaCapitalsPlus: correctAsnwers.current});
      }
    }
  
    const ResetFunction = () => {
      setReload( (prev)=> !prev);
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
 