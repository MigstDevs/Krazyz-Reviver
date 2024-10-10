import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import dotenv from 'dotenv';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

dotenv.config();

const token = process.env.token;
const channelId = '1291786896401240075';

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
        const channel = client.channels.cache.get(channelId);

        await channel.send(`Hora de acordar povo! <@&1291822526346952796>\n\n**__Nota__**: Próximo **Ping Reviver** em 45 minutos!`);
    }

    setInterval(pingEveryone, 2700000);

    pingEveryone();
});

client.login(token);