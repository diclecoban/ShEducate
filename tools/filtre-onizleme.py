"""Ana dosyaları değiştirmeden filtre tasarımlarını ayrı portta önizler."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def do_GET(self):
        path = self.path.split('?')[0]
        if path == '/filtre-sahne.html':
            content = (ROOT / 'index.html').read_text().replace('</head>', '<link rel="stylesheet" href="assets/previews/filtre-sahne.css"></head>')
            import re
            content = re.sub(r'src="script.js[^\"]*"', 'src="/filtre-uygulama.js"', content)
            content = content.replace('</body>', '<script src="assets/previews/filtre-sahne.js"></script></body>')
            self.send_content(content, 'text/html; charset=utf-8')
        elif path == '/filtre-uygulama.js':
            self.send_content((ROOT / 'script.js').read_text().replace('  nasilModalAc();', ''), 'application/javascript; charset=utf-8')
        elif path == '/':
            self.send_content((ROOT / 'filtre-onizleme.html').read_text(), 'text/html; charset=utf-8')
        else:
            super().do_GET()
    def send_content(self, content, content_type):
        data = content.encode()
        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(data)
if __name__ == '__main__':
    print('Önizleme: http://localhost:8767', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8767), Handler).serve_forever()
