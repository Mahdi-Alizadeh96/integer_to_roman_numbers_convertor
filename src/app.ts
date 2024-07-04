class RomanConvertor {

    private integerNumber : number;
    private romanNumber: string;
    private currentDigitCalculator: number;

    private digitChart = [
        {
            digit : 4,
            unit : 1000,
            romanHalf : "none",
            romanUnit : "M",
            nextRomanUnit : "none"
        },
        {
            digit : 3,
            unit : 100,
            romanHalf : "D",
            romanUnit : "C",
            nextRomanUnit : "M"
        },
        {
            digit : 2,
            unit : 10,
            romanHalf : "L",
            romanUnit : "X",
            nextRomanUnit : "C"
        },
        {
            digit : 1,
            unit : 1,
            romanHalf : "V",
            romanUnit : "I",
            nextRomanUnit : "X"
        }
    ]

    constructor () {

        this.integerNumber = 0;

        this.currentDigitCalculator = 0;

        this.romanNumber = "";

    }

    convert(integerNumber : number) {

        this.romanNumber = "";

        this.integerNumber = integerNumber;

        const checkConstraints = this.checkValueConstraints();

        const checkIsInteger = this.isInteger();

        if (!checkConstraints || !checkIsInteger) {

            return "Input value is invalid.";

        } else {

            this.startStateDetector();

            this.calculator();

            return this.romanNumber;

        }

    }

    private isInteger() {

        return Number.isInteger(this.integerNumber);

    }

    private checkValueConstraints() {

        if (this.integerNumber < 1 || this.integerNumber > 3999) {

            return false;

        } else {

            return true;

        }

    }

    private startStateDetector() {

        const convertToString : string = String(this.integerNumber);

        this.currentDigitCalculator = convertToString.length;

    }

    private isException() {

        const spreadNumber = String(this.integerNumber);

        if (Number(spreadNumber[0]) === 4 || Number(spreadNumber[0]) === 9) {

            return true

        } else {

            return false

        }

    }

    private isGreaterThanHalfOfSpan() {

        const spreadNumber = String(this.integerNumber);

        if (Number(spreadNumber[0]) >= 5) {

            return true;

        } else {

            return false;

        }

    }

    private calculator() {

        while (this.currentDigitCalculator !== 0) {

            const currentState = this.digitChart.find(item => item.digit === this.currentDigitCalculator);

            if (currentState) {

                const unitPower = Math.floor(this.integerNumber / currentState.unit);

                if(unitPower === 0) {

                    this.currentDigitCalculator --;

                    continue;

                }
   
                const remainedNumber = this.integerNumber % currentState.unit;
               
                const checkGreaterThanHalfOfSpan = this.isGreaterThanHalfOfSpan();
       
                const checkIsException = this.isException();

                if (checkGreaterThanHalfOfSpan) {
       
                    if (!checkIsException) {
       
                        this.romanNumber += currentState.romanHalf + currentState.romanUnit.repeat(unitPower - 5);
       
                    } else {
       
                        this.romanNumber += `${currentState.romanUnit}${currentState.nextRomanUnit}`;

                    }
       
                } else {
       
                    if (!checkIsException) {
       
                        this.romanNumber += currentState.romanUnit.repeat(unitPower);
       
                    } else {
       
                        this.romanNumber += `${currentState.romanUnit}${currentState.romanHalf}`;
       
                    }
                   
                }
               
                this.integerNumber = remainedNumber;

                this.currentDigitCalculator --;

            }

        }

    }

}

export default RomanConvertor;