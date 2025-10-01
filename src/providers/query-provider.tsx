"use client";

import { makeQueryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [client] = useState(() => makeQueryClient());
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default QueryProvider;
