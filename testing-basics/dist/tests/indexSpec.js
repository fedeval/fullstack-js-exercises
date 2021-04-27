"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
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
