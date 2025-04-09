import * as dotenv from 'dotenv'; 
dotenv.config();

function loadConfig() {
  const requiredVars = ['DISCORD_TOKEN'];

  for (const key of requiredVars) {
    if (!process.env[key]) {
      throw new Error(`${key} is not set in the environment. Please set it in your .env file.`);
    }
  }

  const config = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN!,
 
  };

  return config;
}

export const config = loadConfig();
