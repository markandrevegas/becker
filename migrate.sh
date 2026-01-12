#!/bin/bash

# 1. Create the new app directory
mkdir -p app

# 2. List of folders/files to move into /app
TARGETS=(
  "assets"
  "components"
  "composables"
  "layouts"
  "pages"
  "app.vue"
  "error.vue"
)

echo "Starting migration to Nuxt 4 structure..."

for item in "${TARGETS[@]}"; do
  if [ -e "$item" ]; then
    echo "Moving $item to app/..."
    mv "$item" app/
  else
    echo "Skipping $item (not found)"
  fi
done

# 3. Cleanup and regenerate types
echo "Cleaning up .nuxt and regenerating types..."
rm -rf .nuxt
npx nuxi prepare

echo "Migration complete! Please check your imports."