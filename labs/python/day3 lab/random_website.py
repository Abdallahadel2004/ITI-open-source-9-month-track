import random
import webbrowser

def open_random_website():
    websites = [
        "https://www.google.com",
        "https://www.github.com",
        "https://www.stackoverflow.com",
        "https://www.python.org",
        "https://www.wikipedia.org"
    ]
    chosen_website = random.choice(websites)
    print(f"Opening {chosen_website}...")
    webbrowser.open(chosen_website)

if __name__ == "__main__":
    open_random_website()
