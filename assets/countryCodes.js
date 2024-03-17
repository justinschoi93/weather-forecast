const COUNTRIES = [
    {
        "name": "Afghanistan",
        "country-code": "004"
    },
    {
        "name": "Åland Islands",
        "country-code": "248"
    },
    {
        "name": "Albania",
        "country-code": "008"
    },
    {
        "name": "Algeria",
        "country-code": "012"
    },
    {
        "name": "American Samoa",
        "country-code": "016"
    },
    {
        "name": "Andorra",
        "country-code": "020"
    },
    {
        "name": "Angola",
        "country-code": "024"
    },
    {
        "name": "Anguilla",
        "country-code": "660"
    },
    {
        "name": "Antarctica",
        "country-code": "010"
    },
    {
        "name": "Antigua and Barbuda",
        "country-code": "028"
    },
    {
        "name": "Argentina",
        "country-code": "032"
    },
    {
        "name": "Armenia",
        "country-code": "051"
    },
    {
        "name": "Aruba",
        "country-code": "533"
    },
    {
        "name": "Australia",
        "country-code": "036"
    },
    {
        "name": "Austria",
        "country-code": "040"
    },
    {
        "name": "Azerbaijan",
        "country-code": "031"
    },
    {
        "name": "Bahamas",
        "country-code": "044"
    },
    {
        "name": "Bahrain",
        "country-code": "048"
    },
    {
        "name": "Bangladesh",
        "country-code": "050"
    },
    {
        "name": "Barbados",
        "country-code": "052"
    },
    {
        "name": "Belarus",
        "country-code": "112"
    },
    {
        "name": "Belgium",
        "country-code": "056"
    },
    {
        "name": "Belize",
        "country-code": "084"
    },
    {
        "name": "Benin",
        "country-code": "204"
    },
    {
        "name": "Bermuda",
        "country-code": "060"
    },
    {
        "name": "Bhutan",
        "country-code": "064"
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "country-code": "068"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "country-code": "535"
    },
    {
        "name": "Bosnia and Herzegovina",
        "country-code": "070"
    },
    {
        "name": "Botswana",
        "country-code": "072"
    },
    {
        "name": "Bouvet Island",
        "country-code": "074"
    },
    {
        "name": "Brazil",
        "country-code": "076"
    },
    {
        "name": "British Indian Ocean Territory",
        "country-code": "086"
    },
    {
        "name": "Brunei Darussalam",
        "country-code": "096"
    },
    {
        "name": "Bulgaria",
        "country-code": "100"
    },
    {
        "name": "Burkina Faso",
        "country-code": "854"
    },
    {
        "name": "Burundi",
        "country-code": "108"
    },
    {
        "name": "Cabo Verde",
        "country-code": "132"
    },
    {
        "name": "Cambodia",
        "country-code": "116"
    },
    {
        "name": "Cameroon",
        "country-code": "120"
    },
    {
        "name": "Canada",
        "country-code": "124"
    },
    {
        "name": "Cayman Islands",
        "country-code": "136"
    },
    {
        "name": "Central African Republic",
        "country-code": "140"
    },
    {
        "name": "Chad",
        "country-code": "148"
    },
    {
        "name": "Chile",
        "country-code": "152"
    },
    {
        "name": "China",
        "country-code": "156"
    },
    {
        "name": "Christmas Island",
        "country-code": "162"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "country-code": "166"
    },
    {
        "name": "Colombia",
        "country-code": "170"
    },
    {
        "name": "Comoros",
        "country-code": "174"
    },
    {
        "name": "Congo",
        "country-code": "178"
    },
    {
        "name": "Congo, Democratic Republic of the",
        "country-code": "180"
    },
    {
        "name": "Cook Islands",
        "country-code": "184"
    },
    {
        "name": "Costa Rica",
        "country-code": "188"
    },
    {
        "name": "Côte d'Ivoire",
        "country-code": "384"
    },
    {
        "name": "Croatia",
        "country-code": "191"
    },
    {
        "name": "Cuba",
        "country-code": "192"
    },
    {
        "name": "Curaçao",
        "country-code": "531"
    },
    {
        "name": "Cyprus",
        "country-code": "196"
    },
    {
        "name": "Czechia",
        "country-code": "203"
    },
    {
        "name": "Denmark",
        "country-code": "208"
    },
    {
        "name": "Djibouti",
        "country-code": "262"
    },
    {
        "name": "Dominica",
        "country-code": "212"
    },
    {
        "name": "Dominican Republic",
        "country-code": "214"
    },
    {
        "name": "Ecuador",
        "country-code": "218"
    },
    {
        "name": "Egypt",
        "country-code": "818"
    },
    {
        "name": "El Salvador",
        "country-code": "222"
    },
    {
        "name": "Equatorial Guinea",
        "country-code": "226"
    },
    {
        "name": "Eritrea",
        "country-code": "232"
    },
    {
        "name": "Estonia",
        "country-code": "233"
    },
    {
        "name": "Eswatini",
        "country-code": "748"
    },
    {
        "name": "Ethiopia",
        "country-code": "231"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "country-code": "238"
    },
    {
        "name": "Faroe Islands",
        "country-code": "234"
    },
    {
        "name": "Fiji",
        "country-code": "242"
    },
    {
        "name": "Finland",
        "country-code": "246"
    },
    {
        "name": "France",
        "country-code": "250"
    },
    {
        "name": "French Guiana",
        "country-code": "254"
    },
    {
        "name": "French Polynesia",
        "country-code": "258"
    },
    {
        "name": "French Southern Territories",
        "country-code": "260"
    },
    {
        "name": "Gabon",
        "country-code": "266"
    },
    {
        "name": "Gambia",
        "country-code": "270"
    },
    {
        "name": "Georgia",
        "country-code": "268"
    },
    {
        "name": "Germany",
        "country-code": "276"
    },
    {
        "name": "Ghana",
        "country-code": "288"
    },
    {
        "name": "Gibraltar",
        "country-code": "292"
    },
    {
        "name": "Greece",
        "country-code": "300"
    },
    {
        "name": "Greenland",
        "country-code": "304"
    },
    {
        "name": "Grenada",
        "country-code": "308"
    },
    {
        "name": "Guadeloupe",
        "country-code": "312"
    },
    {
        "name": "Guam",
        "country-code": "316"
    },
    {
        "name": "Guatemala",
        "country-code": "320"
    },
    {
        "name": "Guernsey",
        "country-code": "831"
    },
    {
        "name": "Guinea",
        "country-code": "324"
    },
    {
        "name": "Guinea-Bissau",
        "country-code": "624"
    },
    {
        "name": "Guyana",
        "country-code": "328"
    },
    {
        "name": "Haiti",
        "country-code": "332"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "country-code": "334"
    },
    {
        "name": "Holy See",
        "country-code": "336"
    },
    {
        "name": "Honduras",
        "country-code": "340"
    },
    {
        "name": "Hong Kong",
        "country-code": "344"
    },
    {
        "name": "Hungary",
        "country-code": "348"
    },
    {
        "name": "Iceland",
        "country-code": "352"
    },
    {
        "name": "India",
        "country-code": "356"
    },
    {
        "name": "Indonesia",
        "country-code": "360"
    },
    {
        "name": "Iran (Islamic Republic of)",
        "country-code": "364"
    },
    {
        "name": "Iraq",
        "country-code": "368"
    },
    {
        "name": "Ireland",
        "country-code": "372"
    },
    {
        "name": "Isle of Man",
        "country-code": "833"
    },
    {
        "name": "Israel",
        "country-code": "376"
    },
    {
        "name": "Italy",
        "country-code": "380"
    },
    {
        "name": "Jamaica",
        "country-code": "388"
    },
    {
        "name": "Japan",
        "country-code": "392"
    },
    {
        "name": "Jersey",
        "country-code": "832"
    },
    {
        "name": "Jordan",
        "country-code": "400"
    },
    {
        "name": "Kazakhstan",
        "country-code": "398"
    },
    {
        "name": "Kenya",
        "country-code": "404"
    },
    {
        "name": "Kiribati",
        "country-code": "296"
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "country-code": "408"
    },
    {
        "name": "Korea, Republic of",
        "country-code": "410"
    },
    {
        "name": "Kuwait",
        "country-code": "414"
    },
    {
        "name": "Kyrgyzstan",
        "country-code": "417"
    },
    {
        "name": "Lao People's Democratic Republic",
        "country-code": "418"
    },
    {
        "name": "Latvia",
        "country-code": "428"
    },
    {
        "name": "Lebanon",
        "country-code": "422"
    },
    {
        "name": "Lesotho",
        "country-code": "426"
    },
    {
        "name": "Liberia",
        "country-code": "430"
    },
    {
        "name": "Libya",
        "country-code": "434"
    },
    {
        "name": "Liechtenstein",
        "country-code": "438"
    },
    {
        "name": "Lithuania",
        "country-code": "440"
    },
    {
        "name": "Luxembourg",
        "country-code": "442"
    },
    {
        "name": "Macao",
        "country-code": "446"
    },
    {
        "name": "Madagascar",
        "country-code": "450"
    },
    {
        "name": "Malawi",
        "country-code": "454"
    },
    {
        "name": "Malaysia",
        "country-code": "458"
    },
    {
        "name": "Maldives",
        "country-code": "462"
    },
    {
        "name": "Mali",
        "country-code": "466"
    },
    {
        "name": "Malta",
        "country-code": "470"
    },
    {
        "name": "Marshall Islands",
        "country-code": "584"
    },
    {
        "name": "Martinique",
        "country-code": "474"
    },
    {
        "name": "Mauritania",
        "country-code": "478"
    },
    {
        "name": "Mauritius",
        "country-code": "480"
    },
    {
        "name": "Mayotte",
        "country-code": "175"
    },
    {
        "name": "Mexico",
        "country-code": "484"
    },
    {
        "name": "Micronesia (Federated States of)",
        "country-code": "583"
    },
    {
        "name": "Moldova, Republic of",
        "country-code": "498"
    },
    {
        "name": "Monaco",
        "country-code": "492"
    },
    {
        "name": "Mongolia",
        "country-code": "496"
    },
    {
        "name": "Montenegro",
        "country-code": "499"
    },
    {
        "name": "Montserrat",
        "country-code": "500"
    },
    {
        "name": "Morocco",
        "country-code": "504"
    },
    {
        "name": "Mozambique",
        "country-code": "508"
    },
    {
        "name": "Myanmar",
        "country-code": "104"
    },
    {
        "name": "Namibia",
        "country-code": "516"
    },
    {
        "name": "Nauru",
        "country-code": "520"
    },
    {
        "name": "Nepal",
        "country-code": "524"
    },
    {
        "name": "Netherlands",
        "country-code": "528"
    },
    {
        "name": "New Caledonia",
        "country-code": "540"
    },
    {
        "name": "New Zealand",
        "country-code": "554"
    },
    {
        "name": "Nicaragua",
        "country-code": "558"
    },
    {
        "name": "Niger",
        "country-code": "562"
    },
    {
        "name": "Nigeria",
        "country-code": "566"
    },
    {
        "name": "Niue",
        "country-code": "570"
    },
    {
        "name": "Norfolk Island",
        "country-code": "574"
    },
    {
        "name": "North Macedonia",
        "country-code": "807"
    },
    {
        "name": "Northern Mariana Islands",
        "country-code": "580"
    },
    {
        "name": "Norway",
        "country-code": "578"
    },
    {
        "name": "Oman",
        "country-code": "512"
    },
    {
        "name": "Pakistan",
        "country-code": "586"
    },
    {
        "name": "Palau",
        "country-code": "585"
    },
    {
        "name": "Palestine, State of",
        "country-code": "275"
    },
    {
        "name": "Panama",
        "country-code": "591"
    },
    {
        "name": "Papua New Guinea",
        "country-code": "598"
    },
    {
        "name": "Paraguay",
        "country-code": "600"
    },
    {
        "name": "Peru",
        "country-code": "604"
    },
    {
        "name": "Philippines",
        "country-code": "608"
    },
    {
        "name": "Pitcairn",
        "country-code": "612"
    },
    {
        "name": "Poland",
        "country-code": "616"
    },
    {
        "name": "Portugal",
        "country-code": "620"
    },
    {
        "name": "Puerto Rico",
        "country-code": "630"
    },
    {
        "name": "Qatar",
        "country-code": "634"
    },
    {
        "name": "Réunion",
        "country-code": "638"
    },
    {
        "name": "Romania",
        "country-code": "642"
    },
    {
        "name": "Russian Federation",
        "country-code": "643"
    },
    {
        "name": "Rwanda",
        "country-code": "646"
    },
    {
        "name": "Saint Barthélemy",
        "country-code": "652"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "country-code": "654"
    },
    {
        "name": "Saint Kitts and Nevis",
        "country-code": "659"
    },
    {
        "name": "Saint Lucia",
        "country-code": "662"
    },
    {
        "name": "Saint Martin (French part)",
        "country-code": "663"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "country-code": "666"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "country-code": "670"
    },
    {
        "name": "Samoa",
        "country-code": "882"
    },
    {
        "name": "San Marino",
        "country-code": "674"
    },
    {
        "name": "Sao Tome and Principe",
        "country-code": "678"
    },
    {
        "name": "Saudi Arabia",
        "country-code": "682"
    },
    {
        "name": "Senegal",
        "country-code": "686"
    },
    {
        "name": "Serbia",
        "country-code": "688"
    },
    {
        "name": "Seychelles",
        "country-code": "690"
    },
    {
        "name": "Sierra Leone",
        "country-code": "694"
    },
    {
        "name": "Singapore",
        "country-code": "702"
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "country-code": "534"
    },
    {
        "name": "Slovakia",
        "country-code": "703"
    },
    {
        "name": "Slovenia",
        "country-code": "705"
    },
    {
        "name": "Solomon Islands",
        "country-code": "090"
    },
    {
        "name": "Somalia",
        "country-code": "706"
    },
    {
        "name": "South Africa",
        "country-code": "710"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "country-code": "239"
    },
    {
        "name": "South Sudan",
        "country-code": "728"
    },
    {
        "name": "Spain",
        "country-code": "724"
    },
    {
        "name": "Sri Lanka",
        "country-code": "144"
    },
    {
        "name": "Sudan",
        "country-code": "729"
    },
    {
        "name": "Suriname",
        "country-code": "740"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "country-code": "744"
    },
    {
        "name": "Sweden",
        "country-code": "752"
    },
    {
        "name": "Switzerland",
        "country-code": "756"
    },
    {
        "name": "Syrian Arab Republic",
        "country-code": "760"
    },
    {
        "name": "Taiwan, Province of China",
        "country-code": "158"
    },
    {
        "name": "Tajikistan",
        "country-code": "762"
    },
    {
        "name": "Tanzania, United Republic of",
        "country-code": "834"
    },
    {
        "name": "Thailand",
        "country-code": "764"
    },
    {
        "name": "Timor-Leste",
        "country-code": "626"
    },
    {
        "name": "Togo",
        "country-code": "768"
    },
    {
        "name": "Tokelau",
        "country-code": "772"
    },
    {
        "name": "Tonga",
        "country-code": "776"
    },
    {
        "name": "Trinidad and Tobago",
        "country-code": "780"
    },
    {
        "name": "Tunisia",
        "country-code": "788"
    },
    {
        "name": "Turkey",
        "country-code": "792"
    },
    {
        "name": "Turkmenistan",
        "country-code": "795"
    },
    {
        "name": "Turks and Caicos Islands",
        "country-code": "796"
    },
    {
        "name": "Tuvalu",
        "country-code": "798"
    },
    {
        "name": "Uganda",
        "country-code": "800"
    },
    {
        "name": "Ukraine",
        "country-code": "804"
    },
    {
        "name": "United Arab Emirates",
        "country-code": "784"
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "country-code": "826"
    },
    {
        "name": "United States of America",
        "country-code": "840"
    },
    {
        "name": "United States Minor Outlying Islands",
        "country-code": "581"
    },
    {
        "name": "Uruguay",
        "country-code": "858"
    },
    {
        "name": "Uzbekistan",
        "country-code": "860"
    },
    {
        "name": "Vanuatu",
        "country-code": "548"
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "country-code": "862"
    },
    {
        "name": "Viet Nam",
        "country-code": "704"
    },
    {
        "name": "Virgin Islands (British)",
        "country-code": "092"
    },
    {
        "name": "Virgin Islands (U.S.)",
        "country-code": "850"
    },
    {
        "name": "Wallis and Futuna",
        "country-code": "876"
    },
    {
        "name": "Western Sahara",
        "country-code": "732"
    },
    {
        "name": "Yemen",
        "country-code": "887"
    },
    {
        "name": "Zambia",
        "country-code": "894"
    },
    {
        "name": "Zimbabwe",
        "country-code": "716"
    }
];

export { COUNTRIES };