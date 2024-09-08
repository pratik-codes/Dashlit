import { useEffect,useState} from "react";

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
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return date.toLocaleDateString(undefined, options)
  }

  return (
    <div className="text-9xl font-bold flex-col absolute inset-0 flex items-center justify-center text-white [animation-duration:1s]">
      {formatTime(time)}
      <div className="text-4xl">
        {formatDate(time)}
      </div>
      
    </div>
  );
};

export default Time;
