---
title: Types of AlgoPy
---

# Types of AlgoPy

-   BigUInt - Int512
-   Bytes - underlying bytes value representing the \[\]byte
-   String - Represents a UTF-8 encoded string backed by Bytes,
    accessible via .bytes. \| underlying 'bytes' value representing the
    String
-   UInt64 -

``` python
__all__ = ["BigUInt", "Bytes", "String", "UInt64"]
```

-   ByteBacked - Represents a type that is a single bytes value
-   Account - bytes

``` python
class Section(ARC4Contract):
    def __init__(self) -> None:
        self.auction = UInt64(0)
        self.auction_title = String("hello")
        self.digit = Bytes(b"0123456789")
```
