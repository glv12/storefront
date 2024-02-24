import { Button } from "@repo/ui";

interface ProductDetailProps {
  id: string,
  description: string,
  price: number
}

export const ProductDetail = ({ id, description, price}: ProductDetailProps) => {
  return (
    <div>
      <div>Id modern: {id}</div>
      <div>Description: {description}</div>
      <Button className="bg-indigo-600">Buy unknown price</Button>
    </div>
  );
};