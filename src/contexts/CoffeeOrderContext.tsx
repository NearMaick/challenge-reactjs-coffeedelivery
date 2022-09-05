import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export interface Coffee {
  id: string;
  title: string;
  tags: string[];
  description: string;
  price: number;
  imageUrl: string;
}

interface CoffeeOrderProps {
  quantity: number;
  coffeeListOrder: Coffee[];
  coffeeListData: Coffee[];
  setContextCoffeeList: (coffee: Coffee[]) => void;
  purchaseItem: (id: string, quantity: number) => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CoffeeOrderProps);

export function CoffeeOrderContextProvider({ children }: CartContextProps) {
  const [coffeeListOrder, setCoffeeListOrder] = useState<Coffee[]>([]);
  const [coffeeListData, setCoffeeListData] = useState<Coffee[]>([]);
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

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

  async function purchaseItem(productId: string, quantity: number) {
    // const response = await fetch(`http://localhost:3000/coffee/${productId}`);
    // const data = await response.json();

    const itemAlreadyInCart = coffeeListOrder.find(
      (item) => item.id === productId
    );

    if (!itemAlreadyInCart) {
      coffeeListData.map(
        ({ id, description, imageUrl, price, title, tags }) => {
          if (productId === id) {
            setCoffeeListOrder((state) => [
              ...state,
              {
                id,
                description,
                imageUrl,
                title,
                price,
                tags,
              },
            ]);
          } else {
            // adicionar + 1 ao carrinho
            return;
          }
        }
      );
    }

    navigate("/checkout");
  }

  return (
    <CartContext.Provider
      value={{
        coffeeListOrder,
        setContextCoffeeList,
        coffeeListData,
        purchaseItem,
        quantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
