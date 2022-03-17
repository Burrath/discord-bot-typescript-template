import { Client, BaseCommandInteraction } from "discord.js";
import { Command } from "./Command";

export class Ping extends Command {
  constructor(client: Client) {
    super(client, "ping", "Returns Pong.", []);
  }

  async handle(interaction: BaseCommandInteraction): Promise<void> {
    await interaction.deferReply({
      ephemeral: true,
    });

    // async logic here

    await interaction.editReply({
      content: `Pong!`,
    });
  }
}
