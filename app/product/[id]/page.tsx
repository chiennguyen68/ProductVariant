"use client";

import { products } from "@/common/data";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TopUp from "@/components/TopUp/TopUp";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id;
  const [detail, setDetail] = useState<any>([]);

  useEffect(() => {
    setDetail(products.filter((p) => p.id === id));
  }, []);

  return (
    <>
      <TopUp />
      <Navbar />
      <div className="p-12">
        <h3 className="mb-4 text-[18px] font-bold">
          <span className="text-[#918f8f]">sản phẩm mới /</span>
          {detail[0] && detail[0].name}
        </h3>
        <div className="flex justify-between">
          <div className="w-8/12">
            {detail[0] && (
              <ImageGallery
                thumbnailPosition="right"
                items={detail[0].images}
              />
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
                detail[0].color.map((c: any, index: any) => {
                  return (
                    <button
                      key={index}
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
                detail[0].size.map((s: any, index: any) => {
                  return (
                    <button key={index} className="px-6 py-2 mr-1 border">
                      {s}
                    </button>
                  );
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
      {listProduct()}
      <Footer />
    </>
  );
}

const listProduct = () => {
  let product: any = products;

  return (
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            Sản phẩm liên quan
          </a>
        </div>
      </nav>
      {product &&
        product.map((p: any) => {
          return (
            <div
              key={p.id}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            >
              <Card className="hover:grow hover:shadow">
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>
                    <img src={p.thumb} alt={p.name} />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Giá tiền: </Label>
                        <p className="pt-1 text-gray-900">
                          {p.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex justify-start">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" className="mr-2">
                            <FontAwesomeIcon
                              width={30}
                              height={28}
                              icon={faCartShopping}
                              color="#DC143C"
                            />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Thêm vào giỏ hàng</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">
                            <Link href={`product/${p.id}`}>
                              <FontAwesomeIcon
                                width={30}
                                height={28}
                                icon={faCircleInfo}
                                color="#00FFFF"
                              />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Xem chi tiết</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </CardFooter>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
