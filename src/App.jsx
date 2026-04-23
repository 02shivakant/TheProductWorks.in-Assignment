import { useState } from "react";
import { developers, metrics, MONTHS, MONTH_LABELS } from "./data/mockData";
import { getInterpretation, getNextSteps, getPatternBadge, getMetricStatus } from "./utils/metricEngine";
import MetricCard from "./components/MetricCard";
import InterpretationPanel from "./components/InterpretationPanel";
import NextSteps from "./components/NextSteps";
import ManagerView from "./components/ManagerView";

export default function App() {
  const [view, setView] = useState("ic");
  const [selectedDev, setSelectedDev] = useState("DEV-002");
  const [selectedMonth, setSelectedMonth] = useState("2026-04");

  const dev = developers.find(d => d.id === selectedDev);
  const m = metrics.find(x => x.devId === selectedDev && x.month === selectedMonth);
  const insights = m ? getInterpretation(m) : [];
  const steps = m ? getNextSteps(m) : [];
  const badge = m ? getPatternBadge(m.pattern) : { cls: "badge bg-secondary", icon: "ℹ️" };

  const serviceIcon = {
    backend: "⚙️", frontend: "🖥️", mobile: "📱"
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f0f2f5" }}>

      {/* Navbar */}
      <nav className="navbar navbar-dark shadow-sm" style={{ backgroundColor: "#1a1f36" }}>
        <div className="container">
          <span className="navbar-brand fw-bold fs-5">
            🚀 DevPulse
            <span className="ms-2 badge bg-primary" style={{ fontSize: "0.65rem", verticalAlign: "middle" }}>MVP</span>
          </span>
          <div className="d-flex gap-2">
            <button
              onClick={() => setView("ic")}
              className={`btn btn-sm ${view === "ic" ? "btn-primary" : "btn-outline-light"}`}
            >
              👤 My View
            </button>
            <button
              onClick={() => setView("manager")}
              className={`btn btn-sm ${view === "manager" ? "btn-primary" : "btn-outline-light"}`}
            >
              👥 Manager View
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-4" style={{ maxWidth: "780px" }}>

        {/* ── IC VIEW ── */}
        {view === "ic" && (
          <>
            {/* Page title */}
            <div className="mb-4">
              <h5 className="fw-bold text-dark mb-1">Individual Contributor Dashboard</h5>
              <p className="text-muted small mb-0">
                Select a developer and month to see their metrics, interpretation, and next steps.
              </p>
            </div>

            {/* Selectors */}
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body">
                <div className="row g-3 align-items-end">
                  <div className="col-sm-6">
                    <label className="form-label fw-semibold text-muted small text-uppercase">
                      Developer
                    </label>
                    <select
                      className="form-select"
                      value={selectedDev}
                      onChange={e => setSelectedDev(e.target.value)}
                    >
                      {developers.map(d => (
                        <option key={d.id} value={d.id}>
                          {d.name} — {d.team} ({d.level})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label fw-semibold text-muted small text-uppercase">
                      Month
                    </label>
                    <select
                      className="form-select"
                      value={selectedMonth}
                      onChange={e => setSelectedMonth(e.target.value)}
                    >
                      {MONTHS.map(mo => (
                        <option key={mo} value={mo}>{MONTH_LABELS[mo]}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-2">
                    <div className="d-flex align-items-center justify-content-center h-100 pt-2">
                      {m && (
                        <span className={`${badge.cls} fs-6 px-3 py-2`}>
                          {badge.icon} {m.pattern}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {dev && m && (
              <>
                {/* Developer Profile Card */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                        style={{ width: 52, height: 52, fontSize: "1.1rem" }}
                      >
                        {dev.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold text-dark">{dev.name}</h5>
                        <p className="mb-0 text-muted small">
                          {serviceIcon[dev.service]} {dev.service} &nbsp;·&nbsp;
                          🏷 {dev.level} &nbsp;·&nbsp;
                          🏢 {dev.team} &nbsp;·&nbsp;
                          👤 {dev.manager}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="row g-3 mb-4">
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="Avg Lead Time"
                      value={m.avgLeadTime.toFixed(1)}
                      unit="days"
                      icon="🚦"
                      status={getMetricStatus(m.avgLeadTime, 3, 4)}
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="Avg Cycle Time"
                      value={m.avgCycleTime.toFixed(1)}
                      unit="days"
                      icon="⏱"
                      status={getMetricStatus(m.avgCycleTime, 4, 5)}
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="Bug Rate"
                      value={(m.bugRate * 100).toFixed(0) + "%"}
                      unit="escaped"
                      icon="🐛"
                      status={m.bugRate >= 0.5 ? "danger" : m.bugRate > 0 ? "warning" : "success"}
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="PR Throughput"
                      value={m.mergedPRs}
                      unit="merged PRs"
                      icon="🔀"
                      status="default"
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="Deployments"
                      value={m.deployments}
                      unit="to prod"
                      icon="🚀"
                      status="default"
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <MetricCard
                      label="Issues Done"
                      value={m.issuesDone}
                      unit="completed"
                      icon="✅"
                      status="default"
                    />
                  </div>
                </div>

                {/* Interpretation */}
                <div className="mb-3">
                  <InterpretationPanel insights={insights} />
                </div>

                {/* Next Steps */}
                <NextSteps steps={steps} />
              </>
            )}
          </>
        )}

        {/* ── MANAGER VIEW ── */}
        {view === "manager" && <ManagerView />}

      </div>

      {/* Footer */}
      <div className="text-center py-3 mt-4 text-muted" style={{ fontSize: "0.75rem" }}>
        DevPulse · Developer Productivity MVP · Built with React + Bootstrap
      </div>
    </div>
  );
}
