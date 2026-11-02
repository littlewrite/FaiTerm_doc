# Installation

## Windows

### Install Manually

- Download `faiterm-{version}-windows-setup.exe` from the releases page and run it.

Windows local terminals can run a normal shell or a WSL distribution. See [Connections and Hosts](/guide/ssh#local-terminal-and-wsl) for setup and path rules.

## macOS

### Install Manually

After downloading, open the `.dmg` file and drag `FaiTerm.app` into the `Applications` folder.

::: danger Troubleshooting

- Since the app is not yet Apple-signed, macOS may show one of the following prompts:
- `"FaiTerm" is damaged and can't be opened`
- `"FaiTerm" cannot be opened because the developer cannot be verified`

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

- For `deb`, download `faiterm-{version}-linux-amd64.deb`
- For `AppImage`, download `faiterm-{version}-linux-amd64.AppImage`

Install `deb` package using `apt-get`:
```bash
sudo apt-get install ./faiterm-{version}-linux-amd64.deb
```

Use `AppImage`:
```bash
chmod u+x faiterm-{version}-linux-amd64.AppImage
./faiterm-{version}-linux-amd64.AppImage
```

## Android

### Install Manually

- For the ARM64 package, download `faiterm-{version}-android-arm64.apk`.
