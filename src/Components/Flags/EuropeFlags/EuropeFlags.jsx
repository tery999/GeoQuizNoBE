import { useContext, useEffect, useRef, useState } from 'react'
import * as styles from "./EuropeFlags.module.css"
import { getEuropeData } from '../../../Services/Services';
import { ScoreContext } from '../../../App';

export default function EuropeFlags () {
  //original without custom hook
  const {changeScoreFunc} = useContext(ScoreContext)

    const [flagsArrShuffled, setFlagsArrShuffled] = useState([]);
    const [choices, setChoices] = useState([]);
    const [currentFlag, setCurrentFlag] = useState({});
    const [loaded, setLoaded] = useState(false);
    const correctAsnwers = useRef(0);
    const totalAnswers = useRef(0);
    const currentTurn = useRef(1);
  
  
    useEffect(() => {
      const getFlags = async () => {
        // debugger;
        const flags = await getEuropeData();
        const shuffling = flags.sort(() => Math.random() - 0.5);
        const choices = [...shuffling];
        setChoices(choices);
        totalAnswers.current = flags.length;
  
        const currentFlg = shuffling.splice(0, 1)[0];
        setFlagsArrShuffled(shuffling);
        setCurrentFlag(currentFlg);
        setLoaded(true);
      }
      getFlags();
    }, [])
    const fourChoices = [];
    fourChoices.push(currentFlag);
    const choicesWithoutCurrent = choices.filter((flagObj) => {
      return flagObj?.name !== currentFlag?.name;
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
        changeScoreFunc({EuroFlags: correctAsnwers.current});
      }
    }
  
    const ResetFunction = () => {
      window.location.reload();
    }
  
    const currentFlagImage = currentFlag?.name;

    return (
      <div className={styles.container}>
        {currentTurn.current <= totalAnswers.current &&
          <div> {currentTurn.current}/{totalAnswers.current}</div>
        }
        {loaded && currentFlag &&
          <>
            <div className={styles.flagContainer}> <img className={[styles.flagImg, styles[currentFlagImage]].join(' ')} src={currentFlag.flagURL} alt="" /></div>
            <div className={styles.Options}>
              {fourChoicesShuffled.map((oneOption => {
                return <button key={oneOption._id[0]} onClick={() => choiceClickFunction(oneOption.name)}> {oneOption.name}</button>
              }))}
  
            </div>
          </>
        }
        {!currentFlag && correctAsnwers.current !== totalAnswers.current &&
          <div className={styles.FinalScore}>Your score is {correctAsnwers.current} out of {totalAnswers.current}</div>
        }
        {!currentFlag && correctAsnwers.current === totalAnswers.current &&
          <div className={styles.FinalScore}>Perfect score</div>
        }
  
        {!currentFlag &&
          <button className={styles.tryAgain} onClick={ResetFunction}> Try again </button>
        }
      </div>
    )
  }
 