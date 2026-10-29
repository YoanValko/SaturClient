# Satur Client FAQ

## Is this the original OpenPrestige client?

No. Satur Client is a hardened source copy with a local custom API and the original injector, native loader, remote loaders, self-destruct behavior, and several developer hooks removed.

## Does it have the same GUI?

It reuses the existing GUI code, assets, layout, and module manifest. The appearance should be very similar, but runtime compatibility is not guaranteed until the project is compiled and tested.

## Are all modules guaranteed to work?

No. The custom API preserves compatibility signatures, but modules that depended on the removed injector or private game hooks may need individual fixes.

## Is it guaranteed malware-free?

No static review can prove that. The source was scanned and the known high-risk paths were removed, but third-party dependencies, reflection, native GUI dependencies, and future changes still require caution.

## Why is there no JAR download?

The source has not been compiled or run in Minecraft as part of the review. Publishing only the reviewed source avoids presenting an unverified binary as trusted.
