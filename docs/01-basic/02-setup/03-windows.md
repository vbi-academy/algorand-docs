-   [Yêu cầu](#yêu-cầu)
-   [Cài đặt Python3 sử dụng WinGet](#cài-đặt-python3-sử-dụng-winget)

# Yêu cầu

-   [Git](https://github.com/git-guides/install-git#install-git-on-windows)
    (or winget install git.git)
-   [Docker](https://docs.docker.com/desktop/install/windows-install/)
    (or winget install docker.dockerdesktop)

# Cài đặt Python3 sử dụng WinGet

-   Cài đặt Python: `winget install python.python.3.12`

-   Cài đặt pipx

    ``` bash
    pip install --user pipx
    python -m pipx ensurepath
    ```

-   Cài đặt algokit

``` bash
pipx install algokit
```

# Start a LocalNet

``` bash
algokit localnet start
```
