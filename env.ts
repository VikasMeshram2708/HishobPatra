import * as z from "zod/v4";
import env from "@next/env";

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  DB_NAME: z.string(),
  MONGO_DB_URI: z.string(),
});

type EnvSchema = z.infer<typeof envSchema>;

const projectDir = process.cwd();

env.loadEnvConfig(projectDir);

try {
  envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(z.flattenError(error));
  }
  console.error("Invalid environment variables:", error);
  process.exit(1); // Exit the process if validation fails
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema {}
  }
}
