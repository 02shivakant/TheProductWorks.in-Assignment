export default function MetricCard({ label, value, unit, status, icon }) {
  const borderColor = {
    success: "border-success",
    warning: "border-warning",
    danger:  "border-danger",
    default: "border-secondary",
  }[status || "default"];

  const textColor = {
    success: "text-success",
    warning: "text-warning",
    danger:  "text-danger",
    default: "text-secondary",
  }[status || "default"];

  return (
    <div className={`card h-100 border-2 ${borderColor}`} style={{ borderWidth: "2px" }}>
      <div className="card-body p-3">
        <div className="d-flex align-items-center gap-2 mb-1">
          <span style={{ fontSize: "1.1rem" }}>{icon}</span>
          <p className="text-muted small text-uppercase mb-0 fw-semibold" style={{ fontSize: "0.7rem", letterSpacing: "0.05em" }}>
            {label}
          </p>
        </div>
        <p className={`fw-bold mb-0 ${textColor}`} style={{ fontSize: "1.6rem", lineHeight: 1.1 }}>
          {value}
          <span className="text-muted fw-normal ms-1" style={{ fontSize: "0.85rem" }}>{unit}</span>
        </p>
      </div>
    </div>
  );
}
