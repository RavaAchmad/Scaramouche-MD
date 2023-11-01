let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `
╔━━━『 *AI Menu* 』
┃ ⬡ .beauty
┃ ⬡ .tocartoon
┃ ⬡ .dalle
┃ ⬡ .gpt
┃ ⬡ .hairstyle
┃ ⬡ .openai
┃ ⬡ .ocr
┃ ⬡ .pixardif
┃ ⬡ .remini
┃ ⬡ .color
┃ ⬡ .hdr
┃ ⬡ .toanime
┃ ⬡ .txt2img
┃ ⬡ .blur
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler