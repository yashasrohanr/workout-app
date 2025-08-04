import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MainPage: React.FC = () => {
    const [value, onChange] = useState<Value>(new Date());

    const handleCalendarChange = (val: Value) => {
        onChange(val);
        console.log(`rohan val = ${val?.toString()}`);
    };
    return (
        <div className="container mx-5 my=5">
            <Calendar onChange={handleCalendarChange} value={value} />
        </div>
    );
};
