import { z } from "zod";
import { prisma } from "../lib/prismaClient";
import { trpc } from "../lib/trpc";

export const todoRouter = trpc.router({
  list: trpc.procedure.query(() => {
    return prisma.todo.findMany();
  }),
  create: trpc.procedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(({ input }) => {
      const title = input.title;
      const description = input.description;
      return prisma.todo.create({
        data: {
          title: title,
          description: description,
          isCompleted: false,
        },
      });
    }),
  delete: trpc.procedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      const id = input.id;
      return prisma.todo.delete({
        where: {
          id: id,
        },
      });
    }),
  update: trpc.procedure
    .input(z.object({ isCompleted: z.boolean(), id: z.string() }))
    .mutation(({ input }) =>
      prisma.todo.update({
        where: { id: input.id },
        data: { isCompleted: input.isCompleted },
      })
    ),
});
