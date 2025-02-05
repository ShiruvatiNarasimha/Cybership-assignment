"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useRefetch from "@/hooks/use-refetch";
import { api } from "@/trpc/react";
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

  function onSubmit(data: FormInput) {
    window.alert(JSON.stringify(data, null, 2));
    return true;
  }

  return (
    <Card>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
          <img src="/undraw_github.svg" className="h-15 mx-auto w-auto" />
          <h1 className="mt-4 text-center text-2xl font-semibold text-gray-900">
            Supercharging Warehouse Productivity
          </h1>
          <p className="mt-1 text-center text-sm text-gray-500">
            Cybership delivers powerful WMS solutions that optimize inventory,
            streamline fulfillment, and scale your operations — all at a
            competitive price, tailored for modern logistics.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <Input
              {...register("orderName", { required: true })}
              placeholder="Order Name"
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
            <Input
              {...register("address", { required: true })}
              placeholder="Address "
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
            <Input
              {...register("items", { required: true })}
              placeholder="Items"
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
            <Input
              {...register("shippingMethod", { required: true })}
              placeholder=" shipping Method"
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
            <Button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default CreatePage;
