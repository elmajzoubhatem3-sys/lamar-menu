import { neon } from "@neondatabase/serverless";

if (!process.env.LAMARDB_URL) {
  throw new Error("LAMARDB_URL is missing");
}

export const sql = neon(process.env.LAMARDB_URL);