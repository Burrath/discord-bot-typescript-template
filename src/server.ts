import { Ping } from "./commands/Ping";
process.env.TZ = "Europe/London";
import dotenv from "dotenv";
import { Client, Intents } from "discord.js";

dotenv.config();

/**
 * ENABLED LISTENERS
 */
const enabledListeners: Array<any> = [];

/**
 * ENABLED COMMANDS
 */
const enabledCommands: Array<any> = [Ping];

/**
 * Init client
 */
const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: [],
});

/**
 * On client ready
 */
client.once("ready", () => {
  initCommands();
  initListeners();
});

function initListeners() {
  enabledListeners.forEach((listener: any) => {
    new listener(client);
  });
}

function initCommands() {
  enabledCommands.forEach((command: any) => {
    new command(client);
  });
}

client.login(process.env.BOT_TOKEN);
