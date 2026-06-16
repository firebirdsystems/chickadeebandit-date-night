CREATE TABLE IF NOT EXISTS app_date_night_planner__partner_config (
  member_id TEXT NOT NULL,
  partner_id TEXT NOT NULL,
  PRIMARY KEY (member_id)
);

CREATE TABLE IF NOT EXISTS app_date_night_planner__date_ideas (
  id TEXT PRIMARY KEY,
  created_by TEXT NOT NULL,
  title TEXT NOT NULL,
  notes TEXT,
  tags TEXT,
  done_at TEXT,
  rating INTEGER,
  created_at TEXT NOT NULL
);
