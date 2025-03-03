---
title: Insight into algopy
---

# What is AlgoPy

-   Algorand Python là một phiên bản của ngôn ngữ lập trình Python, được
    thiết kế để chạy trên Algorand Virtual Machine (AVM). Nó cung cấp
    một khung làm việc với kiểu dữ liệu tĩnh để phát triển các hợp đồng
    thông minh và chữ ký logic trên nền tảng Algorand, đồng thời mang
    lại giao diện giống Python cho các chức năng cơ bản của AVM. Điều
    này giúp bạn có thể sử dụng các công cụ tiêu chuẩn của Python.

-   Algorand Python được biên dịch để thực thi trên AVM bởi `PuyaPy`,
    một trình biên dịch tối ưu hoá. PuyaPy đảm bảo rằng bytecode AVM
    được tạo ra sẽ có ngữ nghĩa thực thi giống với mã Python ban đầu.
    Sản phẩm của PuyaPy tương thích trực tiếp với các client, giúp việc
    triển khai và gọi hợp đồng thông minh trở nên dễ dàng hơn.

# Structure of a contract

``` python
# Constant
ASSET_MIN_BALANCE = 100000

class StructExample(arc4.Struct):
    fields_name: arc4.UInt64

class Auction(ARC4Contract):
    # Define Types or initialized value
    values: UInt64

    def __init__(self) -> None:
        todo!()

    @arc4.abimethod
    def function_name(self) -> Return_Type:
        todo!()
```
