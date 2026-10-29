# Source layout

The canonical reviewed source bundle is available here:

[Download Satur Client source](../downloads/Satur-client-source.zip)

The archive contains the organized project tree, including:

- `src/main/java/` — Java source, API, GUI, and modules
- `gradle/`, `build.gradle`, `settings.gradle` — Gradle build setup
- `docs/` — mapping, notes, and source documentation
- `check/` — review and validation helpers
- `SECURITY_REVIEW.md` — security limitations and test guidance

The website files stay at the repository root. Supporting documentation is in `docs/`, sandbox templates are in `sandbox/`, and downloadable artifacts are in `downloads/`.

This is source code, not a verified compiled JAR. Build and test only in Windows Sandbox or a disposable VM, offline first, without a Microsoft account, personal Minecraft directory, browser data, Discord tokens, or other credentials.

See [BUILDING.md](../docs/BUILDING.md) for compilation instructions and [sandbox/README.md](../sandbox/README.md) for isolated testing.
