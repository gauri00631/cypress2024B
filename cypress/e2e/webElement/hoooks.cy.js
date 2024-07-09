///<reference types ="cypress"/>
//before , beforeEach , afterEach ,after

before(function(){
    cy.log('This statement will execute ones only..')
})
 beforeEach(function(){
    cy.log('This statement will execute every time even test case run')
 })

it('test case first',function(){
    cy.log('this is test case first')
})
it('test case second',function(){
    cy.log('this is test case second')
})
afterEach(function(){
    cy.log('ill execute after each test case')
})
after(function(){
    cy.log('it will execute last of the tc')   // tc test case
})