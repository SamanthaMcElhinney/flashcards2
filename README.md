# JS Prototype FlashCards 

## Description

This project is a command-line-based flashcard application that allows users to view questions, provide answers, and receive a final score upon completion of a round. The project was developed using the Test Driven Development approach.

With this flashcard application, users can easily study and test their knowledge with multiple-choice questions, while also keeping track of their progress. The application provides immediate feedback for correct or incorrect answers, as well as a timed result for the duration of the test.

Additionally, the application is designed for adaptability, allowing users to easily add to the data set as their knowledge advances, thus making studying more effective and efficient.

## Contributors

- [Samantha](https://github.com/SamanthaMcElhinney)

## Preview of the App

![Alt text](flashcards2.gif)

## Technology Used

* Javascript
* TDD-- Mocha/Chai

## Set-Up

1. Fork this Repo
1. Open terminal and navigate where you would like to store the application. 
1. Click `SSH` and copy and paste key or `git@github.com:SamanthaMcElhinney/flashcards.git` into your terminal.
1. Once cloned, `cd` into the `flashcards` folder and type `node index.js` to run the file with flashcards provided.  
1. You should see a welcome message as follows: "Welcome to FlashCards! You are playing with 30 cards." At the end of the quiz a score will be provided. 
1. To exit you can hold down `control` + `c` to quit.

## Takeaways

This application was created using test driven development with Mocha framework and Chai testing library. I was given a spec with prompts to make a working application using modular, reusable code that follows Single Responsibility Principle. I used test driven development with my tests implementing both sad and happy path testing. This forced me to be more intential with my approach. I also used a project board for creating the MVP in less than 2 days. 

## Challenges:

Writing tests to include sad path testing.
Correctly implementing the order of methods for the game to run.
Successfully implementing an additional feature for tracking the user's time to finish the game.