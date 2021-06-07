const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `**Commands :**

• PB!connect - join the voice channel you are in
• PB!disconnect - leave the voice channel you are in
• PB!play <Song Name or url> - play songs from youtube
• PB!pause - pause currently playing songs in the server
• PB!resume - resume paused songs in the server
• PB!queue - shows the song queue of the server
• PB!skip - skips to next song in the queue
• PB!skipto <Target number> - Multiple skips until target
• PB!stop - stops the song and clears the queue
• PB!volume <volume count or none> - see or adjust volume of songs
• PB!np - see now playing song
• PB!lyrics - get lyrics of current song
• PB!shuffle - shuffle and randomize the queue
• PB!invite - get invite link for the bot
• PB!loop - enable / disable loop for the currently playing song
• PB!remove <Target number> - remove a song from the queue
• PB!help - to see this command

`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "MusicBot Commands Help",
        "https://img.icons8.com/color/2x/services--v2.gif"
      )
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(revised)
  );
};
