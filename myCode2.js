const  inOneHour= ()=>{
    const now = Date.now()
    const hoursInMileseconds = 1 * 60 * 60 * 1000
    return now + hoursInMileseconds
}
const hour = inOneHour()


module.exports = {inOneHour}