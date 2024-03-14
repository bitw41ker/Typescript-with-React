import { useState, useRef, useEffect } from 'react';
import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const intervalRef = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 0) {
            return 0;
          }

          return prev - 50;
        });
      }, 50);
      intervalRef.current = timer;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress value={remainingTime} max={duration * 1000}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
