import requests
from io import BytesIO
from PIL import Image

r = requests.get("https://i.imgur.com/i8viCPK.png")

print("Status Code : ", r.status_code)

image = Image.open(BytesIO(r.content))

print(image.size, image.format, image.mode)

path = "./image1." + image.format

try:
    image.save(path, image.format)
except IOError:
    print("Cannot save image.")
