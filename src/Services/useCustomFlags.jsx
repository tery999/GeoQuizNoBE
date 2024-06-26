import { useState, useEffect, useRef } from "react";

export function useCustomFlags(getFlagFunc, reload) {
    const [flagsArrShuffled, setFlagsArrShuffled] = useState([]);
    const [choices, setChoices] = useState([]);
    const [currentFlag, setCurrentFlag] = useState({});
    const [loaded, setLoaded] = useState(false);
    const correctAsnwers = useRef(0);
    const totalAnswers = useRef(0);
    const currentTurn = useRef(1);

    useEffect(() => {
        const getFlags = async () => {
          debugger;
          const flags = await getFlagFunc();
          const shuffling = flags.sort(() => Math.random() - 0.5);
          const choices = [...shuffling];
          setChoices(choices);

          totalAnswers.current = flags.length;
          correctAsnwers.current = 0;
          currentTurn.current = 1;
    
          const currentFlg = shuffling.splice(0, 1)[0];
          setFlagsArrShuffled(shuffling);
          setCurrentFlag(currentFlg);
          setLoaded(true);
        }
        getFlags();
      }, [reload])

      return [flagsArrShuffled, choices, setChoices, currentFlag, setCurrentFlag, loaded, correctAsnwers, totalAnswers, currentTurn]
}