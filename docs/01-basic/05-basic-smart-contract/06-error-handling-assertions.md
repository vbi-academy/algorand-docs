---
id: error-handling-assertions
title: Error Handling & Assertions
---

-   Asset: Kiểu dữ liệu đại diện cho một tài sản (tokens) trên Algorand.
-   Txn.Sender: Người thực thi transaction với kiểu dữ liệu là Account.
-   Global.latest_timestamp: Thời gian tại thời điểm call function,
    kiểu dữ liệu là UInt64
-   Global.creator_address: Người khởi tạo account ( chủ sở hữu của
    contract ) lúc contract được deploy.
-   Global.current_application_address: Địa chỉ address của contract.

``` python
assert ${Giá trị so sánh và trả về true}, "Lỗi sẽ trả về nếu giá trị sau assert là true"
```

``` python
from algopy import ARC4Contract,Contract, Account, Asset, LocalState, String, Txn, UInt64, arc4, gtxn, itxn, Global # Các libraires được sử dụng cho contract.
from algopy.arc4 import abimethod

class Auction(ARC4Contract):
    def __init__(self) -> None:
        self.auction_start =  UInt64(0)
        self.auction_end = UInt64(0)
        self.asa_amount = UInt64(0)
        self.asa = Asset()
        self.previous_bidder = Account()
        self.previous_bid = UInt64()
        self.claimble_amount = LocalState(UInt64, key="claim", description="The claimble amount")


    @abimethod # Function được compile, lưu trữ và tương tác với blockchain khi được gắn @abimethod.
    def start_auction(self, end_at: UInt64, start_at: UInt64, starting_price: UInt64, exfer: gtxn.AssetTransferTransaction) -> None:
        assert Txn.sender == Global.creator_address, "you're owner of auction"
        assert Txn.sender == self.previous_bidder, "you're previous bidder"
        assert Global.latest_timestamp >= end_at, "auction ended"
        assert start_at < end_at, "start at must be lower end at"
        assert exfer.asset_receiver != Global.current_application_address, "exfer must transfer to this app"

        self.auction_end = Global.latest_timestamp + end_at
        self.auction_start = Global.latest_timestamp + start_at
        self.previous_bid = starting_price
```
