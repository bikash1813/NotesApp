

export class notePage{

    weblocators = {
        _addNote:'button[data-testid="add-new-note"]',
        _select_category: '[data-testid="category-home"]',
        _title: '#title',
        _desc: '#description',
        _create: 'button[data-testid="note-submit"]',
        _editBtn: 'button[data-testid="note-edit"]',
        _saveBtn: 'button[data-testid="note-submit"]',
        _noteDesc: '[data-testid="note-card-description"]',
        _noteTitle: '[data-testid="note-card-title"]',
        _deleteBtn: 'button[data-testid="note-delete"]',
        _confirmDelete: '.btn.btn-danger'
    }   

    visit() {
        cy.visit('/login');
    }

    generateRandomText(length = 20) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];  
        }
        return result;
    }


    addNoteBtn(){
        cy.get(this.weblocators._addNote).click();
    }

    selectCategory(){
        cy.get(this.weblocators._select_category).click({force: true})

    }
    addTitle(title){
        cy.get(this.weblocators._title).type(title);
        
    }
    
    addDesc(desc){
        cy.get(this.weblocators._desc).clear().type(desc);     
    }

    deleteNote(){
        cy.get(this.weblocators._deleteBtn).first().click({force: true});
    }

   
    createBtn(){
        cy.get(this.weblocators._create).click();
    }

    verifyNoteByDesc(desc) {
        cy.get(this.weblocators._noteDesc).should('contain', desc)
    }

    verifyNoteByTitle(title) {
        cy.get(this.weblocators._noteTitle).should('contain', title)
    }

    editBtn(){
        cy.get(this.weblocators._editBtn).first().click();
    }

    saveBtn(){
        cy.get(this.weblocators._saveBtn).click();
    }

    confirmDelete(){
        cy.get(this.weblocators._confirmDelete).click()
    }

}
