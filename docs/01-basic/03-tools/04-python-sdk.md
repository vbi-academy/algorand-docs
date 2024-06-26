---
id: python-sdk
title: Python SDK
---

-   [Install Python SDK](#install-python-sdk)
-   [Clone Sandbox Code](#clone-sandbox-code)
-   [Start](#start)

# Install Python SDK

``` bash
pip install py-algorand-sdk
or
pip3 install py-algorand-sdk
```

-   Another Way

``` bash
python3 -m pip install py-algorand-sdk
```

# Clone Sandbox Code

``` bash
git clone https://github.com/algorand/sandbox.git
```

``` bash
cd sandbox
./sandbox up testnet -v
```

# Start

``` python
from algosdk import account, encoding

# generate an account
private_key, address = account.generate_account()
print("Private key:", private_key)
print("Address:", address)

# check if the address is valid
if encoding.is_valid_address(address):
    print("The address is valid!")
else:
    print("The address is invalid.")
```

``` bash
python3 example.py
```
