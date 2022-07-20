let myClock = document.querySelector('.myClock');
const showClock = () => {
    const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let meridiem = ''

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second
    meridiem = hour <= 12 ? meridiem = 'AM' : meridiem = 'PM'
    hour = hour == 00 ? hour = 12 : hour > 12 ? hour = hour - 12 : hour
    let clock = `${hour} : ${minute} : ${second} ${meridiem}`
    myClock.textContent = clock
}

setInterval(showClock, 100);