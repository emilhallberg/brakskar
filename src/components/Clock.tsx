import { useState, useEffect, useCallback } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [refreshClock]);

  return <h6>{date.toLocaleTimeString()}</h6>;
};
export default Clock;
