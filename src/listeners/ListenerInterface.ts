import { Client, ClientEvents, Message } from "discord.js";

/**
 * Listener interface
 */
export interface ListenerInterface {
    event: keyof ClientEvents
    client: Client

    handle(interaction: Message): void;
    trigger(interaction: Message): boolean
}