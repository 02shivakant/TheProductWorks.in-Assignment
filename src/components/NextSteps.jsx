export default function NextSteps({ steps }) {
  return (
    <div className="card border-success">
      <div className="card-header bg-success bg-opacity-10 border-success">
        <h6 className="mb-0 fw-semibold text-success">🎯 Suggested next steps</h6>
      </div>
      <div className="card-body">
        <ol className="mb-0 d-flex flex-column gap-2 ps-3">
          {steps.map((step, i) => (
            <li key={i} className="text-dark" style={{ fontSize: "0.92rem" }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
