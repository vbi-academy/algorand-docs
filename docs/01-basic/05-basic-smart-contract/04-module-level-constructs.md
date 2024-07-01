---
author: Dang Quang Vu
title: Module Level Constructs
---

## Model of AlgoPy

``` python
__all__ = [
    "ARC4Contract", # Base class for an Algorand Smart Contract
    "Account", # Base class for an Algorand Smart Contract
    "Application",
    "Asset",
    "Block",
    "Contract",
    "Global",
    "GTxn",
    "ITxn",
    "LogicSig",
    "StateTotals",
    "TemplateVar",
    "Txn",
    "logicsig",
    "uenumerate",
    "urange",
]
```

## Application

``` python
class ApplicationFields(TypedDict, total=False):
    approval_program: algopy.Bytes
    clear_state_program: algopy.Bytes
    global_num_uint: algopy.UInt64
    global_num_bytes: algopy.UInt64
    local_num_uint: algopy.UInt64
    local_num_bytes: algopy.UInt64
    extra_program_pages: algopy.UInt64
    creator: algopy.Account
    address: algopy.Account
```

## Asset

``` python
class AssetFields(TypedDict, total=False):
    total: algopy.UInt64
    decimals: algopy.UInt64
    default_frozen: bool
    unit_name: algopy.Bytes
    name: algopy.Bytes
    url: algopy.Bytes
    metadata_hash: algopy.Bytes
    manager: algopy.Account
    reserve: algopy.Account
    freeze: algopy.Account
    clawback: algopy.Account
    creator: algopy.Account
```

## gtxn

``` python
__all__ = [
    "ApplicationCallFields",
    "ApplicationCallTransaction",
    "AssetConfigFields",
    "AssetConfigTransaction",
    "AssetFreezeFields",
    "AssetFreezeTransaction",
    "AssetTransferFields",
    "AssetTransferTransaction",
    "KeyRegistrationFields",
    "KeyRegistrationTransaction",
    "NULL_GTXN_GROUP_INDEX",
    "PaymentFields",
    "PaymentTransaction",
    "Transaction",
    "TransactionBase",
]
```

## itxn

``` python
__all__ = [
    "ApplicationCall",
    "ApplicationCallInnerTransaction",
    "AssetConfig",
    "AssetConfigInnerTransaction",
    "AssetFreeze",
    "AssetFreezeInnerTransaction",
    "AssetTransfer",
    "AssetTransferInnerTransaction",
    "InnerTransaction",
    "InnerTransactionResult",
    "KeyRegistration",
    "KeyRegistrationInnerTransaction",
    "Payment",
    "PaymentInnerTransaction",
    "_BaseInnerTransaction",
    "_InnerTransactionsType",
    "submit_txns",
]
```

## Global

``` python
class GlobalFields(TypedDict, total=False):
    min_txn_fee: algopy.UInt64
    min_balance: algopy.UInt64
    max_txn_life: algopy.UInt64
    zero_address: algopy.Account
    group_size: algopy.UInt64
    logic_sig_version: algopy.UInt64
    round: algopy.UInt64
    latest_timestamp: algopy.UInt64
    current_application_id: algopy.Application
    creator_address: algopy.Account
    current_application_address: algopy.Account
    group_id: algopy.Bytes
    caller_application_id: algopy.Application
    caller_application_address: algopy.Account
    asset_create_min_balance: algopy.UInt64
    asset_opt_in_min_balance: algopy.UInt64
    genesis_hash: algopy.Bytes
    opcode_budget: Callable[[], int]
```

## Txn

``` python
class TxnFields(TypedDict, total=False):
    sender: algopy.Account
    fee: algopy.UInt64
    first_valid: algopy.UInt64
    first_valid_time: algopy.UInt64
    last_valid: algopy.UInt64
    note: algopy.Bytes
    lease: algopy.Bytes
    receiver: algopy.Account
    amount: algopy.UInt64
    close_remainder_to: algopy.Account
    vote_pk: algopy.Bytes
    selection_pk: algopy.Bytes
    vote_first: algopy.UInt64
    vote_last: algopy.UInt64
    vote_key_dilution: algopy.UInt64
    type: algopy.Bytes
    type_enum: algopy.UInt64
    xfer_asset: algopy.Asset
    asset_amount: algopy.UInt64
    asset_sender: algopy.Account
    asset_receiver: algopy.Account
    asset_close_to: algopy.Account
    group_index: algopy.UInt64
    tx_id: algopy.Bytes
    application_id: algopy.Application
    on_completion: algopy.UInt64
    num_app_args: algopy.UInt64
    num_accounts: algopy.UInt64
    approval_program: algopy.Bytes
    clear_state_program: algopy.Bytes
    rekey_to: algopy.Account
    config_asset: algopy.Asset
    config_asset_total: algopy.UInt64
    config_asset_decimals: algopy.UInt64
    config_asset_default_frozen: bool
    config_asset_unit_name: algopy.Bytes
    config_asset_name: algopy.Bytes
    config_asset_url: algopy.Bytes
    config_asset_metadata_hash: algopy.Bytes
    config_asset_manager: algopy.Account
    config_asset_reserve: algopy.Account
    config_asset_freeze: algopy.Account
    config_asset_clawback: algopy.Account
    freeze_asset: algopy.Asset
    freeze_asset_account: algopy.Account
    freeze_asset_frozen: bool
    num_assets: algopy.UInt64
    num_applications: algopy.UInt64
    global_num_uint: algopy.UInt64
    global_num_byte_slice: algopy.UInt64
    local_num_uint: algopy.UInt64
    local_num_byte_slice: algopy.UInt64
    extra_program_pages: algopy.UInt64
    nonparticipation: bool
    num_logs: algopy.UInt64
    created_asset_id: algopy.Asset
    created_application_id: algopy.Application
    last_log: algopy.Bytes
    state_proof_pk: algopy.Bytes
    num_approval_program_pages: algopy.UInt64
    num_clear_state_program_pages: algopy.UInt64
    application_args: tuple[algopy.Bytes, ...]
    accounts: tuple[algopy.Account, ...]
    assets: tuple[algopy.Asset, ...]
    applications: tuple[algopy.Application, ...]
    logs: tuple[algopy.Bytes, ...]
    approval_program_pages: tuple[algopy.Bytes, ...]
    clear_state_program_pages: tuple[algopy.Bytes, ...]
```

## LogicSig

``` python
class LogicSig:
    """A logic signature"""

    def __init__(self, func: Callable[[], bool | algopy.UInt64], name: str | None = None):
        self.func = func
        self.name = name or func.__name__


@typing.overload
def logicsig(sub: Callable[[], bool | algopy.UInt64], /) -> LogicSig: ...


@typing.overload
def logicsig(*, name: str) -> Callable[[Callable[[], bool | algopy.UInt64]], LogicSig]: ...


def logicsig(
    sub: Callable[[], bool | algopy.UInt64] | None = None, *, name: str | None = None
) -> algopy.LogicSig | Callable[[Callable[[], bool | algopy.UInt64]], LogicSig]:
    """Decorator to indicate a function is a logic signature"""
    import algopy

    def decorator(func: Callable[[], bool | algopy.UInt64]) -> algopy.LogicSig:
        @wraps(func)
        def wrapper() -> bool | algopy.UInt64:
            return func()

        return algopy.LogicSig(wrapper, name=name)

    if sub is None:
        return decorator
    else:
        return decorator(sub)
```
