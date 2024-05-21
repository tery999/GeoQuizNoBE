import { useContext, useEffect, useRef, useState } from 'react'
import * as styles from "./AsiaOutlines.module.css"
import {useCustomOutlines} from "../../../Services/useCustomOutlines"
import { getAsiaData } from '../../../Services/Services';
import { getAsiaDataPlus } from '../../../Services/Services';
import { ScoreContext } from '../../../App';


export default function AsiaOutlinesPlus () {
  const {changeScoreFunc} = useContext(ScoreContext)
  const [reload, setReload] = useState(false);
    const [ countryArrShuffled ,choices, 
        setChoices, currentOutline, setCurrentOutline, 
        loaded, correctAsnwers, totalAnswers, currentTurn] = useCustomOutlines(getAsiaDataPlus, reload);
  

    const fourChoices = [];
    fourChoices.push(currentOutline);
    const choicesWithoutCurrent = choices.filter((country) => {
      return country?.name !== currentOutline?.name;
    })
    const choicesWithoutCurrentShuffled = choicesWithoutCurrent.sort(() => Math.random() - 0.5);
    const threeLeft = choicesWithoutCurrentShuffled.slice(0, 3);
    fourChoices.push(...threeLeft);
    const fourChoicesShuffled = fourChoices.sort(() => Math.random() - 0.5);
  
    const choiceClickFunction = (name) => {
      if (name === currentFlag.name) {
        correctAsnwers.current++;
      }
      debugger;
      const newCurFlag = flagsArrShuffled.splice(0, 1)[0];
      currentTurn.current++;
      setCurrentFlag(newCurFlag);
      if (loaded && currentTurn.current > totalAnswers.current ) {
        changeScoreFunc({AsiaOutlinesPlus: correctAsnwers.current});
      }
    }
  
    const ResetFunction = () => {
      setReload( (prev)=> !prev);
    }
  
  
    const currentOutlineName = currentOutline?.name;
    return (
      <div className={styles.container}>
        {currentTurn.current <= totalAnswers.current &&
          <div> {currentTurn.current}/{totalAnswers.current}</div>
        }
        {loaded && currentOutline &&
          <>
            <div className={styles.flagContainer}> <img className={[styles.flagImg, styles[currentOutlineName]].join(' ')} src={currentOutline.OutlineURL} alt="" /></div>
            <div className={styles.Options}>
              {fourChoicesShuffled.map((oneOption => {
                return <button key={oneOption._id[0]} onClick={() => choiceClickFunction(oneOption.name)}> {oneOption.name}</button>
              }))}
  
            </div>
          </>
        }
        {!currentOutline && correctAsnwers.current !== totalAnswers.current &&
          <div className={styles.FinalScore}>Your score is {correctAsnwers.current} out of {totalAnswers.current}</div>
        }
        {!currentOutline && correctAsnwers.current === totalAnswers.current &&
          <div className={styles.FinalScore}>Perfect score</div>
        }
  
        {!currentOutline &&
          <button className={styles.tryAgain} onClick={ResetFunction}> Try again </button>
        }
      </div>
    )
  }
 