// src/components/WorkoutDashboard.jsx

import { useState } from "react";
import WorkoutClusterCard from "./WorkoutClusterCard";
import { todayWorkout } from "../data/mockTodayWorkout";

export default function WorkoutDashboard() {
  // Hooks FIRST (professor rule)
  const [workout, setWorkout] = useState(todayWorkout);

  const dateObj = workout.date ? new Date(workout.date) : new Date();
  const todayString = dateObj.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  function handleRefresh() {
    // reset state (simulating reload)
    setWorkout({
      ...todayWorkout,
      date: new Date().toISOString()
    });
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Workout Dashboard</h1>
          <p className="dashboard-date">{todayString}</p>
        </div>

        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
      </div>

      <div className="clusters-grid">
        <WorkoutClusterCard title="Warm-up" exercises={workout.warmup} />
        <WorkoutClusterCard title="Main" exercises={workout.main} />
        <WorkoutClusterCard title="Accessory" exercises={workout.accessory} />
        <WorkoutClusterCard title="Cool-down" exercises={workout.cooldown} />
      </div>
    </div>
  );
}
