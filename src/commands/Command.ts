import { CacheType, Client, ClientApplication, Interaction } from "discord.js";
import { CommandInterface } from "./CommandInterface";

/**
 * Command base class
 */
export abstract class Command implements CommandInterface {
  public command: string;
  public description: string;
  public options: Array<any>;
  public client: Client;

  constructor(
    client: Client,
    command: string,
    description: string,
    options: Array<any>
  ) {
    this.command = command;
    this.description = description;
    this.options = options;
    this.client = client;

    // register command to application
    const clientApplication: ClientApplication = client.application;
    clientApplication.commands.create({
      name: this.command,
      description: this.description,
      options: this.options || [],
    });

    // listen for command prompt
    this.client.on(
      "interactionCreate",
      async (interaction: Interaction<CacheType>) => {
        if (!interaction.isCommand() || interaction.commandName != this.command)
          return;

        // handles command issued
        this.handle(interaction);
      }
    );
  }

  /**
   * Handle command logic
   * @param interaction
   */
  async handle(interaction: Interaction<CacheType>): Promise<void> {}
}
