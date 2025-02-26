"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useRefetch from "@/hooks/use-refetch";
import { api } from "@/trpc/react";
import { Box } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
  orderName: string;
  address: string;
  items: string;
  shippingMethod: string;
};

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const createOrder = api.order.createOrder.useMutation();
  const router = useRouter();
  const refetch = useRefetch();

  function onSubmit(data: FormInput) {
    createOrder.mutate(
      {
        name: data.orderName,
        address: data.address,
        itmes: data.items,
        shippingMethod: data.shippingMethod,
      },
      {
        onSuccess: () => {
          toast.success("✅ Order Created Successfully");
          refetch();
          reset();
          router.push("/dashboard");
        },
        onError: () => {
          toast.error("❌ Failed to create Order");
        },
      },
    );
    return true;
  }

  return (
    <Card>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-5xl rounded-xl bg-white shadow-2xl">
          <div className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2">
            {/* Left Section - Info */}
            <div className="flex flex-col justify-center">
              <Box size={64} className="mb-4 text-blue-600" />
              <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
                Boost Your Warehouse Efficiency 🚀
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Cybership delivers robust Warehouse Management Solutions (WMS)
                that streamline inventory processes, enhance order fulfillment,
                and scale operations — all tailored for modern logistics at a
                competitive price.
              </p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>⚡ Optimize real-time inventory tracking</li>
                <li>📦 Streamlined multi-channel fulfillment</li>
                <li>🌐 Scalable cloud-based architecture</li>
                <li>💰 Affordable plans for all business sizes</li>
              </ul>
            </div>

            {/* Right Section - Form */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                📋 Create New Order
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  {...register("orderName", { required: true })}
                  placeholder="🔖 Order Name"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-blue-500 focus:outline-none focus:ring"
                />
                <Input
                  {...register("address", { required: true })}
                  placeholder="🏠 Address"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-blue-500 focus:outline-none focus:ring"
                />
                <Input
                  {...register("items", { required: true })}
                  placeholder="📦 Items"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-blue-500 focus:outline-none focus:ring"
                />
                <Input
                  {...register("shippingMethod", { required: true })}
                  placeholder="🚚 Shipping Method"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-blue-500 focus:outline-none focus:ring"
                />
                <Button
                  type="submit"
                  disabled={createOrder.isPending}
                  className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {createOrder.isPending ? "Processing..." : "🚀 Create Order"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePage;
