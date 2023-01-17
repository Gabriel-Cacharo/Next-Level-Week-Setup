interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return <p className="bg-purple-800">{props.completed}</p>;
}
