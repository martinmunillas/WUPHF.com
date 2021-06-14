export const isServer = typeof window === "undefined";

export const ENV = "development";

export const isDev = ENV === "development";

export const PORT = process.env.PORT;
