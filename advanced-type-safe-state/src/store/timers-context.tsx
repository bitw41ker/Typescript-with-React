import { type ReactNode, createContext, useContext } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error(
      'useTimersContext must be used within a TimersContextProvider'
    );
  }

  return timersCtx;
}

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: () => {},
    startTimers: () => {},
    stopTimers: () => {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
