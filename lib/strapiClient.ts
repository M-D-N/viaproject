import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:1337";

// Create HTTP link to your Strapi GraphQL endpoint
const httpLink = new HttpLink({
  uri: `${STRAPI_BASE_URL}`,
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  // Optional: Add error handling
  defaultOptions: {
    watchQuery: {
      errorPolicy: "ignore",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
}

export interface ContactInfo {
  id: number;
  phone: string;
  address: string;
  email: string;
}

export interface WorkItem {
  id: number;
  work_days: string;
  work_time_from: string;
  work_time_to: string;
}

export interface TopContents {
  id: number;
  toptitle: string;
  topdescription: string;
}

export interface SlideItem {
  id: number;
  slidetitle: string;
  slidedescription: string;
}

export interface AboutContent {
  id: number;
  abouttitle: string;
  aboutdescription: string;
}

export interface FormContent {
  id: number;
  formtitle: string;
  formdesc: string;
}

export interface HomepageAttributes {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  footerdescription: string;

  logo: StrapiImage;
  contact_info: ContactInfo;
  works: WorkItem[];

  topcontents: TopContents;
  slides: SlideItem[];
  aboutcontent: AboutContent;
  formcontent: FormContent;
}

interface StrapiSingleTypeResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}


// Общий fetcher
async function strapiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}/api${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // TanStack сам кеширует, поэтому тут обычный fetch
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`Strapi error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch ${path}`);
  }

  return res.json() as Promise<T>;
}

// Конкретно homepage
export async function getHomepage(): Promise<HomepageAttributes> {
  const json = await strapiFetch<StrapiSingleTypeResponse<HomepageAttributes>>(
    "/homepage?populate=*"
  );
  return json.data;
}
