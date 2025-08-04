import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const fetchWorkoutsByDate = async (date: Date): Promise<string[]> => {
    const dateStr = date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    // Replace this with your actual API call
    const response = await fetch(`/api/workouts?date=${dateStr}`);
    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }
    const data = await response.json();
    return data.workouts; // Assuming { workouts: string[] }
};

export const MainPage: React.FC = () => {
    const [value, onChange] = useState<Value>(new Date());
    const [workouts, setWorkouts] = useState<string[]>([
        "Deadlift",
        "bench press",
        "Test2",
        "Test3",
        "Test4",
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const selectedDate =
        value instanceof Date ? value : value?.[0] ?? new Date();

    useEffect(() => {
        const loadWorkouts = async () => {
            setLoading(true);
            setError("");
            try {
                const result = await fetchWorkoutsByDate(selectedDate);
                setWorkouts(result);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
    }, [selectedDate]);

    const handleCalendarChange = (val: Value) => {
        onChange(val);
        console.log(`rohan val = ${val?.toString()}`);
    };
    return (
        <div className="container d-flex flex-column align-items-center mb-4">
            <div className="my-4">
                <Calendar
                    onChange={handleCalendarChange}
                    value={value}
                    maxDate={new Date()}
                />
            </div>
            <h4 className="text-center">
                Workouts on {selectedDate.toDateString()}
            </h4>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-danger text-center">{error}</p>}

            {!loading && !error && workouts.length === 0 && (
                <p className="text-center my-4">No workouts found.</p>
            )}

            <ul className="list-group my-3">
                {workouts.map((workout, idx) => (
                    <li className="list-group-item" key={idx}>
                        {workout}
                    </li>
                ))}
            </ul>
            <button type="button" className="btn btn-primary">
                Add workout
            </button>
        </div>
    );
};
