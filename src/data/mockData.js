export const developers = [
  { id: "DEV-001", name: "Ava Chen",    manager: "Rina Kapoor", team: "Payments API",  level: "SDE2", service: "backend" },
  { id: "DEV-002", name: "Noah Patel",  manager: "Rina Kapoor", team: "Payments API",  level: "SDE1", service: "backend" },
  { id: "DEV-006", name: "Ishan Mehta", manager: "Rina Kapoor", team: "Payments API",  level: "SDE3", service: "backend" },
  { id: "DEV-003", name: "Mia Lopez",   manager: "Samir Gupta", team: "Checkout Web",  level: "SDE1", service: "frontend" },
  { id: "DEV-004", name: "Lucas Reed",  manager: "Samir Gupta", team: "Checkout Web",  level: "SDE2", service: "frontend" },
  { id: "DEV-008", name: "Zara Khan",   manager: "Samir Gupta", team: "Checkout Web",  level: "SDE1", service: "frontend" },
  { id: "DEV-005", name: "Emma Roy",    manager: "Priya Nair",  team: "Mobile Growth", level: "SDE1", service: "mobile" },
  { id: "DEV-007", name: "Owen Brooks", manager: "Priya Nair",  team: "Mobile Growth", level: "SDE2", service: "mobile" },
];

export const metrics = [
  { devId:"DEV-001", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.95, avgLeadTime:2.40, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-001", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.90, avgLeadTime:3.35, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-002", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:5.90, avgLeadTime:4.30, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-002", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:5.40, avgLeadTime:3.75, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-006", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.75, avgLeadTime:2.35, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-006", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:3.70, avgLeadTime:2.35, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-003", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:4.05, avgLeadTime:3.85, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-003", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.05, avgLeadTime:3.55, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-004", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.85, avgLeadTime:2.10, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-004", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.55, avgLeadTime:2.90, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-008", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:3.80, avgLeadTime:3.15, bugRate:0,   pattern:"Healthy flow" },
  { devId:"DEV-008", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:3.85, avgLeadTime:3.40, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-005", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:5.95, avgLeadTime:4.95, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-005", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:6.50, avgLeadTime:4.70, bugRate:0,   pattern:"Needs review" },
  { devId:"DEV-007", month:"2026-03", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:1, avgCycleTime:4.55, avgLeadTime:4.30, bugRate:0.5, pattern:"Quality watch" },
  { devId:"DEV-007", month:"2026-04", issuesDone:2, mergedPRs:2, deployments:2, escapedBugs:0, avgCycleTime:4.80, avgLeadTime:3.65, bugRate:0,   pattern:"Healthy flow" },
];

export const managerSummary = [
  { managerId:"MGR-01", manager:"Rina Kapoor", month:"2026-03", teamSize:3, avgLeadTime:3.02, avgCycleTime:4.53, avgBugRate:0,    signal:"Healthy flow" },
  { managerId:"MGR-01", manager:"Rina Kapoor", month:"2026-04", teamSize:3, avgLeadTime:3.15, avgCycleTime:4.33, avgBugRate:0.33, signal:"Watch bottlenecks" },
  { managerId:"MGR-02", manager:"Samir Gupta", month:"2026-03", teamSize:3, avgLeadTime:3.03, avgCycleTime:3.90, avgBugRate:0.17, signal:"Watch bottlenecks" },
  { managerId:"MGR-02", manager:"Samir Gupta", month:"2026-04", teamSize:3, avgLeadTime:3.27, avgCycleTime:3.48, avgBugRate:0.17, signal:"Healthy flow" },
  { managerId:"MGR-03", manager:"Priya Nair",  month:"2026-03", teamSize:2, avgLeadTime:4.63, avgCycleTime:5.25, avgBugRate:0.50, signal:"Watch bottlenecks" },
  { managerId:"MGR-03", manager:"Priya Nair",  month:"2026-04", teamSize:2, avgLeadTime:4.18, avgCycleTime:5.65, avgBugRate:0,    signal:"Needs review" },
];

export const MONTHS = ["2026-03", "2026-04"];
export const MONTH_LABELS = { "2026-03": "March 2026", "2026-04": "April 2026" };
