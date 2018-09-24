import * as stringCalculator from './StringCalculator.js'

describe("Calculator Spec for the add function", () => {

    it("should return 0 if input is an empty string", () => {
        expect(stringCalculator.add("")).to.equal(0)
    })

    it("should return 1 if input is \"1\"", function () {
        expect(stringCalculator.add("1")).to.equal(1)
    })

    it("should return 2 if input is \"0,2\"", function () {
        expect(stringCalculator.add("0,2")).to.equal(2)
    })

    it("should return 17 if input is \"9,8\"", function () {
        expect(stringCalculator.add("9,8")).to.equal(17)
    })

    it("should return 18 if input is \"9,8,1\"", function () {
        expect(stringCalculator.add("9,8,1")).to.equal(18)
    })

    it("should return 11 if input is \"1,1,1,1,1,1,1,1,1,1,1\"", function () {
        expect(stringCalculator.add("1,1,1,1,1,1,1,1,1,1,1")).to.equal(11)
    })

    it("should throw an exception if input is a negative number", function () {
        expect(function(){stringCalculator.add("-1,2")}).to.throw("Invalid number!")
    })

    it("should ignore numbers > 1000", function () {
        expect(stringCalculator.add("2,1001,4")).to.equal(6)
    })

    it("should return 6 if input is \"1\\n2,3\"", function () {
        expect(stringCalculator.add("1\n2,3")).to.equal(6)
    })

    it("should throw an exception if input is \"1,\\n\"", function () {
        expect(function(){stringCalculator.add("1,\n")}).to.throw("Invalid number!")
    })

    it("should allow a specific delimiter, e.g. \"// \\n1 2\"", function () {
        expect(stringCalculator.add("// \n1 2")).to.equal(3)
    })

    it("should allow a specific delimiter, e.g. \"//[...]\n1...2...3\"", function () {
        expect(stringCalculator.add("//[...]\n1...2...3")).to.equal(6)
    })
})
