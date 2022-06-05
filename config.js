import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51977802958', 'SERGIO', true], 
  ['51912794828'], 
  ['12254384047'], 
 ['51977802958'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['51977802958', '12254384047', '51912794828']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '𝑩𝑶𝑻 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 𝑫𝑬'
global.author = '𝑳𝑬𝑮𝑨𝑳𝑰𝒁𝑨𝑳𝑨 𝑷𝑬 𝑪𝑨𝑼𝑺𝑨'
global.igfg = '\n▢ Sígueme en https://m.facebook.com/SvdRuthless/?__tn__=C-R\n' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'

global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file) 
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
