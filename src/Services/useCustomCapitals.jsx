import { useState, useEffect, useRef } from "react";

//Same as useCustomFlags, but with changed names
export function useCustomCapitals(getCapitalFunc, reload) {
    const [countryArrShuffled, setCountryArrShuffled] = useState([]);
    const [choices, setChoices] = useState([]);
    const [currentCapital, setCurrentCapital] = useState({});
    const [loaded, setLoaded] = useState(false);
    const correctAsnwers = useRef(0);
    const totalAnswers = useRef(0);
    const currentTurn = useRef(1);

    useEffect(() => {
        const getCapitals = async () => {
          // debugger;
          const capitals = await getCapitalFunc();
          const shuffling = capitals.sort(() => Math.random() - 0.5);
          const choices = [...shuffling];
          setChoices(choices);

          totalAnswers.current = capitals.length;
          correctAsnwers.current = 0;
          currentTurn.current = 1;
    
          const currentCapital = shuffling.splice(0, 1)[0];
          setCountryArrShuffled(shuffling);
          setCurrentCapital(currentCapital);
          setLoaded(true);
        }
        getCapitals();
      }, [reload])

      return [countryArrShuffled, choices, setChoices, currentCapital, setCurrentCapital, loaded, correctAsnwers, totalAnswers, currentTurn]
}