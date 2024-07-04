import {loginPage} from '../../../pages/ui/loginPage'
const loginObj = new loginPage()
import loginParameter from '../../../fixtures/loginParameter.json'


describe('Login suit', () => {
    
    it('Verify user can login', () => {
        try {
            cy.log('visiting login page');
            loginObj.visit()
            cy.log('Verify user can login using email and password');
            loginObj.setEmail(loginParameter.email)
            loginObj.setPassword(loginParameter.password)
            loginObj.clicklogin()
            loginObj.note().should('exist')
            cy.log('Login Successful');
        } catch(error){
            cy.log('Failed');
            throw error;
        }
    })

   
})
