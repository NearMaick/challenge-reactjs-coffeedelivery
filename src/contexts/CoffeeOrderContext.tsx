import { createContext, ReactNode, useEffect, useState } from "react";

export interface Coffee {
  id: string;
  title: string;
  tags: string[];
  description: string;
  price: number;
  imageUrl: string;
}

interface CoffeeOrderProps {
  coffeeListOrder: Coffee[];
  coffeeListData: Coffee[];
  setContextCoffeeList: (coffee: Coffee[]) => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CoffeeOrderProps);

export function CoffeeOrderContextProvider({ children }: CartContextProps) {
  const [coffeeListOrder, setCoffeeListOrder] = useState<Coffee[]>([]);
  const [coffeeListData, setCoffeeListData] = useState<Coffee[]>([]);

  function setContextCoffeeList(coffee: Coffee[]) {
    setCoffeeListOrder(coffee);
  }

  async function fetchCoffeeData() {
    const response = await fetch("http://localhost:3000/coffee");
    const data = await response.json();
    setCoffeeListData(data);
  }

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  return (
    <CartContext.Provider
      value={{ coffeeListOrder, setContextCoffeeList, coffeeListData }}>
      {children}
    </CartContext.Provider>
  );
}
