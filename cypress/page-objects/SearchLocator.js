/// <reference types="cypress" />

class SearchLocator {
    elements= {
        getChooseCitytxtBox :()=> cy.get('[data-test-id="city-selector-input"]'),
        getSeeBikesBtn:()=> cy.get('[data-test-id="city-selector-submit"]'),
        getChangeBtn:()=> cy.get('[data-test-id="open-city-selector-button"]'),
        getPopUpWindow:()=> cy.get('[data-test-id="dialog-close"]'),
        getAllRadioBtn:()=>cy.get('[data-test-id="radio-button"]'),
        getEbikesRadioBtn:()=>cy.get('[data-test-id="radio-button"]'),
        getCityBikesRadioBtn:()=>cy.get('[data-test-id="radio-button"]'),
        getMoreDetailsLink:()=>cy.get('[data-test-id="product-more-details-link"]'),
        getSideMenuBth:()=>cy.get('[data-test-id="sidemenu-hamburger"]'),
        getProductList:()=>cy.get('[data-test-id="city-product-list"]'),
        getProductItem:()=>cy.get('[data-test-id="city-product-list-item"]'),
        getCloseSideMenu:()=>cy.get('[data-test-id="sidemenu-close"]'),
    }

    visitSwapfietsUKpage(){
        cy.visit('https://swapfiets.com/en-GB')
    }

    checkChooseCitytxtBox(){
        this.elements.getChooseCitytxtBox().should('exist');
    }
    typeChooseCitytxtBox(){
        this.elements.getChooseCitytxtBox().type('London');
        cy.wait(1000);
    }
    checkSeeBikesbtn(text){
        this.elements.getSeeBikesBtn().should('contain',text);
    }
    clickSeeBikesBtn(){
        this.elements.getSeeBikesBtn().click();
    }
    checkchangeBtn(){
        this.elements.getChangeBtn()
        .should('exist')
        .click({force:true});
    }
    checkPopUp(){
        
        this.elements.getPopUpWindow()
        .should('be.visible')
        .click({force:true});
    }
    checkAllRadioBtn(){
        this.elements.getAllRadioBtn()
        .should('be.visible')
        .should('contain','All')
        .should('have.css','background-color','rgb(0, 169, 224)');
    }
    checkEbikeRadioBtn(){
        this.elements.getAllRadioBtn() 
        .should('be.visible')
        .should('contain','E-bikes');

    }
    checkCitybikeRadioBtn(){
        this.elements.getAllRadioBtn()
        .should('be.visible')
        .should('contain','City bikes');
    }

    checkMoreDetailsLink(name){
        this.elements.getMoreDetailsLink()
        .should('be.visible')
        .should('contain',name).click({multiple:true});
    }
    clickMoreDetailsLink(){
      cy.get('[data-test-id="product-more-details-link"]').click()
      cy.contains('More details');
    }
    checkSideMenuBtn(){
        this.elements.getSideMenuBth()
        .should('be.visible')
        .click({force:true});
    }
   checkSideMenuCloses(){
    this.elements.getCloseSideMenu()
     .click({force:true});
   }
   
} 
export default SearchLocator
