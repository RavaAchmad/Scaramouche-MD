//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281212035575', '夢Raf', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281212035575' //Ganti
global.packname = '© Sticker by'
global.author = 'Scara-MD'
global.namebot = 'Scaramouche - MD'
global.wm = '© Scaramouche MD By Me?'
global.stickpack = '© Sticker by'
global.stickauth = 'Scaramouche-MD'
// Link Sosmed
global.sig = 'https://instagram.com/ravaja_'
global.sgh = 'https://github.com/ravaachmad'
global.sgc = 'https://chat.whatsapp.com/GFtm25cVEmC1ZtqoCenClf'
// Donasi
global.psaweria = '081212035575'
global.ptrakterr = '081212035575'
global.povo = '081212035575'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'jkPTcMidFP'
global.calip = 'ravaja'
global.lolkey = 'ichanzx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: 'https://api.xyroinee.xyz',
    calip: 'https://api.caliph.my.id/',
    nrtm: 'https://nurutomo.herokuapp.com',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    bcil: 'https://75.119.137.248:21587',
    neoxr: 'https://api.neoxr.eu.org/',
    zeks: 'https://api.zeks.me',
    gimez: 'https://masgimenz.my.id/',
    melcanz: 'https://melcanz.com',
    pencarikode: 'https://pencarikode.xyz',
    LeysCoder: 'https://leyscoders-api.herokuapp.com',
    restapi: 'https://x-restapi.herokuapp.com',
    dnz: 'https://danzzapi.xyz',
    xzn: 'https://skizo.tech/',
    males: 'https://malesin.xyz',
    lol: 'https://lolhuman.xyz',
}

/*Apikey*/
global.APIKeys = {
    'https://api.xyroinee.xyz': "jkPTcMidFP",
    'https://api.caliph.my.id/': "ravaja",
    'https://api.xteam.xyz': 'apikeyaine',
    'https://lolhuman.xyz': 'ichanzx',
    'https://skizo.tech/': 'ravaja',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://danzzapi.xyz': 'danzz',
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})