from pathlib import Path

path = Path(r'D:\Dev\Projects\Portfolio\public\Resume.pdf')

try:
    from PyPDF2 import PdfReader
except ImportError:
    from pypdf import PdfReader

reader = PdfReader(str(path))
for i, page in enumerate(reader.pages[:5]):
    print(f'--- PAGE {i+1} ---')
    text = page.extract_text()
    print(text[:3200] if text else 'NO TEXT')
