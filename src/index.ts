import Discord from 'discord.js'
import config from '../config.json'

const client = new Discord.Client()

client.on('ready', () => console.log(`Logged in as ${client.user!.tag}!`))

client.on('message', msg => {
    const prefix = '!'
    if (!msg.content.startsWith(prefix)) return
    const args = msg.content.slice(prefix.length).split(/ +/g)
    const command = args.shift()!
    switch (command) {
        case '핑':
            return msg.channel.send('퐁!')
    }
})

client.login(config.token)

