let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `
╔━━━『 *NSWF Menu* 』
┃ ⬡ .hollolewd
┃ ⬡ .sideoppai
┃ ⬡ .animefeets
┃ ⬡ .animebooty
┃ ⬡ .animethighss
┃ ⬡ .animearmpits
┃ ⬡ .lewdanimegirls
┃ ⬡ .biganimetiddies
┃ ⬡ .animeblowjob
┃ ⬡ .gangbang
┃ ⬡ .hinata
┃ ⬡ .lewd
┃ ⬡ .masturbation
┃ ⬡ .ometv
┃ ⬡ .orgy
┃ ⬡ .paptt
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['nsfwmenu']
handler.tags = ['main']
handler.command = /^(nsfwmenu)$/i

export default handler