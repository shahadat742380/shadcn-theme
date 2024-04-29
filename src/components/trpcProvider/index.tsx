"use client"

import { trpc } from '@/app/_trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { PropsWithChildren, useState } from 'react';

const TrpcProvider = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(()=> new QueryClient())
    const [trpcClient] = useState(()=> trpc.createClient({
        links: [httpBatchLink({url: "http://localhost:3000/api/trpc"})]
    }))
    
    return <trpc.provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </trpc.provider>
};

export default TrpcProvider;