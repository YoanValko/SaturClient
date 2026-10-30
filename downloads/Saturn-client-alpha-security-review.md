# Saturn Client Alpha — review notes

Review date: 2026-10-30  
Source archive: `kuro-stock-source-1.21.11.zip`  
Input SHA-256: `C86583FE14C72F01EE0D29177F2FA5D9FD4C18A452C6DC64871B93016DC38294`

## Findings

- 321 archive entries were checked for absolute and traversal paths; none were found.
- The archive contained Java/resources only for the client project; no `.exe`, `.dll`, `.bat`, `.cmd`, `.ps1`, `.vbs`, `.js`, `.jar`, `.class`, `.so`, or `.dylib` payloads were found.
- Static review found no `ProcessBuilder`, `Runtime.exec`, raw Java network clients, sockets, webhooks, browser/cookie/token access, native loading, persistence, or self-delete patterns.
- `Runtime.addShutdownHook` is used by `ConfigManager` to save the client’s local JSON configuration on normal shutdown. `Runtime.getRuntime()` in `Performance` only reads JVM memory totals for the HUD.
- The rebrand changes the mod/resource ID to `saturn`, updates resource namespaces, and preserves the internal `dev.kuro` package namespace to avoid broad compatibility risk.

## Build/runtime evidence

- `gradle build --no-daemon` completed successfully with Java 21.
- `gradle runClient --no-daemon` reached Minecraft’s render/resource stage with `saturn 1.0.0-alpha` loaded.
- The first smoke run exposed stale `kuro:` resource references; those were corrected and the build was repeated. The second run no longer reported stale font/sound namespace errors.
- Remaining dev-run warnings concern missing development refmap, WMI queries, online service authorization, and shader sampler declarations. They are not proof of malware and should be investigated separately if they affect functionality.

## Limits

This is not a guarantee that the client is malware-free. Build tools and dependencies are external inputs, and Minecraft itself normally communicates with Mojang/Microsoft services. Use a disposable profile, keep networking disabled while inspecting, never provide real credentials or tokens, and compare the published JAR hash before running it.


## Current packaged Alpha source archive

The downloadable Saturn Alpha source archive includes gradlew, gradlew.bat, gradle/wrapper/, and the local verifier under tools/.

- Packaged archive SHA-256: 22CA881E6ECDFD1EB6DF8F66AE82660777587700EC7AF3236DC3FB7D8AAD753F
- Wrapper build: BUILD SUCCESSFUL with Java 21.
