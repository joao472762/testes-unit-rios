const {inOneHour} = require('./myCode2')

it('return timestamp for one hour',()=>{
    const realdateNow = Date.now.bind(global.Date)
    global.Date.now = () => 0;
    expect(inOneHour()).toBe(3600000)
    global.Date.now = realdateNow
})
