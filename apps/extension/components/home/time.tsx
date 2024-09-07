import { useEffect } from "react";

const Time: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="text-9xl font-bold absolute inset-0 flex items-center justify-center text-white [animation-duration:1s]">
      {formatTime(time)}
    </div>
  );
};

export default Time;
