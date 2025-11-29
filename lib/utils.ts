

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const buildAbsoluteUrl = (url: string) => new URL(url, API_URL).toString()