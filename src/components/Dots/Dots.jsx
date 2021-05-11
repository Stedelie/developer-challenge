import { INITIAL_LOADING_STATE } from 'const/const';
import React, {useState, useEffect} from 'react';


const Dots = ({maxNumberOfDots = 3}) => {
    const [dots, setDots] = useState(INITIAL_LOADING_STATE)

    useEffect(() => {
        const timer = setInterval(() => {
            if (dots.length < maxNumberOfDots) setDots(dots + '.');
            else setDots(INITIAL_LOADING_STATE);
        }, 500);

        return () => clearInterval(timer);
      }, [dots]);

    return(
      <span>{dots}</span>
    )
};

export default Dots;