
//________________________________________________________________________________________________________________________
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

//══════════[ Setting ]══════════//

autoread = true
autocomposing = false
autorecording = false
//----

let owner = '6288221400832' // NO OWNER
let botname = '©DANNSTORE.ID-Bot' // NAMA BOT
let ownername = 'Eka Danu Arta' // NAMA OWNER
let fake = '©DANNSTORE.ID-Bot' // FAKENYA
let yt = 'https://instagram.com/itsme_danuu' // YT LU
let gopay = '6288221400832 / EKA DANU ARTA' // QRGOPAY / NO GOPAY
let dana = '6288221400832 / EKA DANU ARTA' // QRDANA / NO DANA
let bca = '__' // QROVO / NO OVO
let pulsa = '6288221400832' // PULSA

const fakeimage = fs.readFileSync ('./media/eka.jpg')
const fakedanu = fs.readFileSync ('./media/thumb.jpg')

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//══════════[ Module Export ]══════════//
		
module.exports = Eka = async (Eka, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Eka.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6282175912515@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Eka.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Eka.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Eka.user.jid : Eka.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Eka.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Eka.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//

mess = {
wait: '𝙋𝙍𝙊𝙎𝙀𝙎 ....',
eror: '𝙈𝘼𝘼𝙁 𝙏𝙀𝙍𝙅𝘼𝘿𝙄 𝙆𝙀𝙎𝘼𝙇𝘼𝙃𝘼𝙉 !!',
success: '𝙎𝙐𝙆𝙎𝙀𝙎 ✅️',
error: {
stick: '𝙈𝘼𝘼𝙁 𝙄𝙏𝙐 𝘽𝙐𝙆𝘼𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 !!',
Iv: '𝙇𝙄𝙉𝙆 𝙄𝙉𝙑𝘼𝙇𝙄𝘿 !!'
},
only: {
group: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘿𝙄 𝘿𝘼𝙇𝘼𝙈 𝙂𝙍𝙐𝙋 !!',
owner: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝙊𝙒𝙉𝙀𝙍 𝘽𝙊𝙏 !!',
admin: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝘼𝘿𝙈𝙄𝙉 𝙂𝙍𝙐𝙋 !!',
Badmin: '𝙅𝘼𝘿𝙄𝙆𝘼𝙉 𝘼𝘿𝙈𝙄𝙉 𝙅𝙄𝙆𝘼 𝙈𝘼𝙐 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙁𝙄𝙏𝙐𝙍  𝙄𝙏𝙐 !!'
}
}

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Eka.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Eka.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Eka.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Eka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Eka.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Eka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Eka.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Eka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Eka.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return Eka.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
Eka.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Eka.sendMessage(hehe, teks, text)
}
const fakeyt = (teks) => {
Eka.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${tanggal}`,
                "body": `${botname}`,
                "mediaType": "10",
                "mediaUrl": `${yt}`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fakeimage,
                "sourceUrl": `${yt}`,
},mentionedJid:[sender]}, quoted : mek})
};
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Eka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Eka.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Eka.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            Eka.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/eka.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Eka.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/eka.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakedanu, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//══════════[ Storage ]══════════//

        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Eka.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
           let anu = await Eka.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Eka.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/eka.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakeyt(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Eka.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
fakeyt('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Eka.groupRemove(from, [sender])
}     

//══════════[ Waktu Dll ]══════════//

if (autoread){
Eka.chatRead(from, "read")
} else if (autocomposing) {
Eka.updatePresence(from, Presence.composing)
} else if (autorecording) {
Eka.updatePresence(from, Presence.recording)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITUR OY ]══════════//
case 'menu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*



*𝗠𝗘𝗡𝗨*

⊛ ${prefix}format
⊛ ${prefix}payment
⊛ ${prefix}ff
⊛ ${prefix}mla
⊛ ${prefix}kodereedem
⊛ ${prefix}mlb
⊛ ${prefix}genshin
⊛ ${prefix}sausage

_________________________________`
teks =
`「 ${botname} 」\n*${tanggal}*`
Eka.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//══════════[ STORE ]══════════//

case 'store':
               list = []
               listmenu = [`format`,`ff`,`mla`,`ucpubg`,`cod`,`sausageman`,`kodereedem`,`payment`,`mlb`,`genshin`]
               listmenuu = [`ᴍᴀsᴜᴋᴀɴ ᴅᴀᴛᴀ`,`ᴅɪᴀᴍᴏɴᴅ ғʀᴇᴇ ғɪʀᴇ`,`ᴅɪᴀᴍᴏɴᴅ ᴍᴏʙɪʟᴇ ʟᴇɢᴇɴᴅ`,`ᴜᴄ ᴘᴜʙɢ`,`ᴄᴀʟʟ ᴏғ ᴅᴜᴛʏ ᴍᴏʙɪʟᴇ`,`sᴀᴜsᴀɢᴇ ᴍᴀɴ`,`kodereedem`,`ᴘᴀʏᴍᴇɴᴛ`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Silakan Di Pilih',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ] 
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak ${pushname}, Mau Buy Kah ?`, list)
               break
case 'proses':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu = `_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_`
reply(menu)
break
case 'done':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu =`_Done Kak Orderan Telah Di Terima_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_


_All Trx No Reff Jadi Barang Tidak Bisa  Di Kembalikan Karna Sudah Bilang Done !!_`
reply(menu)
break

case 'format':
menu =`*${ucapanWaktu} @${sender.split('@')[0]}*
*Sebelum lanjut, Mohon diisi dulu !!*


Untuk Mobile Legend & Genshin Impact:
ID :
Server :
Nick : 
Jumlah Order :

Untuk Pulsa & PPOB:
Nomor HP/Nomor Meter:
Nama:
Nominal Order:

Untuk Social Media:
Link/Username:
Jumlah Order:

Untuk Lainnya :
ID :
Nick : 
Jumlah Order :

${tanggal}`
Eka.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Bayar' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'ff':
case 'diamondfreefire':
gambar = fs.readFileSync('./media/ff.jpg')
menunya = `*「 DIAMOND FREEFIRE 」*
*VIA ID + NICKNAME*

70💎 Rp 9.170
140💎 Rp 18.240
210💎 Rp 27.500
355💎 Rp 45.850
425💎 Rp 55.242
500💎 Rp 65.286
720💎 Rp 91.242
860💎 Rp 110.088
930💎 Rp 118.761
1000💎 Rp 130.104
1065💎 Rp 136.000
1275💎 Rp 161.375
1450💎 Rp 185.500
2000💎 Rp 249.300
4000💎 Rp 498.600
BERLAKU KELIPATAN
(JIKA JUMLAH ORDER TIDAK ADA, TINGGAL TAMBAHKAN SAJA) 

Membership Mingguan : Rp 27.800
Membership Bulanan : Rp 138.875

Jam Operasional : Buka 24 Jam
Estimasi proses : 1 - 10 menit
Proses maksimal 24 jam
*HARGA SEWAKTU WAKTU BERUBAH*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'mla':
case 'diamondmobilelegend':
gambar = fs.readFileSync('./media/ml.jpg')
menunya = `*「 DIAMOND MOBILE LEGENDS A 」*
*VIA ID+SERVER*

86💎 Rp 20.440
172💎 Rp 40.880
257💎 Rp 61.320
344💎 Rp 81.760
429💎 Rp 102.200
514💎 Rp 122.640
600💎 Rp 143.080
706💎 Rp 163.520
878💎 Rp 204.400
963💎 Rp 224.840
1050💎 Rp 245.280
1220💎 Rp 286.160
1412💎 Rp 327.040
2195💎 Rp 486.180
3073💎 Rp 690.580
3688💎 Rp 808.840
4031💎 Rp 890.600
5532💎 Rp 1.214.720
6238💎 Rp 1.378.240
9288💎 Rp 2.023.560
⏳ *Proses 1 - 15 Menit*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'sausage':
case 'candysausage':
gambar = fs.readFileSync('./media/sausage.jpg')
menunya = `*「 CANDY SAUSAGE MAN 」*
*VIA ID+NICKNAME*

60 CANDY 🍬 Rp. 13.500
180 CANDY 🍬 Rp. 37.500
316 CANDY 🍬 Rp. 63.500
718 CANDY 🍬 Rp. 125.500
1368 CANDY 🍬 Rp. 250.500
2118 CANDY 🍬 Rp. 396.500
7048 CANDY 🍬 Rp. 1.270.500
BERLAKU KELIPATAN
(Apabila jumlah Candy yg diinginkan tidak ada, silahkan kombinasi saja contoh 60+60)

*HARGA SEWAKTU WAKTU BERUBAH*
⏳ *Proses 1 - 15 Menit*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'genshin':
case 'genshinimpact':
gambar = fs.readFileSync('./media/genshin.jpg')
menunya = `*「 CRYSTAL GENSHIN IMPACT 」*
*VIA UID+SERVER*

300 + 30💎 Rp 64.800
980 + 110💎 Rp 198.800
1980 + 260💎 Rp 421.800
6480 + 1600💎 Rp 1.298.800

Blessing Welkin Moon  Rp.64.800

⏳ *Proses 1 - 15 Menit*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'mlb':
case 'diamondmobilelegend':
gambar = fs.readFileSync('./media/ml.jpg')
menunya = `*「 DIAMOND MOBILE LEGENDS B 」*
*VIA ID+SERVER*

39    💎       Rp9.200
65    💎       Rp15.200
92    💎       Rp21.200
133  💎       Rp30.200
266  💎       Rp59.200
400  💎       Rp89.200
534  💎       Rp118.200
670  💎       Rp148.200
1342💎       Rp295.200
2700💎        Rp594.800
4150💎        Rp892.400
7050💎        Rp1.486.034
⏳ *Proses 1 - 15 Menit*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'ucpubg':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 UC PUBG 」*

• *35 UC = 8.000*
• *50 UC = 4.000*
• *70 UC = 6.000*
• *150 UC = 9.000*
• *250 UC = 11.000*
• *500 UC = 21.000*
• *700 UC = 41.000*
• *1.000 UC = 61.000*
• *1.250 UC = 81.000*
• *1.750 UC = 102.000*
• *2.500 UC = 122.000*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'callofdutymobile':
case 'codm':
case 'cod':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 Call of Duty Mobile 」*

• *62 CP = 10.000*
• *127 CP = 20.000*
• *317 CP = 49.000*
• *634 CP = 97.000*
• *1.373 CP = 193.000*
• *2.059 CP = 290.000*
• *3.564 CP = 483.000*
• *7.656 CP = 964.000*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'sausageman':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 SAUSAGE MAN 」*

• *60 Candy = 8.000*
• *180 Candy = 4.000*
• *300 + 16 Candy = 6.000*
• *680 + 38 Candy = 9.000*
• *1.280 + 88 Candy = 11.000*
• *1.980 + 138 Candy = 21.000*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'kodereedem':
case 'kodereedem':
gambar = fs.readFileSync('./media/ml.jpg')
menunya = `KODE REEDEM MOBILE LEGENDS

50💎 Rp9.400 (100Pcs)
52💎 Rp9.500 (50Pcs)
101💎 Rp20.000 (30Pcs)
216💎 Rp40.000 (36Pcs)

*NOTE*
- REEDEM SENDIRI
- TIDAK TERHITUNG MISI TOP UP
- TANYA STOCK SEBELUM ORDER

_REDEEM SENDIRI DI WEB RESMI MOBILE LEGEND https://m.mobilelegends.com/en/codexchange_`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
     { buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment' }, type: 1 },
          { buttonId: `${prefix}format`, buttonText: { displayText: 'Format' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'bayar':
case 'payment':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PAYMENT 」*

• *Gopay : ${gopay}*
• *Dana : ${dana}*
• *BCA : ${bca}*
• *Scan Qris Di Atas Sesuai Nominal Harga!!*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

//══════════[ Fitur Owner ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Eka.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh Kak Ownerku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Eka.chats.all()
             if (isMedia && !Eka.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Eka).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Eka
             bc100 = await Eka.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Eka.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Eka.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
Eka.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break

case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Eka.downloadMediaMessage(encmedia)
Eka.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break

case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Eka.downloadMediaMessage(encmedia)
Eka.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break

case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await Eka.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
Eka.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break

case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Eka.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
Eka.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

//══════════[ Fitur Grup ]══════════//

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*GRUP ${groupMetadata.subject}*TELAH DIBUKA, GASSS ORDER!!`)
Eka.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Eka.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await Eka.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Eka.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Eka.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Eka.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Eka.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Eka.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args.length < 1) return fakeyt('Yang mau di add siapa??')
if (args[0].startsWith('08')) return fakeyt('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Eka.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
fakeyt('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Eka.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Eka.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
Eka.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Eka.groupUpdateSubject(from, `${body.slice(9)}`)
Eka.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Eka.groupUpdateDescription(from, `${body.slice(9)}`)
Eka.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Eka.downloadMediaMessage(encmedia)
Eka.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await Eka.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Eka.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Eka.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Eka.chats.get(ido).presences), Eka.user.jid]
Eka.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
