import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CourseGoalType } from '../App.tsx';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.desription}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
