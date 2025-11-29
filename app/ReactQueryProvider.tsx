"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const client = new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
    })

    
export function ReactQueryProvider({ children }: Props) {
     

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}


