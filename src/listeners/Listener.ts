import { Client, ClientEvents, Message, MessageInteraction, User } from "discord.js";
import { ListenerInterface } from "./ListenerInterface";

/**
 * Listener Base class
 */
export abstract class Listener implements ListenerInterface {
  public event: keyof ClientEvents;
  public client: Client;

  constructor(client: Client, event: keyof ClientEvents) {
    this.client = client;
    this.event = event;

    // listen for messages
    this.client.on("messageCreate", async (interaction: Message) => {
      if (interaction.author.id == process.env.BOT_ID) return;

      // checks if we need to listen for that particular message
      if (!this.trigger(interaction)) return;

      // handle message received
      this.handle(interaction);
    });
  }

  /**
   * handle message logic
   * @param interaction 
   */
  async handle(interaction: Message): Promise<void> {}

  /**
   * this function excludes messages that are not important
   * can exclude by channel, message text, message sender..
   * 
   * @param interaction 
   * @returns if the message needs to be listened
   */
  trigger(interaction: Message): boolean {
    return false;
  }
}
