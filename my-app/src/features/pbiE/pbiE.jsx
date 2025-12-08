import React, { useState } from "react";
import "./pbiE.css";

function PbiE() {
  
  const initialNotes = [
    {
      id: 1,
      type: "Observation",
      date: "2025-11-20",
      note: "Client struggled with last set of squats, form started to break down.",
      recommendation: "Next session, keep weight the same and focus on slower reps and technique."
    },
    {
      id: 2,
      type: "Adjustment",
      date: "2025-11-18",
      note: "Client had good energy but reported tightness in shoulders.",
      recommendation: "Add longer warm-up and reduce overhead pressing volume slightly."
    },
    {
      id: 3,
      type: "Motivation",
      date: "2025-11-15",
      note: "Client hit all planned sets and seemed more confident with deadlifts.",
      recommendation: "Consider small weight increase next week if technique stays solid."
    }
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [noteType, setNoteType] = useState("Observation");
  const [noteText, setNoteText] = useState("");
  const [recommendationText, setRecommendationText] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSaveNote(event) {
    event.preventDefault();

   
    if (!noteText.trim()) {
      setErrorMessage("Please enter a note before saving.");
      setSaveMessage("");
      return;
    }

    const newNote = {
      id: Date.now(),
      type: noteType,
      
      date: "2025-11-30",
      note: noteText.trim(),
      recommendation: recommendationText.trim()
    };

    // Newest note should appear at the top (must do it the right way)
    setNotes([newNote, ...notes]);

    
    setNoteType("Observation");
    setNoteText("");
    setRecommendationText("");

    
    setSaveMessage("Note saved for this member.");
    setErrorMessage("");
  }

  function handleClearForm() {
    setNoteType("Observation");
    setNoteText("");
    setRecommendationText("");
    setSaveMessage("");
    setErrorMessage("");
  }

  return (
    <div className="trainer-notes-container">
      <header className="trainer-notes-header">
        <h1>Trainer Notes &amp; Recommendations</h1>
        <p className="member-name">Member: Example name</p>
        <p className="member-goal">Goal: Build strength and improve technique over time.</p>
        <p className="trainer-notes-description">
          Use this page to record quick observations and recommendations after each workout.
          These notes help you remember what happened and adjust future sessions when needed.
        </p>
      </header>

      <main className="trainer-notes-main">
        <section className="trainer-notes-form-section">
          <h2>Add New Note</h2>

          <form className="trainer-notes-form" onSubmit={handleSaveNote} noValidate>
            <div className="form-row">
              <label className="form-label" htmlFor="noteType">
                Note type
              </label>
              <select
                id="noteType"
                value={noteType}
                onChange={function (event) {
                  setNoteType(event.target.value);
                }}
              >
                <option value="Observation">Observation</option>
                <option value="Adjustment">Adjustment</option>
                <option value="Motivation">Motivation</option>
                <option value="Warning">Warning</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="noteText">
                Note (required)
              </label>
              <textarea
                id="noteText"
                value={noteText}
                onChange={function (event) {
                  setNoteText(event.target.value);
                }}
                rows="4"
                placeholder="Example: Client struggled with squats in the final set. Consider reducing weight or volume next time."
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="recommendationText">
                Recommendation / Next steps (optional)
              </label>
              <textarea
                id="recommendationText"
                value={recommendationText}
                onChange={function (event) {
                  setRecommendationText(event.target.value);
                }}
                rows="3"
                placeholder="Example: Keep weight the same next week and focus on slower reps and form cues."
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-save">
                Save Note
              </button>
              <button
                type="button"
                className="btn-clear"
                onClick={handleClearForm}
              >
                Clear
              </button>
            </div>

            {saveMessage && (
              <p className="message message-success">{saveMessage}</p>
            )}
            {errorMessage && (
              <p className="message message-error">{errorMessage}</p>
            )}
          </form>
        </section>

        <section className="trainer-notes-list-section">
          <h2>Notes for This Member</h2>

          {notes.length === 0 ? (
            <p className="no-notes-text">No notes yet. Add your first note above.</p>
          ) : (
            <ul className="notes-list">
              {notes.map(function (note) {
                return (
                  <li key={note.id} className="note-card">
                    <div className="note-header">
                      <span className="note-type">{note.type}</span>
                      <span className="note-date">{note.date}</span>
                    </div>
                    <p className="note-text">{note.note}</p>
                    {note.recommendation && (
                      <p className="note-recommendation">
                        <span className="note-recommendation-label">Recommendation: </span>
                        {note.recommendation}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default PbiE;