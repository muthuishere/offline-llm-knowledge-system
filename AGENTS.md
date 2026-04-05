# AGENTS.md

## Project Overview

Two Vite + React apps:

| App    | Directory    | Dev URL                     |
|--------|--------------|-----------------------------|
| Export | `apps/export`| http://localhost:5198       |
| Import | `apps/import`| http://localhost:5199       |

---

## Running Dev Servers

### Option 1 — Current terminal (with tee logging)

Logs are written to `logs/` so agents and humans can both read them.

```bash
mkdir -p logs

# Run both in parallel (background), each piped to tee
(cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) &
(cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) &

wait
```

Or via task (one-liner):

```bash
mkdir -p logs
task export:dev 2>&1 | tee logs/export-dev.log &
task import:dev 2>&1 | tee logs/import-dev.log &
```

### Option 2 — New Ghostty window

```bash
mkdir -p logs
open -a Ghostty --args -e "bash -c 'cd $(pwd) && (cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) & (cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) & wait'"
```

Or open two separate Ghostty tabs:

```bash
mkdir -p logs
/Applications/Ghostty.app/Contents/MacOS/ghostty --command="bash -c 'cd $(pwd)/apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log; exec bash'" &
/Applications/Ghostty.app/Contents/MacOS/ghostty --command="bash -c 'cd $(pwd)/apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log; exec bash'" &
```

### Option 3 — macOS Terminal.app

```bash
mkdir -p logs
osascript -e "tell application \"Terminal\"
  activate
  do script \"cd '$(pwd)' && (cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) & (cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) & wait\"
end tell"
```

---

## Reading Logs (for agents)

```bash
# Tail both logs
tail -f logs/export-dev.log
tail -f logs/import-dev.log

# Tail both at once
tail -f logs/export-dev.log logs/import-dev.log

# Check for errors
grep -i error logs/export-dev.log
grep -i error logs/import-dev.log
```

Log files persist at:
- `logs/export-dev.log` — Export app (port 5198)
- `logs/import-dev.log` — Import app (port 5199)

---

## Quick Start Script

```bash
./scripts/dev.sh
```

See `scripts/dev.sh` for the canonical way to start both servers with logging.
