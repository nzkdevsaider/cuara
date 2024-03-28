interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface Factura {
  id: number;
  status: string;
  enterprise: string;
  discount: number;
  date: string;
  subtotal: number;
  tax: number;
  total: number;
  items: Item[];
}
