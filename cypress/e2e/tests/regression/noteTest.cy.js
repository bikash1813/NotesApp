import {notePage} from '../../../pages/ui/notePage'
const notePageObj = new notePage()
import notesParameter from '../../../fixtures/notesParameter.json'
import loginParameter from '../../../fixtures/loginParameter.json'


describe('notes suit', () => {
    beforeEach (()=>{
        cy.login(loginParameter.email, loginParameter.password)

    })
    
    it('Verify user can create a note', () => {
        try {
            const title = notePageObj.generateRandomText();
            const desc = notePageObj.generateRandomText();
            cy.log('click on add note btn');
            notePageObj.addNoteBtn()
            cy.log('selecting a category');
            notePageObj.selectCategory()
            cy.log('adding title');
            notePageObj.addTitle(title)
            cy.log('adding description');
            notePageObj.addDesc(desc)
            cy.log('click on create note');
            notePageObj.createBtn()
            cy.log('verify note with the title is created');
            notePageObj.verifyNoteByTitle(title);
        } catch(error){
            cy.log('Failed');
            throw error;
        }
    })


    it('Verify note can be edited', () => {
        try {
            const desc = notePageObj.generateRandomText();
            cy.log('Click on edit button');
            notePageObj.editBtn()
            cy.log('update desc');
            notePageObj.addDesc(desc)
            cy.log('click on save');
            notePageObj.saveBtn()
            cy.log('verify note with the desc is edited');
            notePageObj.verifyNoteByDesc(desc);
        } catch(error){
            cy.log('Failed');
            throw error;
        }
    })

    it('delete note', () => {
        try {
            cy.log('Click on delete button');
            notePageObj.deleteNote()
            cy.log('click on confirm');
            notePageObj.confirmDelete()
            cy.log('delete pass');
        } catch(error){
            cy.log('Failed');
            throw error;
        }  
    });
   
})
