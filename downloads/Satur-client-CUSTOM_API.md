# Satur Client Custom API

Satur Client keeps the existing module classes compatible while exposing a safer API for new modules.

## Public entry points

- `dev.zprestige.prestige.api.ClientApi` exposes the Minecraft client, event bus, module manager, module lookup, and safe enable/disable helpers.
- `dev.zprestige.prestige.api.CustomModule` is the base class for new modules.
- `dev.zprestige.prestige.client.ModuleLoader` loads the packaged module manifest locally at startup.

The loader reads only `/prestige_ui/manifest_live.json`. It does not download classes, contact a remote service, execute a process, load native code, or use the removed injector.

## Example module

```java
public final class ExampleModule extends CustomModule {
    private final BoolSetting active = bool("Active", true);

    public ExampleModule() {
        super("Example", "Local example module", Category.Misc);
    }

    @Subscribe
    private void onTick(TickEvent24 event) {
        if (active.getValue()) {
            // module logic
        }
    }
}
```

Existing modules still use the compatibility signatures because they came from a decompiled source tree. They can be migrated one at a time without changing the GUI or module manifest format. The legacy Java package names remain unchanged for compatibility.

## Current limitation

The source has not been compiled or run in Minecraft. Modules that directly depend on Minecraft-private names or removed injector hooks still need individual compatibility adapters. The API makes those failures isolated and diagnosable; it cannot reconstruct behavior that was only supplied by the removed injector.
