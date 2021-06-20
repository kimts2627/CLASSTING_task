import React, { useEffect, useState } from "react";
import { setTimer } from "../../modules/results";
import { useSelector, useDispatch } from "react-redux";

const Timer = () => {
  const time = useSelector((state) => state.results.time);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const dispatch = useDispatch();

  const onSetTimer = (time) => {
    dispatch(setTimer(time));
  };

  useEffect(() => {
    setTimeout(() => {
      onSetTimer(time + 1000);
    }, 1000);
    if (time < 60000) {
      setSec(time / 1000);
    } else {
      setMin(parseInt(time / 60000));
      setSec((time % 60000) / 1000);
    }
  }, [time]);

  return (
    <div className="absolute top-5 right-10">
      <span>{min < 10 ? `0${min}` : min}</span>:<span>{sec < 10 ? `0${sec}` : sec}</span>
    </div>
  );
};

export default Timer;
