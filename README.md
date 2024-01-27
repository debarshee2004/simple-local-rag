# Dino Web Browser

## Project Overview
Dino Web Browser is a simple web browser application developed in Python using the PyQt5 library. It provides basic functionalities such as navigating to websites, going backward and forward in the browsing history, and displaying web content.

## Library Used
The project utilizes the following PyQt5 modules:
- `QtWidgets`: Provides a set of UI components for building the graphical user interface.
- `QtCore`: Contains core non-GUI functionality, including event handling and the signal-slot mechanism.
- `QtWebEngineWidgets`: Enables the integration of a web engine for rendering HTML content.

## How It Works
The browser's main functionality is implemented in the `MyWebBrowser` class. Here's a brief explanation of the key components:

- **Window and Layout**: The main application window is created using `QWidget`, and the layout is structured using `QVBoxLayout` and `QHBoxLayout`.

- **URL Bar and Buttons**: The user interface includes a QTextEdit for entering URLs, a QPushButton for initiating the search, and two additional buttons for navigating backward and forward in the browsing history.

- **Browser Engine**: The web content is displayed using `QWebEngineView`, which is part of the QtWebEngine module.

- **Event Handling**: Connections between buttons and functions are established using the `clicked` signals. For example, clicking the search button triggers the `navigate` function, and the backward and forward buttons are connected to the `back` and `forward` functions of the web browser.

- **Default URL**: The default web page is set to "https://github.com/debarshee2004" when the application is initialized.

## Screenshots

### Version 01

### Version 02

## Setup
To run the Dino Web Browser, follow these steps:

1. Install the required libraries using the following command:
    ```
    pip install PyQt5 PyQtWebEngine
    ```

2. Copy and paste the provided Python code into a file with a `.py` extension.

3. Execute the script, and the Dino Web Browser window will appear.

4. Enter the desired URL in the URL bar, click the search button, and explore the web.

## Conclusion
Dino Web Browser is a lightweight web browser implemented in Python, making use of the PyQt5 library. While it offers basic web browsing functionalities, it serves as a foundation that can be extended to include additional features and improvements. Feel free to experiment and enhance the browser according to your requirements.