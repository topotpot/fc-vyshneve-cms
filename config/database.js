/** @param {{ env: (key: string, def?: string) => string | undefined }} ctx */
module.exports = ({ env }) => {
  const connectionString = env('DATABASE_URL');

  if (!connectionString) {
    throw new Error('[database] DATABASE_URL is missing on Render');
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString,
        ssl: { rejectUnauthorized: false },
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  };
};
