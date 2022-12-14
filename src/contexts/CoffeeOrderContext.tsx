import { createContext, ReactNode, useEffect, useState } from "react";
export interface Coffee {
  id: string;
  title: string;
  tags: string[];
  description: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

interface CoffeeOrderProps {
  coffeeListData: Coffee[];
  totalOrder: number;
  purchaseItem: (id: string, quantity: number) => void;
  fetchCart: () => Coffee[] | null;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CoffeeOrderProps);

export function CoffeeOrderContextProvider({ children }: CartContextProps) {
  const [coffeeListData, setCoffeeListData] = useState<Coffee[]>([]);
  const [totalOrder, setTotalOrder] = useState(0);

  async function fetchCoffeeData() {
    const response = await fetch("http://localhost:3000/coffee");
    const data = await response.json();
    setCoffeeListData(data);
  }

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  async function purchaseItem(productId: string, quantity: number) {
    const storedItemsCartAsString = localStorage.getItem(
      "@coffee-delivery:cart-state-1.0.0"
    );

    if (!storedItemsCartAsString) {
      const { id, imageUrl, title, price } = coffeeListData.find(
        (item) => item.id === productId
      ) as Coffee;

      const itemCart = { id, imageUrl, title, price, quantity };
      const updatedItemsCart = [itemCart];
      const cartStateJSON = JSON.stringify(updatedItemsCart);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", cartStateJSON);
    } else {
      const storedItemsCartAsJSON = JSON.parse(storedItemsCartAsString);

      const itemOnCart = storedItemsCartAsJSON.find(
        (item: { id: string }) => item.id === productId
      );

      if (itemOnCart) {
        const storedItemsUpdated = storedItemsCartAsJSON.map((item: any) => {
          if (item.id === productId) {
            return { ...item, quantity };
          } else {
            return item;
          }
        });

        const updatedItemsCartToString = JSON.stringify(storedItemsUpdated);
        localStorage.setItem(
          "@coffee-delivery:cart-state-1.0.0",
          updatedItemsCartToString
        );
      } else {
        const { id, imageUrl, title, price } = coffeeListData.find(
          (item) => item.id === productId
        ) as Coffee;

        const itemCart = { id, imageUrl, title, price, quantity };
        const updatedItemsCart = [...storedItemsCartAsJSON, itemCart];
        const updatedItemsCartToString = JSON.stringify(updatedItemsCart);

        localStorage.setItem(
          "@coffee-delivery:cart-state-1.0.0",
          updatedItemsCartToString
        );
      }
    }

    calculateTotal();
  }

  function calculateTotal() {
    const storedItemsCartAsString = localStorage.getItem(
      "@coffee-delivery:cart-state-1.0.0"
    );
    const storedItemsCartAsJSON = JSON.parse(storedItemsCartAsString!);
    const itemsToCalculate = storedItemsCartAsJSON.map(
      ({ price, quantity }: Coffee) => {
        return { price, quantity };
      }
    );

    const totalCalculated = itemsToCalculate.reduce(
      (acc: number, item: Coffee) => {
        return acc + item.price * item.quantity!;
      },
      0
    );

    setTotalOrder(totalCalculated);
  }

  function fetchCart(): Coffee[] {
    const cartList = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

    return cartList && JSON.parse(cartList);
  }

  return (
    <CartContext.Provider
      value={{
        coffeeListData,
        purchaseItem,
        fetchCart,
        totalOrder,
      }}>
      {children}
    </CartContext.Provider>
  );
}
