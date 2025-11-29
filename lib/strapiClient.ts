const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

type StrapiImage = {
  data: {
    logo: {
      url: string;
      alternativeText: string | null;
    };
  } | null;
};

export interface HomepageAttributes {
  logo: StrapiImage;
  phone: string;
  address: string;
  email: string;
  work_days: string;
  work_time: string;
}

interface StrapiSingleTypeResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
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
  return json.data.attributes;
}
