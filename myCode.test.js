
const {sumTwoNumers} = require('./myCode')
// describe('MyCodeFucntions',()=>{

//     describe('MathFuctions',()=>{
//         beforeAll(()=>{
//             console.log('you know what i mean')
//         })
//         afterAll(()=>{
//             console.log('nigga we gon be alright')
//         })
//         beforeEach(()=>{
//             console.log('high in the room')
//         })
//         afterEach(()=>{
//             console.log('text menssage i do not know number')
//         })
        it('sum two numbers',()=>{
            expect(sumTwoNumers(2,3)).toBe(5)
        })
//         it('sum two numbers',()=>{
//             expect(sumTwoNumers(2,3)).toBe(5)
//         })
//     })
// })