# Windows Sandbox setup

Windows Sandbox is disposable. Close it when finished and everything inside is deleted.

1. Enable **Windows Sandbox** from **Turn Windows features on or off**.
2. Place the downloaded source ZIP in `C:\SaturClientSandbox\incoming` on the host.
3. Open `Satur-readonly-input.wsb`.
4. Inside the sandbox, use the copy under `C:\Incoming`; the host folder is read-only.
5. Keep networking disabled and do not sign in to any account.
6. Close the sandbox when testing is complete.

`Satur-strict.wsb` has no host folder mapping. Use it for tests that do not need a file from the host.

If Minecraft requires 3D acceleration, make a separate disposable test profile and change `<VGpu>Disable</VGpu>` to `<VGpu>Enable</VGpu>`. Virtualized GPU support can increase the attack surface, so keep it disabled for static/source inspection.
