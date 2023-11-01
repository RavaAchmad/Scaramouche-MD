let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/225e0bdd02240973d473f.jpg'
let sewa = `
╔━━━『 *Tools Menu* 』
┃ ⬡ .monitor
┃ ⬡ .smeme
┃ ⬡ .call <nomer>
┃ ⬡ .halah <teks>
┃ ⬡ .hilih <teks>
┃ ⬡ .huluh <teks>
┃ ⬡ .heleh <teks>
┃ ⬡ .holoh <teks>
┃ ⬡ .modapk
┃ ⬡ .addvn
┃ ⬡ .addmsg
┃ ⬡ .addvideo
┃ ⬡ .addaudio
┃ ⬡ .addimg
┃ ⬡ .addstiker
┃ ⬡ .addgif
┃ ⬡ .delmsg
┃ ⬡ .all
┃ ⬡ .listdoc
┃ ⬡ .listvn
┃ ⬡ .listmsg
┃ ⬡ .listvideo
┃ ⬡ .listgif
┃ ⬡ .listaudio
┃ ⬡ .listimg
┃ ⬡ .liststicker
┃ ⬡ .qr
┃ ⬡ .qrcode
┃ ⬡ .react
┃ ⬡ .readmore
┃ ⬡ .spoiler
┃ ⬡ .readviewonce
┃ ⬡ .spamwa <number>|<mesage>|<no of messages>
┃ ⬡ .wastalk
┃ ⬡ .style
┃ ⬡ .tomp3
┃ ⬡ .tovn
┃ ⬡ .upload
┃ ⬡ .translate
┃ ⬡ .tts
┃ ⬡ .run
┃ ⬡ .zodiac *2001 11 15*
╚━━━━━━━━━━━━✧
 _©Vylaa ᥱᥣíᥲᥒᥲ_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['toolsmenu']
handler.tags = ['main']
handler.command = /^(toolsmenu)$/i

export default handler