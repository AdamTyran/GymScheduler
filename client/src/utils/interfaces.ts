export interface ExerciseSet {
  id: number;
  date: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  sets?: number;
  reps?: number;
}
