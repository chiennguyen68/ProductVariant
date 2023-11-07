"use client";

import React, { useState } from "react";

export default function TopUp() {
  const [listProduct, setListProduct] = useState([]);

  return (
    <div className=" w-full text-center p-2 text-white font-bold bg-slate-600">
      Đổi hàng miễn phí tại cửa hàng trong 30 ngày
    </div>
  );
}
