import { Button } from "@repo/ui/components/ui/button";

interface ProductDetailProps {
  id: string,
  description: string,
  price: number
}

export const ProductDetail = ({ id, description, price}: ProductDetailProps) => {
  return (
    <div>
      <div>Id classic: {id}</div>
      <div>Description: {description}</div>
      <div>Price: {price}</div>
      <Button>Buy</Button>
    </div>
  );
};