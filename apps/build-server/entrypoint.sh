#!/bin/sh

if [ -z "$GITHUB_REPO" ]; then
  echo "Error: GITHUB_REPO is not set."
  exit 1
fi

cd /app

# Clone the repository
git clone --depth=1 "$GITHUB_REPO" app_src

cd app_src

# Install dependencies and build
pnpm install
pnpm run build

# Start the application
exec pnpm start