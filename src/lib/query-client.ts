// lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, // 1 menit data dianggap fresh
        refetchOnWindowFocus: false, // jangan auto refetch pas ganti tab
        retry: 1, // retry sekali aja biar gak spam
      },
    },
  });
}
