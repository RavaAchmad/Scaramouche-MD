let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/7fa9fba55416a8f8ed387.jpg'
let sewa = `
╔━━━『 *Islamic Menu* 』
┃ ⬡ .asmaulhusna
┃ ⬡ .ayatkursi
┃ ⬡ .salat <daerah>
┃ ⬡ .niatsholat
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler