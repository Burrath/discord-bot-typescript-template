import { CacheType, Client, Interaction, MessageInteraction } from "discord.js";

/**
 * Command interface
 */
export interface CommandInterface {
  command: string;
  description: string;
  options?: Array<any>;
  client: Client;

  handle(interaction: Interaction<CacheType>): void;
}
