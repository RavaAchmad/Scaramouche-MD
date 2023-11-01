let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┃ ⬡ .attp <teks>
┃ ⬡ .bonk
┃ ⬡ .getexif
┃ ⬡ .qc
┃ ⬡ .sticker
┃ ⬡ .s
┃ ⬡ .toimg
┃ ⬡ .tovideo
┃ ⬡ .ttp2
┃ ⬡ .ttp
┃ ⬡ .wm
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler