import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Ready as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // COMMAND 1
  if (message.content === ",r") {
    await message.reply(`_ _

𓄲  𝐫𝐞𝐩𝐨𝐫𝐭 𝐟𝐨𝐫𝐦
✴︎ premium availed : 
✴︎ months availed : 
‎✴︎ email :
✴︎ password : 
✴︎ batch/pin if applicable :
✴︎ solo or shared :
✴︎ date availed : 
✴︎ date report :
✴︎ days used :
✴︎ remaining days: 
✴︎ proof of issue :
✴︎ proof of vouch: 
・・・・・・・・・・・・・
-# ⧽ put n/a or blank if not available.
-# ⧽ for replacements report put the
-#  ‎ ‎ ‎ ‎ recent  proof  of  login  on vouch
-# ⧽ upon     sending,     attach     your
-# ‎ ‎ ‎  screenshot of  the issue & proof
-# ‎ ‎ ‎ ‎ of    log    in    with    vouch 
-# ⧽ 0-7 days fixing no rush spamming
-# ‎ ‎ = void warranty! no ifs no buts
_ _`);
  }

  // COMMAND 2
  if (message.content === ",ad") {
    await message.reply(`# _ _            [**𝖑𝖚𝖈𝖎𝖆 𝖓𝖔𝖎𝖗𝖊́**](https://discord.gg/35VsZMzrKt) 💎
-# _ _ _ _               ━━━━━━━━━━━━━━━━━━━━━━━━
-# ⠀                discounted items available 𓆩༒𓆪
-# _ _ _ _               ━━━━━━━━━━━━━━━━━━━━━━━━
_ _        n-tro . robuks . dc items . premiums
_ _      game credits . social boost . paid apps
_ _                           discounted load
_ _`);
  }
});

client.login(process.env.DISCORD_TOKEN);
