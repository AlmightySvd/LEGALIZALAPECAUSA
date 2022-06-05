function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Sergio & Gabriel*
▢ Instagram :
  • instagram.com/not.sxrgio
▢ WhatsApp :
  • wa.me/51977802958
  
 *≡ HELPERS*
  *-----------*
▢ Instagram : 
▢ WhatsApp : wa.me/
  *SOPORTE*
▢ Instagram : https://instagram.com/not.sxrgio
▢ WhatsApp : 
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
