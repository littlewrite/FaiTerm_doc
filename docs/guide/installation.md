# Installation

## Windows

### Install Manually

- For 64-bit installation package, please download `Setup windows_x64 (.exe)`, and double-click to install after downloading.
- For ARM64 installation package, please download `Setup windows_arm64 (.exe)`, and double-click to install after downloading.

## macOS

### Install Manually

- If you are using a Mac with M1/M2/M3 chip, please download `mac_arm64 (.dmg)`
- If you are using a Mac with Intel chip, please download `mac_intel (.dmg)`

After downloading, open the `.dmg` file and drag `FaiTerm.app` into the `Applications` folder.

::: danger Troubleshooting

- Since the app is not signed, shows "The developer cannot be verified":

Click the `Cancel` button, then go to `Settings -> Privacy & Security` page, click the `Still Open` button, and then click the `Open` button in the pop-up window.

- If you get a pop-up such as "Broken files" after installation, please open `Terminal.app` and execute the following command:

```bash
sudo xattr -d com.apple.quarantine /Applications/FaiTerm.app
```

Then try reopen `FaiTerm`.

- Additionally, the `dmg` installation package also includes a `Repair` script, which you can double-click to execute and enter the administrator password to quickly fix the above issues.

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
