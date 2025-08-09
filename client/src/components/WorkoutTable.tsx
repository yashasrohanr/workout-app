import { WorkoutBrief } from "../entities/WorkoutBriefEntity";

const WorkoutTable: React.FC<{ workouts: WorkoutBrief[] }> = ({
    workouts: workoutBrief,
}) => {
    return (
        <div className="container py-2">
            <div className="row align-items-center border rounded shadow-sm p-3 mb-2 bg-white">
                {/* Table */}
                <div className="col table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Type</th>
                                <th scope="col">Name</th>
                                <th scope="col">Sets</th>
                                <th scope="col">Reps</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {workoutBrief.map((workout, index) => (
                                <tr key={index}>
                                    <th scope="row">{workout.displayNumber}</th>
                                    <td>
                                        <img
                                            src={workout.icon}
                                            className="img-fluid"
                                            alt=""
                                            title={workout.type}
                                            style={{
                                                maxHeight: "20px",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </td>
                                    <td style={{ cursor: "pointer" }}>
                                        {workout.name}
                                    </td>
                                    <td>{workout.sets.length}</td>
                                    <td>
                                        {workout.sets.map((it) => (
                                            <div
                                                key={`${it.reps}-${it.weight}`}
                                            >{`${it.reps} * ${it.weight} ${it.unit}`}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WorkoutTable;
