import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

// For development, create a mock database if no connection string
const client = connectionString
  ? postgres(connectionString)
  : postgres('postgresql://localhost:5432/startfast');

export const db = drizzle(client, { schema });

export * from './schema';
