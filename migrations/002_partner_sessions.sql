ALTER TABLE app_date_night_planner__partner_config ADD COLUMN session_id TEXT;
ALTER TABLE app_date_night_planner__date_ideas ADD COLUMN session_id TEXT;

CREATE INDEX IF NOT EXISTS app_date_night_planner__idx_ideas_session_created
  ON app_date_night_planner__date_ideas (session_id, created_at DESC);
