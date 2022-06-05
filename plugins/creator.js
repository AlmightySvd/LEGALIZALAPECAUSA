function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *FG98*
▢ Instagram :
  • https://www.facebook.com/SvdRuthless/
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • https://github.com/FG98F
▢ Telegram : 
  • https://www.facebook.com/SvdRuthless/ (FG) 
  • https://www.facebook.com/SvdRuthless/ (canal)
  • https://www.facebook.com/SvdRuthless/ (grupo)
▢ Facebook : 
  • https://www.facebook.com/SvdRuthless/
  • https://www.facebook.com/SvdRuthless/
▢ YouTube : 
  • https://www.facebook.com/SvdRuthless/
  
 *≡ HELPERS*
  *CRISS*
▢ Instagram : https://www.instagram.com/sayurizuniga3
▢ WhatsApp : wa.me/
  *ANDREA*
▢ Instagram : https://
▢ WhatsApp : wa.me/2348035311575
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
