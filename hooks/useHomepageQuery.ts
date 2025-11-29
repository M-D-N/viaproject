"use client";

import { useQuery } from "@tanstack/react-query";
import { getHomepage, HomepageAttributes } from "@/lib/strapiClient";

export function useHomepageQuery() {
  return useQuery<HomepageAttributes>({
    queryKey: ["homepage"],
    queryFn: getHomepage,
    staleTime: 1000 * 60, // 1 минута
  });
}
