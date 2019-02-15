from bs4 import BeautifulSoup
import requests
from PIL import Image
from io import BytesIO
import os


def StartSearch():
    search = input("search for : ")
    params = {"q": search}
    dir_name = search.replace(" ", "_").lower()

    if not os.path.isdir(dir_name):
        os.makedirs(dir_name)

    r = requests.get("https://bing.com/images/search", params=params)

    soup = BeautifulSoup(r.text, "html.parser")
    links = soup.findAll("img")
    i = 0
    for item in links:
        try:
            img_obj = requests.get(item.attrs["src"])
            print("Getting", item.attrs["src"])
            try:
                img = Image.open(BytesIO(img_obj.content))
                img.save("./" + dir_name + "/" + str(i) + "." + img.format)
                i = i + 1
            except:
                print("Could not save image.")
        except:
            print("Could not request image")
    StartSearch()

StartSearch()
