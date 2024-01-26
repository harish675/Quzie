# Magical Arena

Magical Arena is a simple Java project that simulates a turn-based battle between two players.

## Pre-Installation

Before running the program, ensure you have the following installed:

- Java Development Kit (JDK) - The project is written in Java, so you need JDK installed on your system to compile and run the code.
- Java IDE or Text Editor - You can use any Java IDE (e.g., IntelliJ IDEA, Eclipse) or a text editor (e.g., VS Code, Sublime Text) to edit and compile the Java files.

## Classes

### `Arena`

The `Arena` class manages the battle between two players. It includes methods to start the match, calculate damage, and determine the winner.

### `Player`

The `Player` class represents a player in the arena. It contains attributes such as health, strength, attack, and name. 

### `Main`

The `Main` class contains the `main` method to execute the program. It takes input for two players and initiates the battle in the arena.

## Running Tests

To run the tests, use a testing framework such as JUnit. The tests are located in the `test` package and cover the functionality of both the `Arena` and `Player` classes.

## Running the Main Program

To run the main program:

1. Compile the Java files using a Java compiler.
2. Execute the compiled `Main` class.
3. Follow the prompts to enter details for the two players.
4. The program will simulate the battle in the arena and display the winner.

## Sample Test

A sample test class `ArenaTest` is provided to demonstrate how to test the functionality of the `Arena` class. It includes tests for scenarios where Player A wins and where Player B wins.

## Sample Player Test

Another sample test class `PlayerTest` is provided to test the functionality of the `Player` class. It tests whether the attributes of the player are set correctly.

## Contributing

Feel free to contribute to this project by forking the repository and submitting a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
