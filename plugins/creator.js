function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *NADA-SERGIO*
▢ Instagram :
  • http://Instagram.com/not.sxrgio
▢ WhatsApp :
  • (wa.me/2348035311575) 
▢ GitHub :
  • 
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
  *SERGIO-NADA*
▢ Instagram : https://www.instagram.com/sayurizuniga3
▢ WhatsApp : wa.me/
  *SOPORTE*
▢ Instagram : https://
▢ WhatsApp : wa.me/2348035311575
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
