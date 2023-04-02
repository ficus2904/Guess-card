# Flask app with TailwindCSS and JavaScript

This is a simple Flask app that demonstrates how to use TailwindCSS and JavaScript to create a memory card game.
<br>Live demo https://guess-card.onrender.com

## Features

The app has the following features:

- Users can select a set of images to use in the game.
- The game board is dynamically created using JavaScript and HTML.
- Users can flip over cards and try to match pairs.
- The game keeps track of the number of flips and the number of matched pairs.
- Users can start a new game by selecting a new set of images.

## Technologies Used

The app uses the following technologies:

- Flask, a Python web framework, for the backend.
- TailwindCSS, a CSS framework, for styling.
- JavaScript for creating the game board and handling user interactions.

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the required packages by running `pip install -r requirements.txt`.
3. Run the app by running `flask run`.
4. Open your web browser and go to `http://localhost:5000`.

## Customizing the App

To customize the app, you can make changes to the following files:

- `app.py`: This file contains the Flask app and the routes for the app.
- `static/css/output.css`: This file contains the custom CSS for the app.
- `static/js/game.js`: This file contains the JavaScript for the game.

You can also add new images to the `static/img` folder and update the JavaScript code to use those images.

## Credits

This app was created by Dmitriy Barabash.

## License

This app is licensed under the [MIT License](https://opensource.org/licenses/MIT).