import requests
import PyPDF2
import tabula #tabula-py
import json

url = "http://gek.hu/images/Nyugatmagyar/2020/Eattrend-2020-oktober-rteuv.pdf"
r = requests.get(url, allow_redirects=True)
pdfFileObj = open('Eattrend-2020-oktober-rteuv.pdf', 'wb').write(r.content)
df = tabula.read_pdf("Eattrend-2020-oktober-rteuv.pdf", output_format="json")

# print(json.dumps(df, indent=2))

# df[<hét_index>]["data"][<4|5 (leves|főétel)>][<nap_index + 1>]["text"]

ki = df[2]["data"][4][1]["text"].replace("\r", "\n")

print(ki)

# f = open("test.json", "w")
# f.write(json.dumps(df, indent=2))
# f.close()