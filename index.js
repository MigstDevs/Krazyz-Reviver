import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import dotenv from 'dotenv';
import express from "express";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

dotenv.config();

const app = express();

const token = process.env.token;

app.listen(3000, () => {
    console.log("Uau!");
  });
  
  app.get("/", (req, res) => {
    res.send("yesyes");
  });

client.on('ready', () => {
    console.log(`Logado como ${client.user.tag}!`);

    client.user.setPresence({
        activities: [
            {
                name: 'Krazyz Community 🇧🇷',
                type: ActivityType.Listening
            },
        ],
        status: 'online',
    });

    async function pingEveryone() {
        const channel = client.channels.cache.get('1295044721374265385') || client.channels.cache.find(channel => channel.name === '「💬」・chat');

        await channel.send(`Hora de acordar povo! <@&1291822526346952796>\n\n**__Nota__**: Próximo **Ping Reviver** em 45 minutos!`);
    }

    setInterval(pingEveryone, 2700000);

    pingEveryone();
});

client.login(token);