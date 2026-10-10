#!/usr/bin/env bash
# Copy the theme into a vault for local testing:  scripts/install-to-vault.sh /path/to/vault
set -euo pipefail
vault="${1:?usage: install-to-vault.sh /path/to/vault}"
target="$vault/.obsidian/themes/Ignorance"
mkdir -p "$target"
cp "$(dirname "$0")/../theme.css" "$(dirname "$0")/../manifest.json" "$target/"
echo "installed into $target"
