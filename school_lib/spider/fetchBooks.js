const axios = require('axios').default

const url = 'https://book.douban.com/latest'

async function getBooksHTML() {
    const res = await axios.get(url)
    return res.data
}
getBooksHTML()