from nltk.corpus import stopwords
import string
from nltk.tokenize import word_tokenize
from PIL import Image
import pytesseract
from pdf2image import convert_from_path
from urlextract import URLExtract
import re
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
import fileinput
from collections import Counter
import json


def pdfToImage(pdfName):
    images = convert_from_path(pdfName)
    for i in range(len(images)):
        images[i].save('page' + str(i) + '.jpg', 'JPEG')


def process_image(iamge_name, lang_code):
    return pytesseract.image_to_string(Image.open(iamge_name), lang=lang_code)


def print_data(data):
    print(data)


def output_file(filename, data):
    file = open(filename, "w+")
    file.write(data)
    file.close()


def fixURL(arg):
    first_chars = arg[0:4]
    if(first_chars != 'http'):
        arg = 'https://'+arg
    return arg


def getContacts(contents):
    return re.findall(r'[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]', contents)


def getEmail(contents):
    return re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', contents)


def extractLinks(data_eng):

    extractor = URLExtract()
    valid_url = []
    contents = data_eng
    urls = extractor.find_urls(contents)
    for x in urls:
        x = fixURL(x)
        a = url_checker(x)
        if(a != None):
            valid_url.append(a)
    return valid_url


def removeEmptyLines():
    for line in fileinput.FileInput("eng.txt", inplace=1):
        if line.rstrip():
            pass
        print(line)


def url_checker(urls):

    req = Request(urls)
    try:
        response = urlopen(req)
    except HTTPError as e:
        # we reached the served but server didn't respons to request
        # print('Error code: ', e.code)
        return urls
    except URLError as e:
        # inability to reach server means,url is not reachable
        #print('Reason: ', e.reason)
        # commented this section so that we dont display ivalid url to user and the information
        pass
    else:
        #print('Website is working fine')
        return urls


def saveToJson(outputFile, contents):

    with open(outputFile, "w") as outfile:
        json.dump(contents, outfile)


def countTokens(data):
    return Counter(data)


def cleanInformation(filename, text):

    # split into words
    tokens = word_tokenize(text)
    # convert to lower case
    tokens = [w.lower() for w in tokens]
    # remove punctuation from each word
    table = str.maketrans('', '', string.punctuation)
    stripped = [w.translate(table) for w in tokens]
    # remove remaining tokens that are not alphanumeric
    #words = [word for word in stripped if word.isalpha()]
    words = [word for word in stripped if word.isalnum()]
    # filter out stop words
    stop_words = set(stopwords.words('english'))
    words = [w for w in words if not w in stop_words]
    # count the word occurance & sort then accordingly
    return words
    # print(words[:100])


def removeNewLines(data):
    data.replace('\n', ' ')


def main():
    pdfName = "example.pdf"
    imageName = "page0.jpg"
    language = "eng"
    outputFileName = "eng.txt"
    filename = "eng.txt"
    outputFile = "sample.json"
    user_ID = "User_1483"
    pdfToImage(pdfName)
    data_eng = process_image(imageName, language)
    output_file(outputFileName, data_eng)
    usefullText = cleanInformation(filename, data_eng)
    wordWithFrequenccy = countTokens(usefullText)
    linksInResume = extractLinks(data_eng)
    wordWithFrequenccy['links_In_Resume'] = linksInResume
    contact_number = getContacts(data_eng)
    wordWithFrequenccy['Contact_Number_In_Resume'] = contact_number
    email_address = getEmail(data_eng)
    wordWithFrequenccy['Email_Address_In_Resume'] = email_address
    output_file(user_ID, data_eng)
    saveToJson(outputFile, wordWithFrequenccy)


if __name__ == '__main__':
    main()
