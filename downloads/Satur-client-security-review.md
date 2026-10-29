# Satur Client security review

Review date: 2026-10-29

## Scope

Static review of the supplied `OpenPrestige-release.zip` source archive. The client and its build scripts were not executed. Microsoft Defender custom scans were run against both the original archive and the extracted inspection tree; both reported no threats.

The exhaustive pass read all 774 extracted files: 660 Java files, 12 build/config/script files, 2 JAR files, and the remaining resources/documentation.

Original archive SHA-256:

`5DD907AF202233DC1BD7B2A5ABD3B973AD01191EC3D6202251D4D714C2262757`

## Findings in the original archive

- No clear RAT/backdoor behavior was found in the Java source: no process spawning, shell execution, browser-cookie/token paths, startup persistence, webhook exfiltration, or native DLL payload.
- `social/AltManager.java` performed two HTTPS GET requests to official Mojang profile/session APIs. This was used by `EnemyFaker` to resolve a username and skin; it did not send a Minecraft access token.
- `ui/mc/Skid.java` displayed a splash screen, stored a yes/no preference in the system temp directory, and opened a hard-coded Discord invite only after a user click.
- `module/combat/AutoTotem.java` used `java.awt.Robot.mouseMove` for gameplay automation. This is invasive input automation, but not a RAT mechanism.
- `Overlay.java` and `EngineDev.java` contained developer command-file and screenshot facilities activated only through JVM properties. They did not execute arbitrary shell commands, but they increased the release attack surface.
- The source is heavily obfuscated/decompiled (single-letter names, reflection, and numeric constants), which reduces audit confidence even though the searched high-risk behaviors were absent.
- `reflect/ReflectionBase.java` in the original uses `sun.misc.Unsafe`, private lookups, and accessible reflection to modify Minecraft internals. This is a powerful capability and deserves continued review, but the file contains no network, shell, credential, or persistence logic.
- `module/misc/SelfDestruct.java` in the original clears the module list, disables client processing, disposes modules, and resets keybinds when enabled. It is removed from the hardened copy.

## Exhaustive scan results

- Java process/shell execution: no matches.
- Java native library loading (`System.load`, `System.loadLibrary`, JNI): no matches.
- Browser, cookie, password, access-token, webhook, startup, and registry paths: no matches.
- Outbound Java networking: only the two official Mojang profile/session requests in `social/AltManager.java`; the other URL matches are Discord/Vineflower documentation or the splash link.
- File access: local client configuration files, the splash preference, and developer command/screenshot files only.
- Bundled JARs: the Gradle wrapper and ImGui/native support dependencies; the custom ClassTransform injector and its bundled library were removed from this hardened copy. Static dependency/string checks found no shell, credential, webhook, or native-loader indicators.

## Module network audit

- Audited all 120 Java files under `module/` plus the `social/` package.
- No outbound HTTP/HTTPS, raw sockets, WebSockets, browser launches, process spawning, native loading, webhooks, or credential-access code was found.
- The only remaining network-related APIs are Minecraft client/server packet classes used by gameplay modules. Those communicate with the Minecraft server selected by the user and are not hidden third-party connections.

## Hardening changes in this copy

- Removed the splash/Discord/temp-preference startup path.
- Replaced the Mojang profile resolver with an offline no-op; username-based fake-skin lookup is disabled.
- Removed the `EngineDev` client entrypoint and source file.
- Disabled filesystem-driven UI command polling in `Overlay`.
- Removed the corresponding Gradle developer run flags from the client run configuration.
- Removed `module/misc/SelfDestruct.java` and its destructive behavior.
- Removed the self-destruct module entries from the live module manifests.
- Removed all `sun.misc.Unsafe` acquisition and raw-memory reads/writes. Field access now uses `VarHandle` or ordinary accessible reflection.
- Removed filesystem-driven UI commands, developer screenshot export, and debug dump hooks.
- Disabled clipboard reads and stopped reading host system properties such as the OS username.
- Removed the developer-only run argument and debug-row system-property hook.
- Removed the custom injector engine: 86 engine classes, 45 ClassTransform mixin classes, injector resource/config files, the bundled ClassTransform library, and its Gradle/Fabric integration.
- Removed the injector-dependent event statistics mixin and ClassTransform remapping calls from reflection helpers.
- Added a local-only `ModuleLoader` that instantiates the bundled API/module manifest at startup; it does not download code or contact an online module service.
- Removed the leftover no-op native API calls and renamed the mod to `Satur Client`.
- Added a compatibility API (`ClientApi`/`CustomModule`) and replaced the obfuscated event bus, setting holder, module lifecycle, and module manager implementations with local, typed equivalents while preserving the legacy method signatures used by existing modules.

## Remaining caution

This is a source-level review, not a proof of safety. Do not build or run unreviewed updates, and do not use a compiled client with a Microsoft/Minecraft account until its exact build artifacts and dependency hashes are verified. The custom API changes have not been compiled here because doing so would execute the supplied Gradle build logic and download dependencies. Removing `Unsafe` and the ClassTransform injector may reduce compatibility or break modules that depended on injected hooks; ordinary reflection remains because the client needs access to private game fields and methods. The build still includes third-party ImGui Java/native dependencies; verify their hashes or build in an isolated environment before trusting a compiled JAR.
