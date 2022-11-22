const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const json = require("../config.json");
const exec = require("child_process").exec;
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildWebhooks,
  ],
});
bot.once("ready", () => {
  console.log("Ready!");
});

bot.on("messageCreate", async (message) => {
  if (
    !message.webhookId &&
    message.guildId !== process.env.GUILD &&
    message.channelId !== process.env.CHAN
  )
    return;
  const hook = await bot.fetchWebhook(message.webhookId);
  const msg = await hook.fetchMessage(message.id);
  const url = msg.embeds[0].data.url.split("commit")[0];
  console.log(json, url);
  if (json[url]) {
    const path = json[url];
    exec(
      "git pull",
      {
        cwd: path,
      },
      function (error, stdout, stderr) {
        if (error) console.log(error);
        console.log(stdout);
        if (stderr) console.log(stderr);
      }
    );
  }
});
bot.login(process.env.TOKEN);
