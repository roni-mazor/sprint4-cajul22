export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    getMonthName,
    getColors,
    getBackgroundColors,
    debounce,
    getFormatedTime,
    getDetailedTime
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[date.getMonth()]
}

function getColors() {
    return [

        { color: '#B7DDB0', colorName: 'light-green' },
        { color: '#F5EA92', colorName: 'light-yellow' },
        { color: '#FAD29C', colorName: 'light-orange' },
        { color: '#EFB3AB', colorName: 'light-red' },
        { color: '#DFC0EB', colorName: 'light-purple' },
        { color: '#7BC86C', colorName: 'green' },
        { color: '#F5DD29', colorName: 'yellow' },
        { color: '#FFAF3F', colorName: 'orange' },
        { color: '#EF7564', colorName: 'red' },
        { color: '#CD8DE5', colorName: 'purple' },
        { color: '#5AAC44', colorName: 'dark-green' },
        { color: '#E6C60D', colorName: 'dark-yellow' },
        { color: '#E79217', colorName: 'dark-orange' },
        { color: '#CF513D', colorName: 'dark-red' },
        { color: '#A86CC1', colorName: 'dark-purple' },
        { color: '#8BBDD9', colorName: 'light-blue' },
        { color: '#8FDFEB', colorName: 'light-sky' },
        { color: '#B3F1D0', colorName: 'light-lime' },
        { color: '#F9C2E4', colorName: 'light-pink' },
        { color: '#505F79', colorName: 'light-black' },
        { color: '#5BA4CF', colorName: 'blue' },
        { color: '#29CCE5', colorName: 'sky' },
        { color: '#6DECA9', colorName: 'lime' },
        { color: '#FF8ED4', colorName: 'pink' },
        { color: '#344563', colorName: 'black' },
        { color: '#026AA7', colorName: 'dark-blue' },
        { color: '#026AA7', colorName: 'dark-sky' },
        { color: '#4ED583', colorName: 'dark-lime' },
        { color: '#E568AF', colorName: 'dark-pink' },
        { color: '#091E42', colorName: 'dark-black' },

    ]
}
function getBackgroundColors() {
    return [
        '#5AAC44', '#E6C60D', '#E79217', '#CF513D', '#A86CC1',
        '#026AA7', '#00AECC', '#6DECA9', '#C1C7D0', '#E568AF',
    ]
}

function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

function getFormatedTime(time) {

    const date = new Date(time)
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${month} ${_padNum(day)} at ${_padNum(hour)}:${_padNum(minutes)}`
}
function getDetailedTime(time) {
    const minutesTamplate = 1000 * 60
    const hoursTamplate = 1000 * 60 * 60
    if (Date.now() - time < 1000 * 10) return 'just now'
    if (Date.now() - time < 1000 * 60) return 'a few seconds ago'
    if (Date.now() - time < 1000 * 60 * 60) return `${Math.ceil((Date.now() - time) / minutesTamplate)} minutes ago`
    if (Date.now() - time < 1000 * 60 * 60 * 24) return `${Math.ceil((Date.now() - time) / hoursTamplate)} hours ago`

    const date = new Date(time)
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return `${month} ${_padNum(day)} at ${_padNum(hour)}:${_padNum(minutes)}`
}

function _padNum(num) {
    return (num > 9) ? num + '' : '0' + num
}