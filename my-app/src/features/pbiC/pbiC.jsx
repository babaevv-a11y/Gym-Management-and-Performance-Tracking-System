import { useState } from "react";
import "./pbiC.css";

const exercises = [
  {
    id: 1,
    name: "Bench Press",
    sets: 4,
    reps: 10,
    weightLbs: 135,
    weightKg: 61,
  },
  {
    id: 2,
    name: "Back Squat",
    sets: 5,
    reps: 5,
    weightLbs: 185,
    weightKg: 84,
  },
  {
    id: 3,
    name: "Deadlift",
    sets: 3,
    reps: 5,
    weightLbs: 225,
    weightKg: 102,
  },
];

function PbiC() {

     const [exerciseEntries, setExerciseEntries] = useState(
    exercises.map((exercise) => ({
      id: exercise.id,
      status: "",
      comment: "",
    }))
  );
  const [sessionStatus, setSessionStatus] = useState("");
  const [sessionComment, setSessionComment] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const handleStatusChange = (exerciseId, newStatus) => {
    setExerciseEntries((previousEntries) =>
      previousEntries.map((entry) =>
        entry.id === exerciseId ? { ...entry, status: newStatus } : entry
      )
    );
  };

  const handleCommentChange = (exerciseId, newComment) => {
    setExerciseEntries((previousEntries) =>
      previousEntries.map((entry) =>
        entry.id === exerciseId ? { ...entry, comment: newComment } : entry
      )
    );
  };

  const getEntryForExercise = (exerciseId) =>
    exerciseEntries.find((entry) => entry.id === exerciseId); // REMINDER* === means that for it to be TRUE both options must be identical

    const handleSave = () => {
    setSaveMessage("A record has been saved."); // This is a code to create a way so the user could save the work? Yes.
  };

const handleClear = () => {
  // reset all exercise statuses and comments
  setExerciseEntries(
    exercises.map((exercise) => ({
      id: exercise.id,
      status: "",
      comment: "",
    }))
  );

  // reset session status and comment
  setSessionStatus("");
  setSessionComment("");

  // clear the save message. I think now it should clear everything
  setSaveMessage("");
};

  return (
    <div className="session-logging-container">
      <header className="session-logging-header">
        <h1>Gym Session Logging</h1>
        <p>
          Use this page to review today&apos;s assigned workout and record what
          you completed for your trainer.
        </p>
      </header>

      <section className="session-info">
        <h2>Today&apos;s Session</h2>
        <p>Member: [Member Name]</p>
        <p>Date: [Session Date]</p>
      </section>

      <section className="exercise-list">
        <h2>Assigned Exercises</h2>
        <p>
          For each exercise you will track sets, reps, weight in pounds (lbs)
          and kilograms (kg), and whether it was completed, missed, or partially
          completed.
        </p>

        <table className="exercise-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight (lbs)</th>
              <th>Weight (kg)</th>
              <th>Status</th>
              <th>Comment</th>
            </tr>
          </thead>

          <tbody>
  {exercises.map((exercise) => {
    const entry = getEntryForExercise(exercise.id);

    return (
      <tr key={exercise.id}>
        <td>{exercise.name}</td>
        <td>{exercise.sets}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weightLbs}</td>
        <td>{exercise.weightKg}</td>
        <td>
          <div className="status-options">
            <label>
              <input
                type="radio"
                name={"status-" + exercise.id}
                value="completed"
                checked={entry?.status === "completed"}
                onChange={() =>
                  handleStatusChange(exercise.id, "completed")
                }
              />
              Completed
            </label>
            <br />
            <label>
              <input
                type="radio"
                name={"status-" + exercise.id}
                value="missed"
                checked={entry?.status === "missed"}
                onChange={() =>
                  handleStatusChange(exercise.id, "missed")
                }
              />
              Missed
            </label>
            <br />
            <label>
              <input
                type="radio"
                name={"status-" + exercise.id}
                value="partial"
                checked={entry?.status === "partial"}
                onChange={() =>
                  handleStatusChange(exercise.id, "partial")
                }
              />
              Partially Completed
            </label>
          </div>
        </td>
        <td>
          {entry?.status === "missed" || entry?.status === "partial" ? (
            <textarea
              value={entry.comment}
              onChange={(event) =>
                handleCommentChange(exercise.id, event.target.value)
              }
              placeholder="Add a short comment"
              rows={2}
            />
          ) : (
            <span>—</span> // this coee creates (-) under the Comment. Can I use something better visually or this is good?
          )}
        </td>
      </tr>
    );
  })}
</tbody>
        </table>
      </section>

      <section className="session-summary">
        <h2>Session Status & Comments</h2>
        <p>
          At the end of the workout you will choose an overall status for this
          session (Completed, Missed, or Partial) and add any notes for your
          trainer.
        </p>
        <div className="session-status-options">
    <p><strong>Overall session status:</strong></p>
    <label>
      <input
        type="radio"
        name="session-status"
        value="completed"
        checked={sessionStatus === "completed"}
        onChange={() => setSessionStatus("completed")}
      />
      Completed
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="session-status"
        value="missed"
        checked={sessionStatus === "missed"}
        onChange={() => setSessionStatus("missed")}
      />
      Missed
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="session-status"
        value="partial"
        checked={sessionStatus === "partial"}
        onChange={() => setSessionStatus("partial")}
      />
      Partial
    </label>
  </div>
  <div className="session-comment-box">
    <p><strong>Session comment (optional):</strong></p>
    <textarea
      rows={4}
      placeholder="Add a comment about your workout today"
      value={sessionComment}
      onChange={(e) => setSessionComment(e.target.value)}
    />
    </div>
      </section>
      {/* The following bloke of code is to create a save button with the message. now need to think about CLEAR button? yes find how to create one and where to enter it. */}
      {/* I do not want the clear button for every section. I think it would be better to create a clear button that deletes everything. */}
       <section className="session-actions"> 
        <button type="button" onClick={handleSave}>
          Save 
        </button>
{/* so annoying why the // does not work when I want to create a comment?? Anyway, bellow is the button creation for clear. YESS it worked, i deleted everything.. hate coding.. */}
 <button type="button" onClick={handleClear}> 
    Clear
  </button>

        {saveMessage && (
          <p className="save-message">{saveMessage}</p>
        )}
      </section>

    </div>
  );
}

export default PbiC;