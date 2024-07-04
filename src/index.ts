import RomanConvertor from './app.js';
import readline from 'node:readline';

const romanConvertor = new RomanConvertor();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptUser = () => {

    rl.question('Enter an integer (or type "exit" to quit): ', (input: string) => {

        if (input.toLowerCase() === 'exit') {

            console.log('Goodbye!');
            rl.close();

        } else {

            const integer = parseInt(input, 10);

            if (!isNaN(integer)) {

                const result = romanConvertor.convert(integer);
                console.log(`Roman numeral: ${result}`);

            } else {

                console.log('Invalid input. Please enter a valid integer.');

            }

            promptUser();

        }

    });

};

promptUser();

rl.on('close', () => {

    console.log('Program terminated.');
    process.exit(0);
    
});