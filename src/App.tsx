import { useState } from 'react';

import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

type CourseGoal = {
  title: string;
  desription: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: 'React + TS',
      desription: 'Learn Typescript with React',
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.desription}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
