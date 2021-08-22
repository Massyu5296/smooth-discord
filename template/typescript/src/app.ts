import { Client, Intents } from 'discord.js';
import { registerGuildCommands } from '../../javascript/src/commands';
import {
  getGlobalCommands,
  getGuildCommands,
  registerGlobalCommands,
} from './commands';

const commands = { guild: [], global: [] };
let buttons = [];

const client = new Client({
  intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_MESSAGES,
});

client.once('ready', async () => {
  commands.guild = await getGuildCommands();
  commands.global = await getGlobalCommands();

  await registerGuildCommands(commands.guild);
  await registerGlobalCommands(client, commands.global);

  console.log('bot is ready...');
});

client.login('$[token]');
