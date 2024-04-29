import { publicProcedure, router } from "./trpc";

// Define route endpoint
export const appRouter = router({
    getUser: publicProcedure.query(()=>{
        return {
            userName: "Md Shahadat Hosen",
            role: "Developer",
        }
    })
})

// Export api endpoint type
export type AppRouter = typeof appRouter;
