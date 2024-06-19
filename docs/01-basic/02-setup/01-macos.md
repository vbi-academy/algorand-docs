# MacOs

## Prerequisites

-   [Python 3.12](https://www.python.org/downloads/)
-   [PipX](https://pypa.github.io/pipx/#on-linux-install-via-pip-requires-pip-190-or-later)
-   [Git](https://github.com/git-guides/install-git#install-git)
-   [Docker](https://docker.com/download/)
-   [VS Code](https://code.visualstudio.com/download) - Khuyên Dùng
-   [Homebrew](https://docs.brew.sh/Installation)

# Install

## Install Homebrew

``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Git

-   Check Git

``` bash
git --help
```

-   Cài đặt nếu không tồn tại

``` bash
brew install git
```

## Docker

``` bash
brew install --cask docker
```

## Install AlgoKit

### Method 1

``` bash
brew install algorandfoundation/tap/algokit
```

-   Check

``` bash
algokit --version
```

-   Kết quả trả về nếu đã cài đặt thành công
``` example
algokit, version 2.1.0
```

### Method 2

``` bash
pipx install algokit
```

# Run Localnet

-   Mở ứng dụng Docker

-   Run CLI:

    ``` bash
    algokit localnet start
    ```
