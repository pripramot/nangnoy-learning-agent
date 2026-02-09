---
name: docker-install
description: Detailed guide for installing Docker Desktop on Windows, covering both Online (standard) and Offline (air-gapped) scenarios.
---

# Docker Installation Skill

This skill provides step-by-step instructions for installing Docker Desktop, ensuring "Nangnoy" can assist in setting up the environment even without internet access.

## 1. Prerequisites

- **OS**: Windows 10/11 (64-bit)
- **Virtualization**: BIOS Virtualization (VT-x/AMD-V) must be ENABLED.
- **WSL 2**: Windows Subsystem for Linux 2 must be enabled (recommended over Hyper-V).

## 2. Installation Methods

### A. Online Installation (Standard)

1. **Download**: Get `Docker Desktop Installer.exe` from [Docker Hub](https://www.docker.com/products/docker-desktop/).
2. **Run Installer**: Double-click the `.exe` file.
3. **Configuration**:
    - Check "Use WSL 2 instead of Hyper-V" (Recommended).
    - check "Add shortcut to desktop".
4. **Finish**: Click "Close" and restart your computer if prompted.
5. **Verify**: Open PowerShell and run `docker --version`.

### B. Offline Installation (Air-Gapped / Restricted)

*(Use this when the target machine has no internet)*

1. **Preparation (On Internet-connected machine)**:
    - Download `Docker Desktop Installer.exe`.
    - Save to USB drive or secure transfer medium.
    - *Optional*: Download WSL 2 kernel update package (`wsl_update_x64.msi`) if the target machine hasn't updated WSL.

2. **Transfer**: Copy the installer to the target offline machine (e.g., `C:\Users\Public\Downloads`).

3. **Install via PowerShell (Silent/Admin)**:

    ```powershell
    # Run as Administrator
    Start-Process -FilePath "C:\Path\To\Docker Desktop Installer.exe" -ArgumentList "install" -Wait
    ```

4. **Post-Install (Offline)**:
    - Docker may try to fetch updates. Disable "Automatically check for updates" in Settings > General.
    - If WSL 2 complains about kernel, install the `wsl_update_x64.msi` manually.

## 3. Post-Installation Config (Nangnoy Recommended)

- **Resources**: Set memory limit to 4GB+ for Supabase.
- **File Sharing**: Ensure `C:\Users` is added to "File Sharing" resources (if using Hyper-V).
- **Service Check**:

    ```powershell
    Get-Service com.docker.service
    ```

## 4. Troubleshooting

- **"Docker Engine stopped"**: Run Docker Desktop as Administrator.
- **WSL 2 Error**: Run `wsl --update` (if online) or install the offline kernel update.
