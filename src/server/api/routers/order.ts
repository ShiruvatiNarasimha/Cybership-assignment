import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const orderRouter = createTRPCRouter({
  createOrder: publicProcedure
    .input(
      z.object({
        name: z.string(),
        address: z.string(),
        itmes: z.string(),
        shippingMethod: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {}),
});
