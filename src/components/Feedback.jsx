import { useState } from "react";

const STORAGE_NOTE =
  "Feedback lives in this browser tab only — refreshing clears it. Wire this up to Supabase to keep it for good.";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0) {
      setError("Pick a rating from 1 to 5 before dropping it in the box.");
      return;
    }
    if (!comment.trim()) {
      setError("Add a line or two of feedback first.");
      return;
    }
    setError("");
    setEntries([
      {
        id: Date.now(),
        rating,
        name: name.trim() || "Anonymous passenger",
        comment: comment.trim(),
      },
      ...entries,
    ]);
    setRating(0);
    setName("");
    setComment("");
  }

  return (
    <section className="feedback" id="feedback">
      <div className="section-head">
        <span className="section-head__code">SUGGESTION BOX</span>
        <h2 className="section-head__title">Feedback &amp; rating</h2>
      </div>

      <div className="feedback__grid">
        <form className="feedback-slip" onSubmit={handleSubmit} noValidate>
          <p className="feedback-slip__heading">Passenger feedback slip</p>

          <div className="feedback-slip__field">
            <span className="feedback-slip__field-label">Rate the trip</span>
            <div
              className="star-picker"
              role="radiogroup"
              aria-label="Rating out of 5"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  type="button"
                  key={value}
                  role="radio"
                  aria-checked={rating === value}
                  aria-label={`${value} star${value > 1 ? "s" : ""}`}
                  className={`star ${
                    (hoverRating || rating) >= value ? "star--filled" : ""
                  }`}
                  onMouseEnter={() => setHoverRating(value)}
                  onMouseLeave={() => setHoverRating(0)}
                  onFocus={() => setHoverRating(value)}
                  onBlur={() => setHoverRating(0)}
                  onClick={() => setRating(value)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <label className="feedback-slip__field">
            <span className="feedback-slip__field-label">Name (optional)</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan dela Cruz"
              className="feedback-slip__input"
            />
          </label>

          <label className="feedback-slip__field">
            <span className="feedback-slip__field-label">Comment</span>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What worked, what didn't, what you'd want to see next"
              className="feedback-slip__textarea"
              rows={4}
            />
          </label>

          {error && <p className="feedback-slip__error">{error}</p>}

          <button type="submit" className="btn btn--primary">
            Drop in the box
          </button>
          <p className="feedback-slip__note">{STORAGE_NOTE}</p>
        </form>

        <div className="feedback-log">
          <p className="feedback-log__heading">
            Logged feedback
            <span className="feedback-log__count">{entries.length}</span>
          </p>

          {entries.length === 0 ? (
            <p className="feedback-log__empty">
              No slips yet — be the first passenger to leave one.
            </p>
          ) : (
            <ul className="feedback-log__list">
              {entries.map((entry) => (
                <li key={entry.id} className="feedback-log__item">
                  <div className="feedback-log__item-head">
                    <span className="feedback-log__stars">
                      {"★".repeat(entry.rating)}
                      {"☆".repeat(5 - entry.rating)}
                    </span>
                    <span className="feedback-log__name">{entry.name}</span>
                  </div>
                  <p className="feedback-log__comment">{entry.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
