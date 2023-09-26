import calculator from "calculator";


describe("operações basicas calculadora", () => {

    it("soma dos numeros", () => {
        const calculator = require('calculator')
		const resultado = calculator.sum(1,3);
        expect(resultado).toEqual(3);

    });  

});

