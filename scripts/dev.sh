#!/usr/bin/env bash
# Start both dev servers with tee logging.
# Logs: logs/export-dev.log and logs/import-dev.log

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mkdir -p logs

TERMINAL="${1:-inline}"  # inline | ghostty | terminal

case "$TERMINAL" in
  ghostty)
    /Applications/Ghostty.app/Contents/MacOS/ghostty \
      --command="bash -c 'cd \"$ROOT/apps/export\" && npm run dev 2>&1 | tee \"$ROOT/logs/export-dev.log\"; exec bash'" &
    /Applications/Ghostty.app/Contents/MacOS/ghostty \
      --command="bash -c 'cd \"$ROOT/apps/import\" && npm run dev 2>&1 | tee \"$ROOT/logs/import-dev.log\"; exec bash'" &
    echo "Opened two Ghostty windows."
    echo "Logs: logs/export-dev.log | logs/import-dev.log"
    ;;

  terminal)
    osascript -e "tell application \"Terminal\"
      activate
      do script \"cd '$ROOT' && (cd apps/export && npm run dev 2>&1 | tee ../../logs/export-dev.log) & (cd apps/import && npm run dev 2>&1 | tee ../../logs/import-dev.log) & wait\"
    end tell"
    echo "Opened Terminal.app window."
    echo "Logs: logs/export-dev.log | logs/import-dev.log"
    ;;

  *)
    echo "Starting both dev servers (inline with tee logging)..."
    echo "  Export → http://localhost:5198  (logs/export-dev.log)"
    echo "  Import → http://localhost:5199  (logs/import-dev.log)"
    echo ""
    (cd apps/export && npm run dev 2>&1 | tee "$ROOT/logs/export-dev.log") &
    EXPORT_PID=$!
    (cd apps/import && npm run dev 2>&1 | tee "$ROOT/logs/import-dev.log") &
    IMPORT_PID=$!

    trap "kill $EXPORT_PID $IMPORT_PID 2>/dev/null; exit" INT TERM

    wait
    ;;
esac
