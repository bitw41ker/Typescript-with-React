import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';
import { type ReactNode } from 'react';
import { type CourseGoal as CourseGoalType } from '../App.tsx';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning">
        You have a lot of goals. Perhaps you should narrow them down?
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.desription}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
