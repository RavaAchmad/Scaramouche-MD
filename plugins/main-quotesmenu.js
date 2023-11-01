let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┃ ⬡ .bacot
┃ ⬡ .bucin
┃ ⬡ .dare
┃ ⬡ .galau
┃ ⬡ .gombal
┃ ⬡ .hacker
┃ ⬡ .q-islam
┃ ⬡ .quotes
┃ ⬡ .katabijak
┃ ⬡ .motivasi
┃ ⬡ .pantun
┃ ⬡ .senja
┃ ⬡ .truth
┃ ⬡ .videoquotes
┃ ⬡ .videogalau
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.command = /^(quotesmenu)$/i

export default handler