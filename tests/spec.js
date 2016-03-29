describe('Valencia-Tech Repair Database website', function() {

    /*---------------------------------------------*/

  it('should have a title', function(){
        browser.get('http://localhost:3000');
        expect(browser.getTitle()).toEqual('Valencia Tech Repair');
    });


})// End main test funcction
