
/// <reference types="cypress" />
import SearchLocator from '../../page-objects/SearchLocator';
import SubscriptionLocators  from '../../page-objects/SubscriptionLocators'; 
import PersonalDetailsLocators  from '../../page-objects/PersonalDetailsLocators'; 

const search = new SearchLocator();
const subscription= new SubscriptionLocators();
const details= new PersonalDetailsLocators();

describe('Go to Swapfiets site ', () => {
    beforeEach(() => {
        cy.viewport(1279, 800)
      })

    it('visit Swapfiets and Search for bikes in London',()=>{
       search.visitSwapfietsUKpage();
       cy.url().should('eq','https://swapfiets.co.uk/')

      search.checkChooseCitytxtBox();
      search.typeChooseCitytxtBox();
      search.checkSeeBikesbtn("See bikes"); //assert see bikes button exists and thatit contains See bikes text
      search.clickSeeBikesBtn(); //user click on See bikes button
    })

    it('Bikes in London',()=>{
        //assert that user is navigated to the correct url
        cy.url().should('eq','https://swapfiets.co.uk/london')

        //assert that change button exists and is clickable
        search.checkchangeBtn();

        //assert that pop is displayed and close it
        search.checkPopUp();

        //assert that show product buttons exists 
          search.checkAllRadioBtn();
          search.checkEbikeRadioBtn();
          search.checkCitybikeRadioBtn();
          //assert that 'more details' link exists and are clickable
          search.checkMoreDetailsLink('More details');
          //    search.clickMoreDetailsLink();
           //cy.go(-1);
         cy.visit('https://swapfiets.co.uk/london');

        // search.checkNumOfProducts();
        cy.get('[data-test-id=city-product-list-item]').should('have.length', 4);
        cy.contains('[data-test-id=city-product-list-item]', 'Original');
        cy.contains('[data-test-id=city-product-list-item]', 'Deluxe 7');
        cy.contains('[data-test-id=city-product-list-item]', 'Power 1');
        cy.contains('[data-test-id=city-product-list-item]', 'Power 7');


        //assert that Sidemenu is functional
        search.checkSideMenuBtn();
        //close side menu
        search.checkSideMenuCloses();

    })
    it('Subscribe to a Power 1',()=>{
        //subscribe to Power 1
        subscription.clickOnSubscriptionBtn();
        //assert that Loyal membership is preselected 
        subscription.checkLoyalMembershipBtn();

       //assert that flex  membership is not selected
        subscription.checkFlexMembershipBtn();

        //assert that when Loyal Membership and Yes bike usage is selected On Of is zero Monthly costs £109.90
         subscription.checkMontlyFieldHasValue("£109.90");   

        //assert that when Flex Membership and Yes bike usage is selected On Of has value
         subscription.checkOnOffHasValue("£39.90");

        
    })

    it('Proceed with the Order',()=>{
        subscription.clickOnOrderBikeBtn();
    })


    it('Fill in Personal Details',()=>{

        //type firstName
        details.TypeFirstName("Evi");
        details.TypePrefix("fi");
        details.TypeLastName("Dom");
        details.selectDay();
        details.selectMonth();
        details.selectYear();
        details.CheckGender();
        details.enterHeight("160");
       // details.OnHoverMsg();
        details.enterStreet("Filaretou");
        details.enterHouseNumber("17");
        details.enterAddition("addition");
        details.enterPostalCode("BD1 2RD");
        details.enterCityField("London");

          //assert that Country fiels is not editable
          details.checkCountryBtn();

        details.enterEmailAddress("evi.dimitropoulou@gmail.com");
        details.selectTelephoneCode();
        details.enterPhone("6984278733");
        details.enterComments("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
       
        //assert on Hover Window is displayed
        

        details.clickOnTermsAndConditions();
        details.clickOnGDPR();

          details.clearNameField();
        details.clickOnNextButton();

        
        details.checkRequiredErrorMessage("This field is required");
        
    })


})