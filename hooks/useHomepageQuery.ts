"use client";

// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@apollo/client/react";

// import { getHomepage, HomepageAttributes } from "@/lib/strapiClient";
import { HOME_PAGE_QUERY } from "@/lib/graphql/queries/homePage";
// import { error } from "console";
import { IHomePage } from "@/types/homePage";

// export function useHomepageQuery() {
//   return useQuery<HomepageAttributes>({
//     queryKey: ["homepage"],
//     queryFn: getHomepage,
//     staleTime: 1000 * 60, // 1 минута
//   });
// }
 
export function useHomepageQuery() {
  return useQuery<IHomePage>(HOME_PAGE_QUERY);

  // return { loading: response.loading, data: response.data?.data, error: response.error }
}
