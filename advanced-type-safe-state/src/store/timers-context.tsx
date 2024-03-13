import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
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

type Action =
  | { type: 'ADD_TIMER'; payload: Timer }
  | { type: 'START_TIMERS' }
  | { type: 'STOP_TIMERS' };

const initialState: TimersState = {
  isRunning: true,
  timers: [],
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

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case 'START_TIMERS':
      return { ...state, isRunning: true };
    case 'STOP_TIMERS':
      return { ...state, isRunning: false };
    case 'ADD_TIMER':
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer: (timerData) => {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimers: () => {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers: () => {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
