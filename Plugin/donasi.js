let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085755846460]
│ • Gopay [-]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285755846460
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa Indosat"
3.)Dan terus masukkan nomor kami 085755846460
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
