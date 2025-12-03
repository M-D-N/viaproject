const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

export const buildAbsoluteUrl = (url: string) => new URL(url, API_URL).toString()