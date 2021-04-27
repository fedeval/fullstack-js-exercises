"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
/* Your task is to write at least one spec per function used on the index.ts file.
There should be at least 7 specs.
You must use at least 5 different matchers for your tests.
All of your specs can be on 1 spec file. */
describe("cut3", function () {
    it("removes the third element of an array", function () {
        var testArray = [1, 2, 4, 5];
        var thirdElement = testArray[2];
        expect(arrays_1.default.cut3(testArray)).not.toContain(thirdElement);
    });
});
describe("sum", function () {
    var num1 = 1;
    var num2 = 2;
    it("returns a number", function () {
        expect(typeof numbers_1.default.sum(num1, num2)).toBe("number");
    });
    it("returns the sum of two numbers", function () {
        expect(numbers_1.default.sum(num1, num2)).toEqual(3);
    });
});
describe("capitalize", function () {
    it("returns a string with the first letter capitalized", function () {
        var testSentence = "hello, world";
        expect(strings_1.default.capitalize(testSentence)[0]).toMatch(/[A-Z]/);
    });
});
describe("multiply", function () {
    var num1 = 4;
    var num2 = 5;
    var zero = 0;
    it("returns the product of two numbers", function () {
        expect(numbers_1.default.multiply(num1, num2)).toEqual(20);
    });
    it("returns zero if one of the arguments is zero", function () {
        expect(numbers_1.default.multiply(zero, num1)).toBeFalsy();
    });
});
describe("lgNum", function () {
    it("returns the largest number in the array", function () {
        var testArray = [4, 1, 20, 14, 4];
        expect(arrays_1.default.lgNum(testArray)).toEqual(20);
    });
});
