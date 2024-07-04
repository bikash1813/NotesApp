
export class registerPage{

    weblocators = {
        _crerateAccount:'.btn.btn-outline-secondary.btn-lg.px-4',
        _email:'#email',
        _name:'#name',
        _password:'#password',
        _confirmPassword:'#confirmPassword',
        _register:'button[type="submit"]',
        _success_message:"div[class='alert alert-success'] b"
        

    }

    openURL(){
        cy.visit('')
    }

    clickCreateAccount(){
        cy.get(this.weblocators._crerateAccount).click()
    }

    setEmail(Email){
        cy.get(this.weblocators._email).type(Email)
    }

    setName(Name){
        cy.get(this.weblocators._name).type(Name)
    }

    setPassword(Password){
        cy.get(this.weblocators._password).type(Password)
    }
    setConfirmPassword(CPassword){
        cy.get(this.weblocators._confirmPassword).type(CPassword)
    }

    clickRegister(){
        cy.get(this.weblocators._register).click()
    }

    successMessage(){
       return cy.get(this.weblocators._success_message)
         
    }
}
