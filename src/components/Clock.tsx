import { useState, useEffect, useCallback } from "react";

const Clock = () => {
  const [date, setDate] = useState<Date>();

  const refreshClock = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [refreshClock]);

  return <h5>{date?.toLocaleTimeString()}</h5>;
};

export default Clock;
