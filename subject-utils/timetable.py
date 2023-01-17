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
    python timetable.py [PATH TO LOGIN TEXT FILE] [YEAR] [Subject json files separated by commas]
    
"""


# Get subject data from json(s). We take the set union of all subjects.

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')

from pyotp import *
import sys
import json

subjects = set()
for json_file in sys.argv[3:]:
    with open(json_file, 'r') as fp:
        subject_data = json.load(fp)
        subjects.update([subj['code'] for subj in subject_data])

print(f"{len(subjects)} subjects loaded.")
subjects = list(subjects)
## Fetch login credentials from text file.

with open(sys.argv[1], 'r') as fp:
    details = fp.readlines()
    username = details[0].strip()
    password = details[1].strip()
    secret = details[2].strip()

## Initialise year.
YEAR = int(sys.argv[2])
init_url = f"https://sws.unimelb.edu.au/{YEAR}/Reports/List.aspx?objects={subjects[0]}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list"

## Input your chrome driver path here.

DRIVER_PATH = [[ENTER YOUR OWN CHROME DRIVER PATH HERE]]

driver = webdriver.Chrome(DRIVER_PATH, chrome_options=options)

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

def scrape_timetable(subject, global_start_time):
    start_time = time.perf_counter()
    driver.get(
        f"https://sws.unimelb.edu.au/{YEAR}/Reports/List.aspx?objects={subject}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list")
    WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, "g-global-menu-logo")))
    time.sleep(0.1) # Just a bit extra.
    html_source = driver.page_source
    with open(f"{subject}.html", 'w', encoding='utf-8') as fp:
        fp.write(html_source)
    end_time = time.perf_counter()
    print(
        f"Subject '{subject}' scraped || Time taken: {round(end_time-start_time, 3)} s || Total time elapsed: {round(end_time-global_start_time, 3)} s")

global_start_time = time.perf_counter()

for subject in subjects[1:]:
    scrape_timetable(subject, global_start_time)
