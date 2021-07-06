const requestResponse = {
    gagal: (pesan) => {
        return {
            sukses: false,
            pesan: pesan
        }
    },
    sukses: (pesan) => {
        return {
            sukses: true,
            pesan: pesan
        }
    },
    serverError: {
        sukses: false,
        pesan: 'Terjadi Kesalahan Diserver kami'
    },
    suksesLogin: (data) => {
        return {
            sukses: true,
            pesan: 'Berhasil Login',
            data: data
        }
    },
    suksesWithData: (data) => {
        return {
            sukses: true,
            pesan: 'Berhasil Memuat Data',
            data: data
        }
    }

}
module.exports = { requestResponse }