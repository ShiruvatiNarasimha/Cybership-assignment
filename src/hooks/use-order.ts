import { api } from "@/trpc/react";
import { useLocalStorage } from "usehooks-ts";

const UseOrder = () => {
  const { data: orders } = api.order.getOrders.useQuery();
  const [orderId, setOrderId] = useLocalStorage("Cybership-orderId", "");
  const order = orders?.find((order) => order.id === orderId);

  return {
    orders,
    order,
    orderId,
    setOrderId,
  };
};

export default UseOrder;
