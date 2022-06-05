let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* Paypal.me/SsxrgioVD
 
_Al donar consigues_  *Premium* 


Si donas contactame por 
`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate'] 

export default handler
