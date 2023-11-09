import { products } from "@/common/data";
import { Product, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUsers(): Promise<Product[]> {
  const data = products;
  return data;
}

export default async function Page() {
  const data = await getUsers();

  return (
    <section className="py-2">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Product Manager</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
