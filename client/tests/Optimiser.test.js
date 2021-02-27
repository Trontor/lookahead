import React from 'react';
import Optimiser from '../src/optimiser/Optimiser';


describe("Optimiser", () => {

  //example 3 subject load that can either be in person only or online only
  const subjects = {
    "MAST10006": {
      "name": "Calculus 2",
      "online": false,
      "year": 2021,
      "color": "#FEBF5D",
      "data": {
        "code": "MAST10006",
        "period": "semester_1",
        "_classList": [
          {
            "description": "Practical 1",
            "day": 0,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/16"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 16
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 38
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 36
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/20"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 20
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 34
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/28"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 28
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/15"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 15
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/37"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 37
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/35"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/19"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 19
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/33"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/27"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/32"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 32
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/44"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 44
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/18"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/10"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 10
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/12"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 12
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/62"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 62
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/68"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 68
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/58"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 58
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/43"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 43
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/17"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 17
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/31"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 31
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/09"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 9
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/11"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 11
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/61"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 61
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/67"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 67
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/57"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 57
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/46"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 46
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/08"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 8
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 22
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/52"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 52
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/64"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 64
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/54"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 54
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/48"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 48
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/07"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 7
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/21"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 21
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/51"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 51
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/63"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 63
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/53"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 53
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/47"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 47
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/14"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 14
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 26
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/60"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 60
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 24
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/66"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 66
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/56"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 56
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/45"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 45
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/39"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 39
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/13"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/25"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 25
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/59"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 59
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/23"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 23
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/65"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 65
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/55"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 55
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/40"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 40
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/02"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 2
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/06"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 6
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/42"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 42
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 30
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/50"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 50
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/04"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 4
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/01"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 1
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/05"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 5
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/41"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 41
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/29"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 29
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/49"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 49
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/03"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 3
          }
        ],
        "_irregularClasses": [],
        "_mandatoryClasses": [],
        "_regularClasses": [
          {
            "description": "Practical 1",
            "day": 0,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/16"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 16
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/15"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 15
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 38
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/37"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 37
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/32"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 32
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 36
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/35"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/20"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 20
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/19"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 19
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 34
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/33"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/28"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 28
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/27"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/46"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 46
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/44"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 44
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/43"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 43
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/18"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/17"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 17
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/31"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 31
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/10"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 10
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/09"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 9
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/12"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 12
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/11"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 11
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/62"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 62
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/61"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 61
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/68"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 68
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/67"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 67
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/58"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 58
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/57"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 57
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/08"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 8
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/07"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 7
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 22
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/21"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 21
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/52"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 52
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/51"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 51
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/64"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 64
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/63"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 63
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/54"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 54
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/53"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 53
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/48"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 48
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/47"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 47
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/45"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 45
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/39"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 39
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/14"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 14
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/13"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 26
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/25"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 25
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/60"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 60
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/59"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 59
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/40"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 40
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 24
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/23"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 23
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/66"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 66
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/65"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 65
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/56"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 56
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/55"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 55
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/02"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 2
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/01"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 1
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/06"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 6
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/05"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 5
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/42"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 42
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/41"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 41
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 30
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/29"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 29
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/50"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 50
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/49"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 49
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/04"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 4
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10006",
            "codes": [
              "MAST10006/U/1/SM1/P01/03"
            ],
            "locations": [
              "PAR-Peter Hall-G10PAR-Peter Hall-G50"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 3
          }
        ],
        "_streamContainers": [
          {
            "streams": [
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L01/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L02/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L03/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 3
                  }
                ],
                "streamNumbers": [
                  3
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L01/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L02/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L03/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 1
                  }
                ],
                "streamNumbers": [
                  1
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L01/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 4
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L02/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 4
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L03/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 4
                  }
                ],
                "streamNumbers": [
                  4
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L01/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L02/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10006",
                    "codes": [
                      "MAST10006/U/1/SM1/L03/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 2
                  }
                ],
                "streamNumbers": [
                  2
                ]
              }
            ],
            "type": "L",
            "name": "Lecture"
          }
        ],
        "_weirdStreamContainers": [],
        "_weekendClasses": false
      },
      "error": null,
      "loading": false
    },
    "MAST10005": {
      "name": "Calculus 1",
      "online": false,
      "year": 2021,
      "color": "#FC7C70",
      "data": {
        "code": "MAST10005",
        "period": "semester_1",
        "_classList": [
          {
            "description": "Practical 1",
            "day": 0,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/42"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 42
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/04"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 4
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/12"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 12
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/18"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 34
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/02"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 2
          },
          {
            "description": "Workshop 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/33"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/28"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 28
          },
          {
            "description": "Workshop 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 36
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/41"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 41
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/03"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 3
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/11"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 11
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/17"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 17
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/33"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/01"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 1
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/27"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/32"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 32
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/16"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 16
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 36
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/37"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 37
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 38
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 22
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/39"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 39
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/01"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 1
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/14"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 14
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/10"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 10
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/04"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 4
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/11"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 11
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/21"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 21
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/08"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 8
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/06"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 6
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/31"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 31
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/15"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 15
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/53"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 53
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/09"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 9
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/54"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 54
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/10"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 10
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/14"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 14
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/06"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 6
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/31"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 31
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/48"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 48
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/28",
              "MAST10005/U/1/SM1/W01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 28
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/40"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 40
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/58"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 58
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 38
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 24
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/40"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 40
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/07"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 7
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/09"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 9
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/18"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/13"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/05"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 5
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/47"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 47
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/57"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 57
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/37"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 37
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/39"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 39
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/46"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 46
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/23"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 23
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/44"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 44
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 22
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/25"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 25
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 26
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 26
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/27"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 30
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/32"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 32
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/29"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 29
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/17"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 17
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/16"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 16
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/03"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 3
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/20"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 20
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/35"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/45"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 45
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/43"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 43
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/21"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 21
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/25"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 25
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/29"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 29
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/07"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 7
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/59"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 59
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 24
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/52"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 52
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/20"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 20
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/08"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 8
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/50"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 50
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/35"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/56"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 56
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 34
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/02"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 2
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/12"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 12
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/19"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 19
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/05"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 5
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/15"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 15
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/13"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/23"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 23
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/51"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 51
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/19"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 19
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/49"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 49
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/55"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 55
          }
        ],
        "_irregularClasses": [],
        "_mandatoryClasses": [],
        "_regularClasses": [
          {
            "description": "Practical 1",
            "day": 0,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/42"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 42
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/41"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 41
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/04"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 4
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/03"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 3
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/12"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 12
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/11"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 11
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/18"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/17"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 17
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 34
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/33"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/02"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 2
          },
          {
            "description": "Workshop 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/33"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 33
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/01"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 1
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/28"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 28
          },
          {
            "description": "Workshop 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 36
          },
          {
            "description": "Practical 1",
            "day": 0,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/27"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/32"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 32
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/01"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 1
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/31"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 31
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/14"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 14
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/16"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 16
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/10"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 10
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/15"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 15
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/36"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 36
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/04"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 4
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/53"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 53
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/11"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 11
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/54"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 54
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/37"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 37
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/10"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 10
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 38
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/21"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 21
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 22
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/08"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 8
          },
          {
            "description": "Practical 1",
            "day": 1,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/09"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 9
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/39"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 39
          },
          {
            "description": "Workshop 1",
            "day": 1,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/06"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 6
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/14"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 14
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/07"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 7
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/13"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/06"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 6
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/31"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 31
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/05"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 5
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/48"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 48
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/09"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 9
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/47"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 47
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/28",
              "MAST10005/U/1/SM1/W01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 28
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/40"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 40
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/58"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 58
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/57"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 57
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/38"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 38
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 24
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/37"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 37
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/40"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 40
          },
          {
            "description": "Workshop 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/18"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 18
          },
          {
            "description": "Practical 1",
            "day": 2,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/39"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 39
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/17"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 17
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/35"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/46"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 46
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/16"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 16
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 10,
            "finish": 11,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/45"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 45
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/23"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 23
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/03"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 3
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/44"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 44
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/20"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 20
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/43"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 43
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/22"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 22
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/25"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 25
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/21"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 21
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 26
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/26"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 26
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/25"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 25
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/27"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 27
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 15.25,
            "finish": 16.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/59"
            ],
            "locations": [
              "PAR-Peter Hall-G14"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 59
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/30"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 30
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/32"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 32
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/29"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 29
          },
          {
            "description": "Workshop 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/29"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 29
          },
          {
            "description": "Practical 1",
            "day": 3,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/07"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 7
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/24"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 24
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/02"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 2
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 9,
            "finish": 10,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/23"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 23
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/52"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 52
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/12"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 12
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 11,
            "finish": 12,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/51"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 51
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/20"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 20
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/19"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 19
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 12,
            "finish": 13,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/19"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 19
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/08"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 8
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 13,
            "finish": 14,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/05"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 5
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/50"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 50
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/15"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 15
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 14.25,
            "finish": 15.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/49"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 49
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/35"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 35
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/56"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 56
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/13"
            ],
            "locations": [
              "PAR-McCoy-209 (Skeats Lab)"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 13
          },
          {
            "description": "Practical 1",
            "day": 4,
            "start": 16.25,
            "finish": 17.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": false,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/P01/55"
            ],
            "locations": [
              "PAR-Peter Hall-G06PAR-Peter Hall-G11"
            ],
            "classCode": {
              "number": 1,
              "type": "P"
            },
            "streamNumber": 55
          },
          {
            "description": "Workshop 1",
            "day": 4,
            "start": 17.25,
            "finish": 18.25,
            "weeks": [
              10,
              11,
              12,
              13,
              14,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ],
            "type": "Variable",
            "online": true,
            "subjectCode": "MAST10005",
            "codes": [
              "MAST10005/U/1/SM1/W01/34"
            ],
            "locations": [
              "online"
            ],
            "classCode": {
              "number": 1,
              "type": "W"
            },
            "streamNumber": 34
          }
        ],
        "_streamContainers": [
          {
            "streams": [
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L01/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L02/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L03/03"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 3
                  }
                ],
                "streamNumbers": [
                  3
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L01/01"
                    ],
                    "locations": [
                      "PAR-Arts West West Wing-B101 (Kathleen Fitzpatrick Theatre)"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L02/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L03/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 1
                  }
                ],
                "streamNumbers": [
                  1
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L01/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 4
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L02/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 4
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L03/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 4
                  }
                ],
                "streamNumbers": [
                  4
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L01/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 2",
                    "day": 2,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L02/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10005",
                    "codes": [
                      "MAST10005/U/1/SM1/L03/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 2
                  }
                ],
                "streamNumbers": [
                  2
                ]
              }
            ],
            "type": "L",
            "name": "Lecture"
          }
        ],
        "_weirdStreamContainers": [],
        "_weekendClasses": false
      },
      "error": null,
      "loading": false
    },
    "MAST10007": {
      "name": "Linear Algebra",
      "online": false,
      "year": 2021,
      "color": "#9382F0",
      "data": {
        "code": "MAST10007",
        "period": "semester_1",
        "_classList": [],
        "_irregularClasses": [],
        "_mandatoryClasses": [],
        "_regularClasses": [],
        "_streamContainers": [
          {
            "streams": [
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/29"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 29
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/29"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G69 (Thompson Lab)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 29
                  }
                ],
                "streamNumbers": [
                  29
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/21"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 21
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/21"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 21
                  }
                ],
                "streamNumbers": [
                  21
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/15"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 15
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/15"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 15
                  }
                ],
                "streamNumbers": [
                  15
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/13"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 13
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/13"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 13
                  }
                ],
                "streamNumbers": [
                  13
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/02"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 2
                  }
                ],
                "streamNumbers": [
                  2
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/27"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 27
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/27"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 27
                  }
                ],
                "streamNumbers": [
                  27
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/25"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 25
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/25"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 25
                  }
                ],
                "streamNumbers": [
                  25
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/40"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 40
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/40"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 40
                  }
                ],
                "streamNumbers": [
                  40
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/30"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 30
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/30"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 30
                  }
                ],
                "streamNumbers": [
                  30
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/38"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 38
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/38"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 38
                  }
                ],
                "streamNumbers": [
                  38
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 4,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/22"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 22
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/22"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 22
                  }
                ],
                "streamNumbers": [
                  22
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/36"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 36
                  },
                  {
                    "description": "Practical 2",
                    "day": 4,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/36"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 36
                  }
                ],
                "streamNumbers": [
                  36
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/16"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G14"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 16
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/16"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 16
                  }
                ],
                "streamNumbers": [
                  16
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/01"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/01"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 1
                  }
                ],
                "streamNumbers": [
                  1
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/23"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 23
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/23"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 23
                  }
                ],
                "streamNumbers": [
                  23
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/31"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 31
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/31"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 31
                  }
                ],
                "streamNumbers": [
                  31
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/35"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 35
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/35"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 35
                  }
                ],
                "streamNumbers": [
                  35
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/07"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 7
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/07"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 7
                  }
                ],
                "streamNumbers": [
                  7
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/28"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 28
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/28"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 28
                  }
                ],
                "streamNumbers": [
                  28
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/34"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 34
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/34"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 34
                  }
                ],
                "streamNumbers": [
                  34
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/32"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 32
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/32"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 32
                  }
                ],
                "streamNumbers": [
                  32
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/14"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 14
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/14"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 14
                  }
                ],
                "streamNumbers": [
                  14
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 3,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/24"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 24
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/24"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 24
                  }
                ],
                "streamNumbers": [
                  24
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/26"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 26
                  },
                  {
                    "description": "Practical 2",
                    "day": 3,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/26"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 26
                  }
                ],
                "streamNumbers": [
                  26
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/39"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 39
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/39"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G69 (Thompson Lab)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 39
                  }
                ],
                "streamNumbers": [
                  39
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/18"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G14"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 18
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/18"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 18
                  }
                ],
                "streamNumbers": [
                  18
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/19"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 19
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/19"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 19
                  }
                ],
                "streamNumbers": [
                  19
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/09"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 9
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/09"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 9
                  }
                ],
                "streamNumbers": [
                  9
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/17"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 17
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/17"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G69 (Thompson Lab)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 17
                  }
                ],
                "streamNumbers": [
                  17
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/04"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 4
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/04"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 4
                  }
                ],
                "streamNumbers": [
                  4
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/06"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 6
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/06"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 6
                  }
                ],
                "streamNumbers": [
                  6
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/20"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 20
                  },
                  {
                    "description": "Practical 2",
                    "day": 2,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/20"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 20
                  }
                ],
                "streamNumbers": [
                  20
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 2,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/10"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 10
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/10"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 10
                  }
                ],
                "streamNumbers": [
                  10
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/05"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 5
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/05"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 5
                  }
                ],
                "streamNumbers": [
                  5
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/37"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 37
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/37"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 37
                  }
                ],
                "streamNumbers": [
                  37
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 1,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/33"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G06PAR-Peter Hall-G11"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 33
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 15.25,
                    "finish": 16.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/33"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 33
                  }
                ],
                "streamNumbers": [
                  33
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 14.25,
                    "finish": 15.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/08"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 8
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/08"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 8
                  }
                ],
                "streamNumbers": [
                  8
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 17.25,
                    "finish": 18.25,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/12"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 12
                  },
                  {
                    "description": "Practical 2",
                    "day": 1,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/12"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 12
                  }
                ],
                "streamNumbers": [
                  12
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 12,
                    "finish": 13,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/03"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 13,
                    "finish": 14,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/03"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 3
                  }
                ],
                "streamNumbers": [
                  3
                ]
              },
              {
                "type": "P",
                "classes": [
                  {
                    "description": "Practical 1",
                    "day": 0,
                    "start": 9,
                    "finish": 10,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P01/11"
                    ],
                    "locations": [
                      "PAR-Peter Hall-G10PAR-Peter Hall-G50"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "P"
                    },
                    "streamNumber": 11
                  },
                  {
                    "description": "Practical 2",
                    "day": 0,
                    "start": 10,
                    "finish": 11,
                    "weeks": [
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/P02/11"
                    ],
                    "locations": [
                      "PAR-Peter Hall-212 (Nanson Laboratory)"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "P"
                    },
                    "streamNumber": 11
                  }
                ],
                "streamNumbers": [
                  11
                ]
              }
            ],
            "type": "P",
            "name": "Practical"
          },
          {
            "streams": [
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L01/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 2",
                    "day": 1,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L02/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 1
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": false,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L03/01"
                    ],
                    "locations": [
                      "PAR-Glyn Davis (MSD)-B117"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 1
                  }
                ],
                "streamNumbers": [
                  1
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L01/03"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 2",
                    "day": 1,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L02/03"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 3
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 16.25,
                    "finish": 17.25,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L03/03"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 3
                  }
                ],
                "streamNumbers": [
                  3
                ]
              },
              {
                "type": "L",
                "classes": [
                  {
                    "description": "Lecture 1",
                    "day": 0,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L01/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 1,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 2",
                    "day": 1,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L02/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 2,
                      "type": "L"
                    },
                    "streamNumber": 2
                  },
                  {
                    "description": "Lecture 3",
                    "day": 4,
                    "start": 11,
                    "finish": 12,
                    "weeks": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22
                    ],
                    "type": "Stream",
                    "online": true,
                    "subjectCode": "MAST10007",
                    "codes": [
                      "MAST10007/U/1/SM1/L03/02"
                    ],
                    "locations": [
                      "online"
                    ],
                    "classCode": {
                      "number": 3,
                      "type": "L"
                    },
                    "streamNumber": 2
                  }
                ],
                "streamNumbers": [
                  2
                ]
              }
            ],
            "type": "L",
            "name": "Lecture"
          }
        ],
        "_weirdStreamContainers": [],
        "_weekendClasses": false
      },
      "error": null,
      "loading": false
    }
  }
  let optimiser;

  it('applyRestrictions for Online', () => {
    optimiser = new Optimiser(subjects, true);

    const existsValidOnlineTimetable = optimiser.applyRestrictions(
      9,
      13,
      'online',
    );
    const restrictedSubjects = optimiser.subjects;

    ensureClassesAreAll(true,restrictedSubjects);

    expect(existsValidOnlineTimetable).toBeTruthy();
  });

  it('applyRestrictions for InPerson', () => {
    optimiser = new Optimiser(subjects, true);

    const existsValidInPersonTimetable = optimiser.applyRestrictions(
      9,
      13,
      'inPerson',
    );

    const restrictedSubjects = optimiser.subjects;

    ensureClassesAreAll(false, restrictedSubjects);

    expect(existsValidInPersonTimetable).toBeTruthy();
  });

  //tests for whether every class is now a certain delivery mode type
// true -> online, false -> inPerson
  let ensureClassesAreAll = (online, restrictedSubjects) => {
    for (const subj in restrictedSubjects) {
      const regClasses = restrictedSubjects[subj].data._regularClasses;
      //ensure all classes are = deliverymode
      for (const regularClass in regClasses){
        expect(regClasses[regularClass].online).toBe(online);
      }

      //ensure all streams are in = deliverymode
      const streamsContainer = restrictedSubjects[subj].data._streamContainers;
      for (const streams in streamsContainer){
        for (const stream in streamsContainer[streams].streams) {
          for (const streamClass in streamsContainer[streams].streams[stream].classes){
            expect(streamsContainer[streams].streams[stream].classes[streamClass].online).toBe(online);
          }
        }
      }
    }
  }
});



