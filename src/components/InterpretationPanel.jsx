export default function InterpretationPanel({ insights }) {
  return (
    <div className="card border-primary">
      <div className="card-header bg-primary bg-opacity-10 border-primary">
        <h6 className="mb-0 fw-semibold text-primary">📖 What's likely happening</h6>
      </div>
      <div className="card-body">
        <ul className="mb-0 list-unstyled d-flex flex-column gap-2">
          {insights.map((text, i) => (
            <li key={i} className="d-flex align-items-start gap-2">
              <span className="text-primary mt-1" style={{ fontSize: "0.5rem" }}>●</span>
              <span className="text-dark" style={{ fontSize: "0.92rem" }}>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
