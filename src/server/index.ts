import { publicProcedure, router } from "./trpc";

// Define route endpoint
export const appRouter = router({
  getUser: publicProcedure.query(() => {
    return {
      fullName: "Md Shahadat Hosen",
      email: "shahadat@gmail.com",
    };
  }),
});

// Export api endpoint type
export type AppRouter = typeof appRouter;
