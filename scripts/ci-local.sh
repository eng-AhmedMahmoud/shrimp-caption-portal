#!/usr/bin/env bash
# The merge gate, step for step what Jenkins runs (Jenkinsfile). Run it from
# anywhere: bash scripts/ci-local.sh
# No lint step yet: ESLint fails on main (react-hooks/set-state-in-effect in
# components/LoadingScreen.tsx). Add `npm run lint` here once it passes.
set -euo pipefail
cd "$(dirname "$0")/.."

npm ci --no-audit --no-fund
npm run build    # next build = typecheck + static export to out/
echo "ci-local: all steps passed"
