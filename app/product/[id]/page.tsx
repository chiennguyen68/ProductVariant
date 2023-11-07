"use client";

import { products } from "@/common/data";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Product {
  id: string;
  name: string;
  thumb: string;
  price: number;
}

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setDetail(products.filter((p) => p.id === id));
  }, []);

  return (
    <div className="p-12">
      <h3 className="mb-4 text-[18px] font-bold">
        <span className="text-[#918f8f]">sản phẩm mới /</span>
        {detail[0] && detail[0].name}
      </h3>
      <div className="flex justify-between">
        <div className="w-8/12">
          {detail[0] && (
            <ImageGallery thumbnailPosition="right" items={detail[0].images} />
          )}
        </div>
        <div className="w-4/12 flex flex-col ml-[15px] ">
          <div className="font-bold">{detail[0] && detail[0].name}</div>
          <div className="font-bold mt-[10px]">
            <span className="font-medium">Mã sản phẩm:</span>{" "}
            {detail[0] && detail[0].code}
          </div>
          <div className="font-bold mt-[10px]">
            <span className="font-medium flex flex-col">Màu sắc:</span>{" "}
            {detail[0] &&
              detail[0].color.map((c) => {
                return (
                  <button
                    style={{ background: `${c}` }}
                    className={`px-6 py-4 mr-1 border`}
                  ></button>
                );
              })}
          </div>
          <div className="font-bold mt-[10px]">
            <span className="font-medium flex flex-col">Mã sản phẩm:</span>{" "}
            {detail[0] && detail[0].code}
          </div>
          <div className="font-bold mt-[10px]">
            <span className="font-medium flex flex-col">Kích cỡ:</span>{" "}
            {detail[0] &&
              detail[0].size.map((s) => {
                return <button className="px-6 py-2 mr-1 border">{s}</button>;
              })}
          </div>
          <div className=" mt-[10px]">
            <span className="font-medium flex flex-col">Mô tả:</span>{" "}
            {detail[0] && detail[0].des}
          </div>
          <div className="font-bold mt-[10px]">
            <button className=" text-white flex justify-center items-center px-[20px] py-2 bg-red-500">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
