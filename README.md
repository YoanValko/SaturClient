# Satur Client

A local-only custom client built from the reviewed source, GUI, API, and bundled modules.

## Website

Open the homepage at [index.html](index.html), or enable GitHub Pages from Settings → Pages and deploy the main branch from the repository root.

## Included

- Reviewed source archive in downloads/
- Custom local API and module-loader notes
- Build instructions for JDK 21 and Gradle
- Minecraft/Fabric setup guidance
- Windows Sandbox templates for isolated testing
- Security review and FAQ

## Build

Read [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) first, then follow [docs/BUILDING.md](docs/BUILDING.md). Build only from a disposable sandbox or VM and inspect the source before compiling.

## Safe testing

Use [sandbox/README.md](sandbox/README.md). Do not use a Microsoft account, your normal .minecraft directory, browser data, Discord tokens, or other personal credentials during testing. The distributed source is not a verified compiled JAR.

## Important limitations

The injector, native API, online loaders, self-destruct behavior, and outbound telemetry paths were removed from the custom source package. Runtime behavior and module compatibility still require independent testing.
