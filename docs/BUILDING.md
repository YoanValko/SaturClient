# Building Satur Client

The project is a Fabric Gradle project targeting Minecraft `1.21.11` and Java `21`.

## Prerequisites

- JDK 21, available as `java` and `javac` in the build environment.
- A disposable VM or isolated test machine.
- Enough disk space for Gradle and Fabric dependencies.

For development, use [IntelliJ IDEA](https://www.jetbrains.com/idea/) or another Java IDE with Gradle support. Fabric's [developer guides](https://docs.fabricmc.net/develop/) explain the general project workflow.

## Build from source

1. Extract `Satur-client-source.zip` into a disposable working directory.
2. Open a terminal in the extracted project directory.
3. Confirm Java 21:

```powershell
java -version
javac -version
```

4. Build the project:

```powershell
.\gradlew.bat build
```

The output, if the build succeeds, is under `build\libs\`. The expected archive name begins with `satur-client-`.

The first build may download Gradle and third-party dependencies. Do not run the build on your everyday Windows installation. Use a disposable VM, keep accounts out of it, and review the dependency list before trusting the result.

## Run the development client

The project includes a development launcher script:

```powershell
.\run.bat
```

This has not been validated in this review. If it fails, inspect the generated log and remember that the injector was intentionally removed; modules that depended on injector-only hooks may need adapters.

## Install a compiled JAR for testing

Only after reviewing the build output, copy the resulting Satur Client JAR into the `mods` folder for the matching Fabric `1.21.11` profile. Install the matching Fabric API version required by the build. Test in a fresh, disposable Minecraft instance with networking disabled whenever possible.

No compiled JAR is distributed by this site.
