#!/bin/sh
set -e

echo "Starting Next.js app: $TARGET"
exec node "apps/$TARGET/server.js"