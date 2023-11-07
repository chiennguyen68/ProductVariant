"use client"
import { products } from "@/common/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

interface Products {
  id: string;
  name: string;
  thumb: string;
  price: number;
  startedDate: string;
  code: string;
  status: number;
}

export default function Products() {
  const product: Products[] = products;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">List product</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ảnh/ Tên sản phẩm
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Giá tiền
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ngày nhập
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Trạng thái
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>

              <tbody className="w-full">
                <ScrollArea className="h-72 min-w-full w-full rounded-md border">
                  {product &&
                    product.map((p) => {
                      return (
                        <tr key={p.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={p.thumb}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {p.name}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {p.code}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {p.price.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </p>
                            
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {new Date().toLocaleDateString()}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Sẵn sàng</span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            <button
                              type="button"
                              className="inline-block text-gray-500 hover:text-gray-700"
                            >
                              <svg
                                className="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </ScrollArea>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
