export const todayWorkout = {
  date: new Date().toISOString(),

  warmup: [
    { name: "Jump Rope", sets: 1, reps: "5 min" },
    { name: "Dynamic Stretching", sets: 1, reps: "8–10 min" }
  ],

  main: [
    { name: "Barbell Back Squat", sets: 4, reps: "6 reps" },
    { name: "Bench Press", sets: 4, reps: "6 reps" }
  ],

  accessory: [
    { name: "Dumbbell Lunges", sets: 3, reps: "10 reps/leg" },
    { name: "Lat Pulldown", sets: 3, reps: "12 reps" }
  ],

  cooldown: [
    { name: "Foam Rolling", sets: 1, reps: "5 min" },
    { name: "Child’s Pose Stretch", sets: 1, reps: "2 min" }
  ]
};

// To test empty workout day, comment above and use:
// export const todayWorkout = { date: new Date().toISOString() };
