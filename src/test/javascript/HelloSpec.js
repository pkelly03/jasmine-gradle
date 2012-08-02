describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });

    xit("says hello world - should fail!", function() {
        expect(helloWorld()).toEqual("Hello world.....");
    });

});