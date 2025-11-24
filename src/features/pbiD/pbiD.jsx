import { useState } from "react";
import "./pbiD.css";

function PbiD() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = () => {
    setSaveMessage("Feedback saved.");
  };

  const handleClear = () => {
    setRating("");
    setComment("");
    setSaveMessage("");
  };

  return (
    <div className="feedback-container">
      <header className="feedback-header">
        <h1>Workout Feedback</h1>
        <p>
          Use this page to rate how difficult today&apos;s workout felt and leave a
          short comment for your trainer.
        </p>
      </header>

      <section className="session-info">
        <h2>Today&apos;s Session</h2>
        <p>Member: (Member Name)</p>
        <p>Date: (Session Date)</p>
        <p>Session: For example (Full Body Strength)</p>
      </section>

      <section className="feedback-section">
        <h2>How difficult was this workout?</h2>
        <p>
          You will be able to choose a rating from 1 (very easy) to 5 (very hard) and
          write a short comment about your experience.
        </p>

        <div className="rating-options">
          <label>
            <input
              type="radio"
              name="difficulty-rating"
              value="1"
              checked={rating === "1"}
              onChange={() => setRating("1")}
            />
            1 - Very Easy
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="difficulty-rating"
              value="2"
              checked={rating === "2"}
              onChange={() => setRating("2")}
            />
            2 - Easy
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="difficulty-rating"
              value="3"
              checked={rating === "3"}
              onChange={() => setRating("3")}
            />
            3 - Moderate
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="difficulty-rating"
              value="4"
              checked={rating === "4"}
              onChange={() => setRating("4")}
            />
            4 - Hard
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="difficulty-rating"
              value="5"
              checked={rating === "5"}
              onChange={() => setRating("5")}
            />
            5 - Very Hard
          </label>
        </div>

        <div className="comment-section">
          <h3>Comment about this workout</h3>
          <p>
            You can describe what felt easy, what felt hard, or mention any pain or
            limitations you experienced.
          </p>
          <textarea
            rows={4}
            placeholder="Write your comment here"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
      </section>

      <section className="feedback-actions">
        <button type="button" onClick={handleSave}>
          Save Feedback
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>

        {saveMessage && <p className="save-message">{saveMessage}</p>}
      </section>
    </div>
  );
}

export default PbiD;