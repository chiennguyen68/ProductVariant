import { PrismaClient, Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      return handleGetRequest(query);
    case "POST":
      return handlePostRequest(req);
    case "PUT":
      return handlePutRequest(req);
    case "DELETE":
      return handleDeleteRequest(req);
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }

  async function handleGetRequest(queryParams: { brandId?: string }) {
    try {
      const brandId = queryParams.brandId;

      const products: Product[] = await prisma.product.findMany({
        where: {
          brandId: brandId ? brandId : undefined,
        },
      });

      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }

  async function handlePostRequest(request: NextApiRequest) {
    try {
      const { name, price }: any = request.body;

      // Validate the incoming data as needed

      const createdProduct: Product = await prisma.product.create({
        data: {
          name: name as string,
          price,
          // Add other product fields as needed
        },
      });

      res.status(201).json(createdProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }

  async function handlePutRequest(request: NextApiRequest) {
    try {
      const { id, name, price } = request.body;

      // Validate the incoming data as needed

      const updatedProduct: Product = await prisma.product.update({
        where: { id },
        data: {
          name : name as string,
          price,
          // Add other product fields as needed
        },
      });

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }

  async function handleDeleteRequest(request: NextApiRequest) {
    try {
      const { id } = request.body;

      // Validate the incoming data as needed

      const deletedProduct: Product = await prisma.product.delete({
        where: { id: id },
      });

      res.status(200).json(deletedProduct);
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
