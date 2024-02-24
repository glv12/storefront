import { Button } from "@repo/ui";
import { ProductDetail } from "@repo/theme";

interface ProductDetailProps {
  id: string;
  description: string;
  price: number
}

const product: ProductDetailProps = {
  "id": "abcd-id",
  "description": "beschreibung produkt", 
  "price": 7.90
}


export default function Page() {
  return (
    <main>
      <Button className="bg-indigo-600 h-48">Click me</Button>
      <div className="bg-destructive">helloxx</div>
      <ProductDetail  {...product}/>
    </main>
  );
}
