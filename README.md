<div align="center">

<img src="assets/saturn-client-logo.svg" alt="Saturn Client" width="620">

# Saturn Client

### A black-hole-inspired Fabric client for Minecraft 1.21.11

[![Alpha](https://img.shields.io/badge/status-alpha-9b87ff?style=for-the-badge)](https://github.com/YoanValko/SaturClient/releases)
[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.11-4caf50?style=for-the-badge)](https://www.minecraft.net/)
[![Fabric](https://img.shields.io/badge/loader-Fabric-dbd4ff?style=for-the-badge)](https://fabricmc.net/)
[![Java](https://img.shields.io/badge/Java-21-e76f00?style=for-the-badge)](https://adoptium.net/)

Local-first UI, modular features, and a native Java menu built for isolated testing.

[Download Alpha](https://github.com/YoanValko/SaturClient/releases/latest) · [Open the website](https://yoanvalko.github.io/SaturClient/)

</div>

## Alpha release

The Alpha release is the recommended build for early testing. It includes the Saturn branding, native GUI entrypoint, local module bridge, and the cleaned source package.

> This is an experimental prerelease. Use a separate Minecraft profile and do not sign in to personal accounts while testing.

## What is included

- Native Minecraft-rendered GUI with Saturn Client branding.
- Local API/module bridge with no online module loader.
- Gradle wrapper and JDK 21 build instructions.
- Source archive, verification scripts, and sandbox profiles.
- Black-hole logo assets in [`assets/`](assets/).

## Build from source

1. Install a JDK 21 distribution such as Temurin 21.
2. Extract the Alpha source archive inside a disposable test environment.
3. Run `gradlew-safe.bat build --no-daemon` from the source directory.
4. Start the client from the disposable test profile.

Read [`docs/BUILDING.md`](docs/BUILDING.md) and [`sandbox/README.md`](sandbox/README.md) first.

## Repository layout

| Folder | Purpose |
| --- | --- |
| `assets/` | Saturn Client logo and square mark |
| `downloads/` | Alpha/Beta artifacts and build notes |
| `source/` | Source launchers and build entrypoints |
| `sandbox/` | Disposable Windows Sandbox profiles |
| `docs/` | Build, setup, verification, and release notes |

## License and attribution

This repository is an experimental rebrand and cleanup workspace. Review the included source and dependency notices before redistribution.
