import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
	if (!text) throw 'Perihal Apah?'
	var url = text.replace(/\s+/g, '+')
	try {
		var response = await fetch(API('xzn', 'api/igdl', {
			url
		}, 'apikey'))
		var wtf = await response.json()
		for (var i = 0; i < wtf.media.length; i++) {
			var caption = i == 0 ? wtf.caption : ''
			var type = wtf.media[i].includes('.jpg') ? 'image' : 'video'
			await conn.sendMessage(m.chat, {
				[type]: {
					url: wtf.media[i]
				},
				caption
			}, {
				quoted: m
			})
			await delay(1500)
		}
	} catch (e) {
		console.error(e)
		throw e.toString()
	}

}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

export default handler