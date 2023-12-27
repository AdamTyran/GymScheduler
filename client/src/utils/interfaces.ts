export interface ExerciseSet {
  _id?: string;
  date: Date;
  exercises: Exercise[];
}

export interface Exercise {
  _id: string;
  name: string;
  sets?: number;
  reps?: number;
}
