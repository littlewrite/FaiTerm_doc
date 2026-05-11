# Installation

## Windows

### Install Manually

- For 64-bit installation package, please download `Setup windows_x64 (.exe)`, and double-click to install after downloading.
- For ARM64 installation package, please download `Setup windows_arm64 (.exe)`, and double-click to install after downloading.

## macOS

### Install Manually

After downloading, open the `.dmg` file and drag `FaiTerm.app` into the `Applications` folder.

::: danger Troubleshooting

- Since the app is not yet Apple-signed, macOS may show one of the following prompts:
  - `"FaiTerm" is damaged and can't be opened`
  - `Cannot open "FaiTerm" because the developer cannot be verified`

Use the following steps:

1. Allow apps from "Anywhere" (skip if this option is not shown on your system)

```bash
sudo spctl --master-disable
```

Then go to `System Settings -> Privacy & Security` and confirm `Anywhere` is selected in the Security section.

2. Remove the app quarantine attribute (recommended)

```bash
sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app
```

If you are not sure about the app path, drag the app icon into Terminal after the command to auto-fill the full path.

3. Extra step for macOS Ventura and later

The first launch may still be blocked. Go to `System Settings -> Privacy & Security`, click `Open Anyway` in the Security section, then click `Open` in the dialog. Usually this is only needed once.

- Additionally, the `dmg` package includes a `Repair` script. You can double-click it and enter the admin password to quickly fix the same issues.

:::

## Linux

### Install Manually

- For `deb` installation package, download `linux_amd64.deb (.deb)`
- For `AppImage` package, download `linux_amd64.AppImage (.AppImage)`

Install `deb` package using `apt-get`:
```bash
sudo apt-get install ./faiterm_{version}_linux_amd64.deb
```

Use `AppImage`:
```bash
chmod u+x faiterm_{version}_linux_amd64.AppImage
./faiterm_{version}_linux_amd64.AppImage
```

## Android

### Install Manually

- For the ARM64 package, download `android_arm64.apk (.apk)`
- For the x86 package, download `android_x86_64.apk (.apk)`
