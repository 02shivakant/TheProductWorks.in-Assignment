export function getInterpretation(m) {
  const insights = [];

  if (m.avgCycleTime > 5) {
    insights.push("⏳ Cycle time is high — tasks are staying active too long. Tickets may be too large or there are hidden blockers slowing progress.");
  } else if (m.avgCycleTime >= 4) {
    insights.push("⏱ Cycle time is moderate — work is moving, but there's room to tighten the loop between starting and finishing tasks.");
  } else {
    insights.push("✅ Cycle time looks healthy — tasks are moving from In Progress to Done efficiently.");
  }

  if (m.avgLeadTime > 4) {
    insights.push("🚦 Lead time is elevated — changes are taking longer than ideal to reach production. This may point to review delays or a slow CI/CD pipeline.");
  } else if (m.avgLeadTime >= 3) {
    insights.push("📦 Lead time is acceptable but watch for review queue buildup — a small delay now can compound quickly.");
  } else {
    insights.push("🚀 Lead time is solid — changes are reaching production at a healthy pace.");
  }

  if (m.bugRate >= 0.5) {
    insights.push("🐛 Bug rate is high — roughly 1 in 2 completed items had a bug escape to production. Speed may be outpacing quality checks.");
  } else if (m.bugRate > 0) {
    insights.push("⚠️ Some bugs escaped to production this month. Worth reviewing if there's a pattern in where these originate.");
  } else {
    insights.push("🛡 No escaped bugs this month — quality looks strong.");
  }

  return insights;
}

export function getNextSteps(m) {
  const steps = [];

  if (m.avgCycleTime > 5) {
    steps.push("Break large tickets into smaller sub-tasks (aim for 1–3 day chunks) so work moves faster through In Progress → Done.");
  }

  if (m.avgLeadTime > 4) {
    steps.push("Check if PRs are sitting in the review queue — pair with a reviewer early or reduce PR size to get faster feedback.");
  }

  if (m.bugRate >= 0.5) {
    steps.push("Add a pre-merge checklist or one focused test per PR — especially for edge cases. Small quality gates now prevent costly fixes later.");
    steps.push("Review the root cause of recent bugs: are they test gaps or edge cases? Target whichever is more common first.");
  }

  if (m.avgCycleTime > 5 && m.avgLeadTime > 4) {
    steps.push("Consider a short team sync to surface blockers early — slow cycle AND lead time often means work is getting stuck at handoff points.");
  }

  if (steps.length === 0) {
    steps.push("Metrics look healthy this month — great work! Consider doing a code review for a teammate or documenting a tricky pattern you solved.");
    steps.push("Keep PR sizes lean to maintain your lead time — it's easier to stay fast than to recover speed once it drops.");
  }

  return steps.slice(0, 3);
}

export function getPatternBadge(pattern) {
  switch (pattern) {
    case "Healthy flow":  return { cls: "badge bg-success",   icon: "✅" };
    case "Quality watch": return { cls: "badge bg-warning text-dark", icon: "⚠️" };
    case "Needs review":  return { cls: "badge bg-danger",    icon: "🔴" };
    default:              return { cls: "badge bg-secondary", icon: "ℹ️" };
  }
}

export function getSignalBadge(signal) {
  switch (signal) {
    case "Healthy flow":       return { cls: "badge bg-success",   icon: "✅" };
    case "Watch bottlenecks":  return { cls: "badge bg-warning text-dark", icon: "⚠️" };
    case "Needs review":       return { cls: "badge bg-danger",    icon: "🔴" };
    default:                   return { cls: "badge bg-secondary", icon: "ℹ️" };
  }
}

export function getMetricStatus(value, thresholdWarn, thresholdBad) {
  if (value >= thresholdBad) return "danger";
  if (value >= thresholdWarn) return "warning";
  return "success";
}
