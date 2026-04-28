import { Client, GatewayIntentBits } from "discord.js";

const STICKY_MESSAGES = {
  "1455613451903832275": `_ _
               **payment details**
       ||0992 989 0833 — C.C.S.D||

             **for invites pricelist**
<:dns32:1480217612737708133> \` ₱ 02 \`   <:dash1:1480729441423589447>    one m.  canba
<:dns32:1480217612737708133> \` ₱ 05 \`   <:dash1:1480729441423589447>    one m.  ms365
<:dns32:1480217612737708133> \` ₱ 10 \`   <:dash1:1480729441423589447>    one m.  yootube
<:dns32:1480217612737708133> \` ₱ 60 \`   <:dash1:1480729441423589447>    one m.  chtgpt

_ _ _ _ _ _                <a:0000_1:1456606023702806580> **note:**
-# _ _ <:dns32:1480217612737708133>send your email + your receipt here !
-# _ _ <:dns32:1480217612737708133>always ask for availability before sending
-# _ _       payment
-# _ _ <:dns32:1480217612737708133>ping <@1330573713346920533>  
-# _ _ <:dns32:1480217612737708133>indicate what invite availed
-# _ _ <:dns32:1480217612737708133>do  not  send  payment  without prior
-# _ _       notice
-# _ _ <:dns32:1480217612737708133>vouch <@1330573713346920533> within 12 hours
-# _ _       to activate your warranty
-# _ _ <:dns32:1480217612737708133>**no  vouch  =  no  warranty**

_ _`,

  "1483403044870688818": `_ _
# _ _   <:emoji_82:1483113628734460028> load promo
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎     ‎ ‎**payment details**
       || 0992 989 0833 <:emoji_83:1483100606649602159> C.C.S.D||
-# ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎send receipt , order and number
_ _
_ _    **1GB : 1000 MB**
_ _    valid for 24 hrs

_ _    \` ₱10 \` <:emoji_83:1483100606649602159> dito
_ _    \` ₱09 \` <:emoji_83:1483100606649602159> tnt / smart
_ _    \` ₱15 \` <:emoji_83:1483100606649602159> globe / tm

_ _    \` ₱62 \` <:emoji_83:1483100606649602159> **ALLACCESS99**
_ _    smart / tnt
_ _    7GB data all access
_ _    15days validity

_ _    \` ₱62 \` <:emoji_83:1483100606649602159> **POWERALL99**
_ _    smart only
_ _    data : 10GB shareable
_ _    unli tt and fb
_ _    unli calls and texts
_ _    7days validity

_ _    \` ₱62 \` <:emoji_83:1483100606649602159> **SAYAALL99**
_ _    tnt only
_ _    data : 6GB shareable
_ _    unli calls and texts
_ _    7days validity 

_ _    \` ₱45 \` <:emoji_83:1483100606649602159> **EZ50 5G**
_ _    tm only
_ _    bundle 1GB/day: funaliw/achieve
_ _    data : 3GB
_ _    unli calls and texts all networks
_ _    3 days validity
_ _`
};

const lastStickyIds = {};

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

  // autoresponder 1
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

  // autoresponder 2
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

  // sticky system
  const stickyMessage = STICKY_MESSAGES[message.channel.id];

  if (stickyMessage) {
    if (lastStickyIds[message.channel.id]) {
      try {
        const oldSticky = await message.channel.messages.fetch(lastStickyIds[message.channel.id]);
        await oldSticky.delete();
      } catch (e) {}
    }

    const newSticky = await message.channel.send(stickyMessage);
    lastStickyIds[message.channel.id] = newSticky.id;
  }
});

client.login(process.env.DISCORD_TOKEN);
