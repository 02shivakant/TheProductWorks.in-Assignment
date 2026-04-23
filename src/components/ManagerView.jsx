import { managerSummary, MONTH_LABELS, MONTHS } from "../data/mockData";
import { getSignalBadge } from "../utils/metricEngine";

export default function ManagerView() {
  return (
    <div>
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-1">Team Summary</h5>
        <p className="text-muted small mb-0">Monthly snapshot across all teams and managers</p>
      </div>

      {/* Group by manager */}
      {["Rina Kapoor", "Samir Gupta", "Priya Nair"].map((managerName) => {
        const rows = managerSummary.filter(r => r.manager === managerName);
        return (
          <div key={managerName} className="card mb-4">
            <div className="card-header bg-light">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: 36, height: 36, fontSize: "0.85rem" }}
                >
                  {managerName.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="mb-0 fw-semibold text-dark">{managerName}</p>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>
                    {rows[0]?.teamSize} developers
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th className="ps-3 text-muted fw-semibold" style={{ fontSize: "0.75rem" }}>MONTH</th>
                      <th className="text-muted fw-semibold" style={{ fontSize: "0.75rem" }}>AVG LEAD TIME</th>
                      <th className="text-muted fw-semibold" style={{ fontSize: "0.75rem" }}>AVG CYCLE TIME</th>
                      <th className="text-muted fw-semibold" style={{ fontSize: "0.75rem" }}>AVG BUG RATE</th>
                      <th className="text-muted fw-semibold" style={{ fontSize: "0.75rem" }}>SIGNAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      const badge = getSignalBadge(row.signal);
                      return (
                        <tr key={row.month}>
                          <td className="ps-3 fw-semibold text-dark">{MONTH_LABELS[row.month]}</td>
                          <td>
                            <span className={row.avgLeadTime > 4 ? "text-danger fw-semibold" : "text-dark"}>
                              {row.avgLeadTime.toFixed(1)} days
                            </span>
                          </td>
                          <td>
                            <span className={row.avgCycleTime > 5 ? "text-danger fw-semibold" : "text-dark"}>
                              {row.avgCycleTime.toFixed(1)} days
                            </span>
                          </td>
                          <td>
                            <span className={row.avgBugRate >= 0.3 ? "text-danger fw-semibold" : "text-dark"}>
                              {(row.avgBugRate * 100).toFixed(0)}%
                            </span>
                          </td>
                          <td>
                            <span className={badge.cls} style={{ fontSize: "0.75rem" }}>
                              {badge.icon} {row.signal}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
