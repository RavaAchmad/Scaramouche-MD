const isToxic = /(anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|asu|ktlajg|ngentot)/i;
let handler = m => m
handler.before = async function(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    if (chat.antiToxic && isAntiToxic) {
    let vn = "./vn/toxic.mp3"
	conn.sendFile(m.chat, vn, "toxic.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
if (isBotAdmin && bot.restrict) {
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }}, m)
        }
    }
    return !0
}
module.exports = handler