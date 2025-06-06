import os
from html.parser import HTMLParser

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
HTML_FILES = ["index.html", "harry.html", "choreography.html"]

try:
    from bs4 import BeautifulSoup  # type: ignore
    def parse_html(content):
        soup = BeautifulSoup(content, "html.parser")
        title = soup.title.string.strip() if soup.title else None
        links = [a.get("href") for a in soup.find_all("a") if a.get("href")]
        return title, links
except Exception:  # fallback if bs4 is unavailable
    class _Parser(HTMLParser):
        def __init__(self):
            super().__init__()
            self.title = None
            self._in_title = False
            self.links = []

        def handle_starttag(self, tag, attrs):
            if tag == "title":
                self._in_title = True
            if tag == "a":
                for k, v in attrs:
                    if k == "href":
                        self.links.append(v)

        def handle_endtag(self, tag):
            if tag == "title":
                self._in_title = False

        def handle_data(self, data):
            if self._in_title:
                text = data.strip()
                if text:
                    self.title = (self.title or "") + text

    def parse_html(content):
        parser = _Parser()
        parser.feed(content)
        return parser.title, parser.links


def load_html(filename):
    path = os.path.join(BASE_DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        return parse_html(f.read())


def test_titles_present():
    for filename in HTML_FILES:
        title, _ = load_html(filename)
        assert title, f"{filename} missing title"


def test_links_resolve():
    link_map = {
        "index.html": ["/harry.html"],
        "harry.html": ["index.html"],
        "choreography.html": ["/"],
    }
    for src, targets in link_map.items():
        _, links = load_html(src)
        for target in targets:
            assert target in links, f"{src} missing link to {target}"
            dest = target.lstrip("/") or "index.html"
            assert os.path.isfile(os.path.join(BASE_DIR, dest))
