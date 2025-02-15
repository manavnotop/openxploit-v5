#!/bin/sh

if [ -z "$GITHUB_REPO" ]; then
  echo "Error: GITHUB_REPO is not set."
  exit 1
fi

cd /app || exit 1

# Clone the repository
git clone --depth=1 "$GITHUB_REPO" app_src || exit 1

cd app_src || exit 1

# Install dependencies and build
pnpm install || exit 1
pnpm run build || exit 1

# Start the application
exec pnpm start 2>&1