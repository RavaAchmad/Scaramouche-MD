import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan Linknya\nExample; ${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	m.reply(wait)
	let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=ichanzx&url=${text}`)
  let result = await res.json()
  let url = json.result[0]
  let cap = `_Nih Kak Videonya_`
  conn.sendMessage(m.chat, { video: { url: url }, caption: cap }, m)
  conn.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted : m })
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true

export default handler
