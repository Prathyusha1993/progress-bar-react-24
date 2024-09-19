import React, { useState, useEffect } from 'react';
import '../App.css';
import { Max, Min } from '../constants';

const ProgressBar = ({value=0, onComplete}) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(Max, Math.max(value, Min)));
        if(value >= Max){
            onComplete();
        }
    }, [value]);

  return (
    <div className='progress'>
        <span  style={{color: percent > 49 ? 'white' : 'black'}}>{percent.toFixed()}%</span>
        <div 
        // style={{width: `${percent}%`}} 
        style={{transform: `scaleX(${percent / Max})`, transformOrigin: 'left'}}
        role="progressbar"
        aria-valuenow={percent.toFixed()}
        aria-valuemin={Min}
        aria-valuemax={Max}
        ></div>
    </div>
  )
}

export default ProgressBar;