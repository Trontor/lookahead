# -*- coding: utf-8 -*-
"""
Created on Mon Jan 16 16:23:12 2023

@author: stevenp115
"""

""" How to use:
1. Create a text file of the form (make sure there is no trailing newline):  
    username
    password
    secret_to_unimelb_login_auth
2. Call the program as follows:
    python timetable.py [PATH TO LOGIN TEXT FILE] [YEAR] [SUBJECTS separated by spaces]
    
    Example: python timetable.py login_details.txt 2023 MAST10009 FNCE10002 MAST20222 MAST10008
    
"""


## Fetch login credentials from text file.

import time
from selenium import webdriver
from pyotp import *
import sys
with open(sys.argv[1], 'r') as fp:
    details = fp.readlines()
    username = details[0].strip()
    password = details[1].strip()
    secret = details[2].strip()

## Initialise subjects list and year.
subjects = sys.argv[3:]
YEAR = int(sys.argv[2])
init_url = f"https://sws.unimelb.edu.au/{YEAR}/Reports/List.aspx?objects={subjects[0]}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list"

## Input your chrome driver path here.

DRIVER_PATH = ##### ENTER YOUR OWN CHROMEDRIVER PATH HERE 

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(DRIVER_PATH)
driver.get(init_url)  # Go to the first timetable page (with login).
time.sleep(0.5)

# Input login credentials.
driver.find_element_by_id('okta-signin-username').send_keys(username)
driver.find_element_by_id('okta-signin-password').send_keys(password)
driver.find_element_by_id('okta-signin-submit').click()

# Give the browser some loading time then fetch/input auth code.
time.sleep(4)
totp = TOTP(secret)
code = totp.now()
driver.find_element_by_xpath(
    '/html/body/div[2]/div/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/span/input').send_keys(code)
driver.find_element_by_xpath(
    '/html/body/div[2]/div/div[2]/div/div/form/div[2]/input').click()

time.sleep(2)
html_source = driver.page_source  # Get first html.
with open(f"{subjects[0]}.html", 'w', encoding='utf-8') as fp:
    fp.write(html_source)

### Now loop over the remaining subjects:
for subject in subjects[1:]:
    start_time = time.perf_counter()
    driver.get(
        f"https://sws.unimelb.edu.au/{YEAR}/Reports/List.aspx?objects={subject}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list")
    time.sleep(2)
    html_source = driver.page_source
    with open(f"{subject}.html", 'w', encoding='utf-8') as fp:
        fp.write(html_source)
    end_time = time.perf_counter()
    print(
        f"Subject '{subject}' scraped. Time taken: {round(end_time-start_time, 3)} s")
