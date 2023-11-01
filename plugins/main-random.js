let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┃ ⬡ .nekopoi
┃ ⬡ .asupan
┃ ⬡ .blackpink
┃ ⬡ .bocil
┃ ⬡ .bts
┃ ⬡ .china
┃ ⬡ .cosplay
┃ ⬡ .geayubi
┃ ⬡ .gensin
┃ ⬡ .hentai
┃ ⬡ .indonesia
┃ ⬡ .japan
┃ ⬡ .korea
┃ ⬡ .malaysia
┃ ⬡ .thailand
┃ ⬡ .vietnam
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler