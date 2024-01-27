# Importing dependencies required for the project.
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *

class MyWebBrowser():

    def __init__(self):

        # Created the window for the Web Browser
        self.window = QWidget()
        self.window.setWindowTitle("Dino Web Browser")

        # Created the layout
        self.layout = QVBoxLayout()
        self.horizontal = QHBoxLayout()

        # Created the URL Bar
        self.url_bar = QTextEdit()
        self.url_bar.setMaximumHeight(30)

        # Created the Search Button
        self.go_btn = QPushButton("Search")
        self.go_btn.setMinimumHeight(30)

        # Created the Forward Button
        self.backward_btn = QPushButton("<=")
        self.backward_btn.setMinimumHeight(30)

        # Created the Backward Button
        self.forward_btn = QPushButton("=>")
        self.forward_btn.setMinimumHeight(30)

        # Adding the Widgets to the Horizontal Bar
        self.horizontal.addWidget(self.backward_btn)
        self.horizontal.addWidget(self.forward_btn)
        self.horizontal.addWidget(self.url_bar)
        self.horizontal.addWidget(self.go_btn)

        # Creating the Browser Engine
        self.browser = QWebEngineView()

        self.go_btn.clicked.connect(lambda: self.navigate(self.url_bar.toPlainText()))
        self.backward_btn.clicked.connect(self.browser.back)
        self.forward_btn.clicked.connect(self.browser.forward)


        # Setting up the layout
        self.layout.addLayout(self.horizontal)
        self.layout.addWidget(self.browser)

        # Setting up the default Browser
        self.browser.setUrl(QUrl("https://duckduckgo.com/"))

        self.window.setLayout(self.layout)
        self.window.show()

    # Function to change thw URL
    def navigate(self, url):
        if not url.startswith("http"):
            url = "http://" + url
            self.url_bar.setText(url)
        self.browser.setUrl(QUrl(url))


# Creating the Application
app = QApplication([])
window = MyWebBrowser()
app.exec_()

