import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const orderRouter = createTRPCRouter({
  createOrder: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        address: z.string(),
        itmes: z.string(),
        shippingMethod: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.db.order.create({
        data: {
          name: input.name,
          address: input.address,
          items: input.itmes,
          shippingMethod: input.shippingMethod,
          userToOrders: {
            create: {
              userId: ctx.user.userId!,
            },
          },
        },
      });
      return order;
    }),
});
