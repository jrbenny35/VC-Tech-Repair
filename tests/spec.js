describe('Valencia-Tech Repair Database website', function() {

  beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    /*---------------------------------------------*/

  it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Valencia Tech Repair');
    });


})// End main test funcction
