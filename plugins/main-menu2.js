let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/4a4055864a519ccbe891e.jpg'
let sewa = `*_Mohon Jangan Spam Bot!_*\n*_Mohon Jangan Call Bot!_*\n\n〘 𝗕𝗘𝗥𝗜𝗞𝗨𝗧 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨!〙\n*┏ぎ allmenu*\n*│ぎ mainmenu*\n*│ぎ aimenu*\n*│ぎ groupmenu*\n*│ぎ gamemenu*\n*│ぎ rpgmenu*\n*│ぎ stikermenu*\n*│ぎ makermenu*\n*│ぎ animanga*\n*│ぎ nsfwmenu*\n*│ぎ internet*\n*│ぎ downloadmenu*\n*│ぎ toolsmenu*\n*│ぎ islamic*\n*│ぎ quotesmenu*\n*│ぎ random*\n*┗ぎ ownermenu*\n\n_©VylaaaChann_`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
