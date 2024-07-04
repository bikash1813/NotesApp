import {registerPage} from '../../../pages/ui/registerPage'
const registerObj = new registerPage()
import regsterData from '../../../fixtures/registerParameter.json'


describe('Register to app', () => {
    beforeEach (()=>{
        registerObj.openURL();

    })
    
    it('register as new user', () => {
        try {
            cy.log('starting to registration test');
            registerObj.clickCreateAccount()
            registerObj.setEmail(regsterData.email)
            registerObj.setName(regsterData.name)
            registerObj.setPassword(regsterData.password)
            registerObj.setConfirmPassword(regsterData.password)
            registerObj.clickRegister()
            registerObj.successMessage().should('contain',regsterData.successMessage)
            cy.log('Email registration test completed successfully');
        } catch(error){
            cy.log('Email registration test failed: $${error.message}');
            throw error;
        }
    });

    
  });