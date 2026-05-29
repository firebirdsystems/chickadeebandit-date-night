CREATE TABLE IF NOT EXISTS partner_config (
  member_id TEXT NOT NULL,
  household_id UUID NOT NULL DEFAULT current_setting('app.household_id', true)::uuid,
  partner_id TEXT NOT NULL,
  PRIMARY KEY (member_id, household_id)
);

CREATE TABLE IF NOT EXISTS date_ideas (
  id TEXT PRIMARY KEY,
  household_id UUID NOT NULL DEFAULT current_setting('app.household_id', true)::uuid,
  created_by TEXT NOT NULL,
  title TEXT NOT NULL,
  notes TEXT,
  tags TEXT,
  done_at TEXT,
  rating INTEGER,
  created_at TEXT NOT NULL
);
