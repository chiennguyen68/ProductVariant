/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import { products } from "@/common/data";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TopUp from "@/components/TopUp/TopUp";
import Link from "next/link";
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
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";

async function getProducts() {
  const res = await fetch("api/product");
  if (!res.ok) {
    console.error("Error:", res.status, res.statusText);
    return [];
  }

  const data = await res.json();
  return data;
}

async function getBrands() {
  const res = await fetch("api/brand");
  if (!res.ok) {
    console.error("Error:", res.status, res.statusText);
    return [];
  }

  const data = await res.json();
  return data;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState<any>("");
  const [listProduct, setListProduct] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  const [showError, setShowError] = useState(false);
  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const fetchData = async () => {
    try {
      const product = await getProducts();
      const brand = await getBrands();
      setListBrand(
        brand.map((b: any) => {
          return { label: b.name, value: b.name };
        })
      );
      if (product) {
        setListProduct(product);
      }
    } catch (error) {
      setShowError(true);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TopUp />
      <Navbar />
      <Carousel />
      <main className="flex min-h-screen flex-col items-center border-t">
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal w-full">
          <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <a
                    className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                    href="#"
                  >
                    Store
                  </a>

                  <div className="flex items-center" id="store-nav-content">
                    <div className="relative">
                      <Popover open={openSelect} onOpenChange={setOpenSelect}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openSelect}
                            className="w-[200px] justify-between p-[20px] mr-[10px]"
                          >
                            {valueSelect ? valueSelect : "Chọn nhãn hiệu"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search brand..." />
                            <CommandEmpty>Không có nhãn hiệu.</CommandEmpty>
                            <CommandGroup>
                              {listBrand.map((brand: any) => (
                                <CommandItem
                                  key={brand.value}
                                  value={brand.value}
                                  onSelect={(currentValue: any) => {
                                    setValueSelect(
                                      currentValue === valueSelect
                                        ? ""
                                        : currentValue
                                    );
                                    setOpenSelect(false);
                                  }}
                                >
                                  {brand.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <input
                        value={searchTerm}
                        onChange={(e) => handleSearch(e)}
                        placeholder="Tìm kiếm theo tên,..."
                        className="mr-2 outline-none border pr-8 border-gray-300 rounded p-2"
                      />

                      <FontAwesomeIcon
                        width={30}
                        height={28}
                        icon={faSearch}
                        className="absolute right-3 bottom-3  text-black"
                        color="#5a5959"
                      />
                    </div>
                  </div>
                </div>
              </nav>

              {showError ? (
                "Có lỗi xảy ra vui lòng thử lại"
              ) : listProduct.length && !showError ? (
                <ProductWrapper listProduct={listProduct} />
              ) : (
                <>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <Skeleton className="h-48 w-48 rounded mb-2" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-[200px] mb-2" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const ProductWrapper = ({ listProduct }: any) => {
  return (
    <>
      {listProduct &&
        listProduct.map((p: any) => {
          return (
            <div
              key={p.id}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            >
              <Card className="hover:grow hover:shadow">
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>
                    <img
                      src={
                        p.thumb
                          ? p.thumb
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8sZtI7wrlEfa49bSTN5a3uk8b4twPve8nA&usqp=CAU"
                      }
                      alt={p.name}
                    />
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
    </>
  );
};
