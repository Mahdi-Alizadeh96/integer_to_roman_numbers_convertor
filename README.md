# Roman Numeral Convertor

This project is a TypeScript-based application that converts integers to Roman numerals. It is inspired by the LeetCode problem [Integer to Roman](https://leetcode.com/problems/integer-to-roman/).

## Table of Contents

- [Introduction to Roman Numerals](#introduction-to-roman-numerals)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Explanation of Each Part](#explanation-of-each-part)
  - [RomanConvertor Class](#romanconvertor-class)
  - [Index File](#index-file)
- [Running the Application](#running-the-application)

## Introduction to Roman Numerals

Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet: I, V, X, L, C, D, and M.

### Roman Numeral Symbols

- **I**: 1
- **V**: 5
- **X**: 10
- **L**: 50
- **C**: 100
- **D**: 500
- **M**: 1000

### History

Roman numerals were developed in ancient Rome and used in the Roman Empire. The numbers 1, 2, 3, etc., are represented as I, II, III, etc., up to the number 10, which is represented as X. The numbers continue similarly, with larger numbers being combinations of these letters. For example, 4 is represented as IV (one less than 5), and 9 as IX (one less than 10).

The use of Roman numerals continued even after the fall of the Roman Empire, influencing the numeral systems of many languages and cultures. Today, they are often used in specific contexts, such as clock faces, book chapters, movie sequels, and important events like the Olympic Games and the Super Bowl.

## Setup and Installation

1. **Ensure TypeScript is Installed**:
   Make sure TypeScript is installed globally on your system. You can install it using npm:
   ```sh
   npm install -g typescript
   ```

2. **Clone the Repository**:
   ```sh
   git clone https://github.com/Mahdi-Alizadeh96/integer_to_roman_numbers_convertor.git
   cd roman-numeral-convertor
   ```

3. **Install Dependencies**:
   ```sh
   npm install
   ```

## Usage

To start the application, use the following command:

```sh
npm start
```

You will be prompted to enter an integer. The application will convert the integer to its corresponding Roman numeral. Type `exit` to quit the application.