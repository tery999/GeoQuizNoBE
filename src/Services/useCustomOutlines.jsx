import { useState, useEffect, useRef } from "react";

//Same as useCustomFlags, but with changed names
export function useCustomOutlines(getOutlineFunc, reload) {
    const [countryArrShuffled, setCountryArrShuffled] = useState([]);
    const [choices, setChoices] = useState([]);
    const [currentOutline, setCurrentOutline] = useState({});
    const [loaded, setLoaded] = useState(false);
    const correctAsnwers = useRef(0);
    const totalAnswers = useRef(0);
    const currentTurn = useRef(1);

    useEffect(() => {
        const getOutlines = async () => {
          // debugger;
          const outlines = await getOutlineFunc();
          const shuffling = outlines.sort(() => Math.random() - 0.5);
          const choices = [...shuffling];
          setChoices(choices);

          totalAnswers.current = outlines.length;
          correctAsnwers.current = 0;
          currentTurn.current = 1;
    
          const currentOutline = shuffling.splice(0, 1)[0];
          setCountryArrShuffled(shuffling);
          setCurrentOutline(currentOutline);
          setLoaded(true);
        }
        getOutlines();
      }, [reload])

      return [countryArrShuffled, choices, setChoices, currentOutline, setCurrentOutline, loaded, correctAsnwers, totalAnswers, currentTurn]
}