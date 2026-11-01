# Windows Sandbox setup

Windows Sandbox is disposable. Close it when finished and everything inside is deleted.

1. Enable **Windows Sandbox** from **Turn Windows features on or off**.
2. Place the downloaded source ZIP in `C:\SaturClientSandbox\incoming` on the host.
3. For the normal safe inspection profile, open `SaturClient-readonly-input.wsb`.
4. For Minecraft's 3D/GPU test, open **`SaturClient-networked-readonly-input-gpu.wsb` exactly**. Do not open `SaturClient-networked-readonly-input.wsb`; that profile deliberately has GPU disabled.
5. Inside the sandbox, use the copy under `C:\TestInput`; the host folder is read-only.
6. Keep networking disabled unless the test specifically needs it, and do not sign in to any account.
7. Close the sandbox when testing is complete.

`Satur-strict.wsb` has no host folder mapping. Use it for tests that do not need a file from the host.

The GPU profile already contains `<VGpu>Enable</VGpu>`. If `dxdiag` or Minecraft still reports no GPU, the issue is on the host: Windows Sandbox needs a supported Hyper-V/WDDM GPU driver and virtualization enabled. Update the host graphics driver, reboot, and try the GPU profile again. If the host cannot expose vGPU, use the non-GPU profile for source inspection; do not weaken the sandbox just to force 3D acceleration.
