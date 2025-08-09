export type MetricUnit =
    | "kg"
    | "lbs"
    | "m"
    | "km"
    | "minutes"
    | "seconds"
    | "none";

export interface SetEntry {
    reps?: number; // Optional because cardio may not have reps
    distance?: number; // For running, cycling
    weight?: number; // For lifting
    duration?: number; // For planks, running, etc.
    unit?: MetricUnit; // Unit for distance, weight, or duration
}

export interface ExerciseEntry {
    name: string; // e.g., "Bench Press" or "Running"
    type: "Strength" | "Cardio" | "Other";
    sets: SetEntry[]; // One or more set records
    notes?: string; // Optional comments
}

export interface WorkoutDay {
    date: string;
    exercises: ExerciseEntry[];
}

export interface WorkoutBrief extends ExerciseEntry {
    icon: string;
    displayNumber: number;
}
