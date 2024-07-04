export class loginPage{

    weblocators = {
        _email:'#email',
        _name:'#name',
        _password:'#password',
        _login: 'button[type="submit"]',
        _logout: 'button[data-testid="logout"]',
        _note: '.navbar-brand.mb-2.mb-sm-0.logo_title'
        
    }

    visit() {
        cy.visit('/login');
    }

    setEmail(email){
        cy.get(this.weblocators._email).type(email)
    }

    setPassword(Password){
        cy.get(this.weblocators._password).type(Password)
    }

    clicklogin(){
        cy.get(this.weblocators._login).click()
    }

    clicklogout(){
        cy.get(this.weblocators._logout).click()
    }

    note(){
       return cy.get(this.weblocators._note)
         
    }

}
