// src/components/WorkoutClusterCard.jsx

export default function WorkoutClusterCard(props) {
    const title = props.title;
    const exercises = props.exercises;
  
    const hasExercises = exercises && exercises.length > 0;
  
    return (
      <div className="cluster-card">
        <h2 className="cluster-title">{title}</h2>
  
        {!hasExercises && (
          <p className="empty-text">No workout assigned</p>
        )}
  
        {hasExercises && (
          <ul className="exercise-list">
            {exercises.map(function (ex, index) {
              return (
                <li key={index} className="exercise-item">
                  <div className="exercise-name">{ex.name}</div>
                  <div className="exercise-meta">
                    {ex.sets} sets • {ex.reps}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
  