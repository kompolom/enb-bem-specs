modules.define('spec', function(provide) {

    describe('block-1', function() {
        it('should be equal to one', () => {
            (1*1).should.to.equal(1);
        });
    });

    provide();

});
