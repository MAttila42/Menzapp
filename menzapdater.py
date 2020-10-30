import requests
import PyPDF2
import tabula #tabula-py
import json

url = "https://eatrend.hu/wp-content/uploads/menuk/Gy%C5%91r/44.heti%20k%C3%B6z%C3%A9tkeztet%C3%A9si%20%C3%A9tlapok/Feln%C5%91tt%2044.h%C3%A9t.pdf"
r = requests.get(url, allow_redirects=True)
pdfFileObj = open('Feln%C5%91tt%2044.h%C3%A9t.pdf', 'wb').write(r.content)
page1 = tabula.read_pdf("Feln%C5%91tt%2044.h%C3%A9t.pdf", output_format="json", pages=1)

# page1[<hét_index (0|1)>]["data"][<4|5 (leves|főétel)>][<nap_index + 1>]["text"]
# page2[<hét_index (0|1)>]["data"][<4|5 (leves|főétel)>][<nap_index + 1>]["text"]

day = 5
lunch = page1[0]["data"][1][day]["text"].replace("\r", "\n")
print(lunch)

# f = open("test3.json", "w")
# f.write(json.dumps(page1, indent=2))
# f.close()
