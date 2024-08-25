import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url(),

    JWT_SECRET: z.string(),

    GIT_OAUTH_CLIENT_ID: z.string(),
    GIT_OAUTH_CLIENT_SECRET: z.string(),
    GIT_OAUTH_CLIENT_REDIRECT_URI: z.string(),
  },
  client: {},
  shared: {},
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GIT_OAUTH_CLIENT_ID: process.env.GIT_OAUTH_CLIENT_ID,
    GIT_OAUTH_CLIENT_SECRET: process.env.GIT_OAUTH_CLIENT_SECRET,
    GIT_OAUTH_CLIENT_REDIRECT_URI: process.env.GIT_OAUTH_CLIENT_REDIRECT_URI,
  },
  emptyStringAsUndefined: true,
})
