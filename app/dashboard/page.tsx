/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Product, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useEffect, useState } from "react";

async function getProducts() {
  const res = await fetch("api/product");
  if (!res.ok) {
    console.error("Error:", res.status, res.statusText);
    return [];
  }

  const data = await res.json();
  return data;
}

export default function Page() {
  const [listProduct, setListProduct] = useState([]);
  const [showError, setShowError] = useState(false);

  const fetchData = async () => {
    try {
      const product = await getProducts();

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
    <section className="py-2">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Product Manager</h1>
        <DataTable
          columns={columns}
          data={listProduct.length ? listProduct : []}
        />
      </div>
    </section>
  );
}
