/// <reference types="cypress" />

class PersonalDetailsLocators  {
    elements = {
        getFirstNameTxtFiels:()=> cy.get('input[name="firstname"]'),
        getPrefixTxtFields:()=>cy.get('input[name="firstname"]'),
        getLastNameTxtFiels:()=> cy.get('input[name="firstname"]'),
        getGenderFemaleFields:()=>cy.get('input[id="gender-female"]'),
        getGenderMaleFields:()=>cy.get('input[id="gender-male"]'),
        getGenderOtherFields:()=>cy.get('input[id="gender-other"]'),
        getHeighTxtFields:()=>cy.get('input[name="height"]'),
        getStreerTxtFields:()=>cy.get('input[name="street"]'),
        getHouseNumberTxtFields:()=>cy.get('input[name="houseNumber"]'),
    }


    TypeFirstName(firstName){
        this.elements.getFirstNameTxtFiels().type(firstName);
    }
}
export default PersonalDetailsLocators