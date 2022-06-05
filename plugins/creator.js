function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *------*
▢ Instagram :
  • 
▢ WhatsApp :
  • 
  
 *≡ HELPERS*
  *-----------*
▢ Instagram : 
▢ WhatsApp : wa.me/
  *SOPORTE*
▢ Instagram : 
▢ WhatsApp : 
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
