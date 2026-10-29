# Satur Client getting started

This page explains how to install the official Minecraft launcher, create a Fabric profile, and test Satur Client in an isolated environment.

## 1. Install Minecraft Java Edition

Download the official Minecraft Launcher from [Minecraft.net](https://www.minecraft.net/download/) or the Microsoft Store. Sign in only in your normal Minecraft profile. Do not sign in inside Windows Sandbox while testing untrusted code.

Satur Client targets Minecraft Java Edition `1.21.11` as configured in the source. Create and launch that exact version once before installing Fabric.

## 2. Install Fabric

Use the official [Fabric Windows installation guide](https://docs.fabricmc.net/players/installing-fabric/windows):

1. Download the Windows Fabric Installer from the official Fabric site.
2. Close Minecraft and the launcher.
3. Select Minecraft `1.21.11`, keep **Create Profile** enabled, and install.
4. Open the launcher, select the Fabric profile, and launch once.

## 3. Use the supplied sandbox configuration

Windows Sandbox is disposable. Use [`Satur-strict.wsb`](../sandbox/Satur-strict.wsb) for source inspection. It disables networking, clipboard redirection, audio/video input, printer redirection, and host-folder mapping.

If you need to bring in the ZIP, use [`Satur-readonly-input.wsb`](../sandbox/Satur-readonly-input.wsb). Create this host folder first:

```text
C:\SaturClientSandbox\incoming
```

Put the downloaded source ZIP there. The folder appears inside the sandbox as `C:\Incoming` and is read-only.

## 4. Important safety rules

- Do not use your normal `.minecraft` directory in testing.
- Do not copy Microsoft, Minecraft, browser, or Discord tokens into the sandbox.
- Keep networking disabled while inspecting or running the client.
- Close Windows Sandbox when finished; its contents are deleted.
- Treat future updates and third-party dependencies as untrusted until reviewed.

## 5. What is provided

The download contains source code and documentation, not a verified compiled JAR. The GUI and bundled module manifest are included, but removing the original injector may leave some modules needing compatibility work.
