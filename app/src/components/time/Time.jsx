import { useEffect } from "react";
import { useState } from "react";

export const Time = () => {
  const [time, setTime] = useState();
  useEffect( () => {
    setInterval( () => setTime(new Date().toLocaleString()), 1000);
  }, []);
  return (
    <h3>{time}</h3>
  )
}
