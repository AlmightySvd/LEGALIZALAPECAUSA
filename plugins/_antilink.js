let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*≡ Enlace Detectado*
            
𝑻𝑼 𝑬𝑵𝑳𝑨𝑪𝑬 𝑴𝑬𝑻𝑬𝑻𝑬𝑳𝑶 𝑨𝑳 𝑪𝑼𝑳𝑶 𝑪𝑯𝑶𝑳𝑶 𝑫𝑬 𝑴𝑰𝑬𝑹𝑫𝑨 
𝑺𝑨𝑭𝑨 𝑫𝑬 𝑨𝑸𝑼𝑰 𝑪𝑨𝑼𝑺𝑨 * ${await this.getName(m.sender)} *  𝑳𝑨𝑹𝑮𝑨𝑻𝑬 𝑩𝑨𝑩🐻 𝑫𝑬 𝑴𝑰𝑬𝑹𝑫𝑨 ${isBotAdmin ? '' : '\n\nNo soy admin así que no te puedo expulsar :"v'}`, igfg, ['Desactivar AntiLink', '/off antilink'], m)
        if (isBotAdmin && chat.antiLink) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
    
}
