import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CourseGoalType } from '../App.tsx';

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.desription}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
