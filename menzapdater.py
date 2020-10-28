import requests
import PyPDF2
import tabula #tabula-py
import json

url = "http://gek.hu/images/Nyugatmagyar/2020/Eattrend-2020-oktober-rteuv.pdf"
r = requests.get(url, allow_redirects=True)
pdfFileObj = open('Eattrend-2020-oktober-rteuv.pdf', 'wb').write(r.content)
page1 = tabula.read_pdf("Eattrend-2020-oktober-rteuv.pdf", output_format="json", pages=1)
page2 = tabula.read_pdf("Eattrend-2020-oktober-rteuv.pdf", output_format="json", pages=2)

# print(json.dumps(df, indent=2))

# page1[<hét_index (0|1)>]["data"][<4|5 (leves|főétel)>][<nap_index + 1>]["text"]
# page2[<hét_index (0|1)>]["data"][<4|5 (leves|főétel)>][<nap_index + 1>]["text"]

ki = page1[1]["data"][4][1]["text"].replace("\r", "\n")

print(ki)

# f = open("test2.json", "w")
# f.write(json.dumps(df, indent=2))
# f.close()