const data =[
    //who is this for
    {
            "id": "2.1",
            "slug": "what-is-this-for",
            "label_pretty": "Select what applies to you",
            "label": "Select what applies to you",
            "choices": [{
                    "id": "2.1.1",
                    "label": "I am here For Myself",
                },
                {
                    "id": "2.1.2",
                    "label": "I am here for a family member, friend or someone I care about.",
                },
                {
                    "id": "2.1.3",
                    "label": "I am here for multiple family members, friends or people I care about.",
                }
            ],
            "image_id": null,"require_answer":true,
            'can_multiple_answers' : false
    },
    //age
    {
        "id": "2.2",
        "slug": "age",
        "label_pretty": "How old are you?",
        "label": "How old are you?",
        "choices": [{
                "id": "2.2.1",
                "label": "0 - 54 years",
            },
            {
                "id": "2.2.2",
                "label": "55-64 years",
            },
            {   
                "id": "2.2.3",
                "label": "65+ years",
            }
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.3",
        "slug": "age",
        "label_pretty": "How old is this person?",
        "label": "How old is this person?",
        "choices": [{
                "id": "2.3.1",
                "label": "0 - 54 years",
            },
            {
                "id": "2.3.2",
                "label": "55-64 years",
            },
            {   
                "id": "2.3.3",
                "label": "65+ years",
            }
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.4",
        "slug": "age",
        "label_pretty": "How old are these people?",
        "label": "How old are these people?",
        "choices": [{
                "id": "2.4.1",
                "label": "0 - 54 years",
            },
            {
                "id": "2.4.2",
                "label": "55-64 years",
            },
            {   
                "id": "2.4.3",
                "label": "65+ years",
            }
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    //household compositon 
    {
        "id": "2.5",
        "slug": "household-composition",
        "label_pretty": "Tells us a little more about your household and \
        who lives there? Do you live alone or with others? Check all that apply.",
        "label": "Tells us a little more about your household and \
        who lives there? Do you live alone or with others? (Select what applies to you).",
        "choices": [
            {
                "id": "2.5.1",
                "label": "Alone",
            },
            {
                "id": "2.5.2",
                "label": "With a friend/friends",
            },
            {   
                "id": "2.5.3",
                "label": "With a spouse/partner",
            },
            {
                "id": "2.5.4",
                "label": "With other family",
            },
            {
                "id": "2.5.5",
                "label": "With a roomate / boarder",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    {
        "id": "2.6",
        "slug": "household-composition",
        "label_pretty": "Tell us a little more about the household and who lives there? Does your family member or \
         friend live alone or with others? (Select what applies ...)",
        "label": "Tell us a little more about the household and who lives there? Does your family member \
        or friend live alone or with others? (Select what applies ...)",
        "choices": [
            {
                "id": "2.6.1",
                "label": "Alone",
            },
            {
                "id": "2.6.2",
                "label": "With a friend/friends",
            },
            {   
                "id": "2.6.3",
                "label": "With a spouse/partner",
            },
            {
                "id": "2.6.4",
                "label": "With other family",
            },
            {
                "id": "2.6.5",
                "label": "With a roomate / boarder",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    {
        "id": "2.7",
        "slug": "household-composition",
        "label_pretty": "Tell us a little more about the household and who lives there? Do your family members or \
        friends live alone or with others? (Select what applies ...).",
        "label": "Tell us a little more about the household and who lives there? Do your family members or friends \
        live alone or with others? (Select what applies ...).",
        "choices": [
            {
                "id": "2.7.1",
                "label": "Alone",
            },
            {
                "id": "2.7.2",
                "label": "With a friend/friends",
            },
            {   
                "id": "2.7.3",
                "label": "With a spouse/partner",
            },
            {
                "id": "2.7.4",
                "label": "With other family",
            },
            {
                "id": "2.7.5",
                "label": "With a roomate / boarder",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    //Equity Groups
    {
        "id": "2.8",
        "slug": "equity-groups",
        "label_pretty": "Some supports, services and considerations within this tool are tailored for specific groups’ needs. Are you a member of any of \
        the groups or communities below? (Select what applies ...)",
        "label": "Some supports, services and considerations within this tool are tailored for specific groups’ needs. Are you a member of any of the \
        groups or communities below? (Select what applies ...).",
        "choices": [
            {
                "id": "2.8.1",
                "label": "African Nova Scotian",
            },
            {
                "id": "2.8.2",
                "label": "Indigenous person",
            },
            {   
                "id": "2.8.3",
                "label": "Mi’kmaw",
            },
            {
                "id": "2.8.4",
                "label": "Newcomer/ Immigrant",
            },
            {
                "id": "2.8.5",
                "label": "2SLGBTQIA+",
            },
            {
                "id": "2.8.6",
                "label": "Not applicable",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    {
        "id": "2.9",
        "slug": "equity-groups",
        "label_pretty": "Some supports, services and considerations within this tool are tailored for specific groups’ needs. Is this person \
        a member of any of the groups or communities below? (Select all what applies ...).",
        "label": "Some supports, services and considerations within this tool are tailored for specific groups’ needs. \
        Is this person a member of any of the groups or communities below? (Select all what applies ...).",
        "choices": [
            {
                "id": "2.9.1",
                "label": "African Nova Scotian",
            },
            {
                "id": "2.9.2",
                "label": "Indigenous person",
            },
            {   
                "id": "2.9.3",
                "label": "Mi’kmaw",
            },
            {
                "id": "2.9.4",
                "label": "Newcomer/ Immigrant",
            },
            {
                "id": "2.9.5",
                "label": "2SLGBTQIA+",
            },
            {
                "id": "2.9.6",
                "label": "Not applicable",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    {
        "id": "2.10",
        "slug": "equity-groups",
        "label_pretty": "Some supports, services and considerations within this tool are tailored for \
        specific groups’ needs. Are these people a member of any of the groups or communities \
        below? Check all that apply.",
        "label": "Some supports, services and considerations within this tool are \
        tailored for specific groups’ needs. \
        Are these people a member of any of the groups or \
        communities below? Check all that apply.",
        "choices": [
            {
                "id": "2.10.1",
                "label": "African Nova Scotian",
            },
            {
                "id": "2.10.2",
                "label": "Indigenous person",
            },
            {   
                "id": "2.10.3",
                "label": "Mi’kmaw",
            },
            {
                "id": "2.10.4",
                "label": "Newcomer/ Immigrant",
            },
            {
                "id": "2.10.5",
                "label": "2SLGBTQIA+",
            },
            {
                "id": "2.10.6",
                "label": "Not applicable",
            },
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : true
    },
    //counties
    {
        "id": "2.11",
        "slug": "geographic-area",
        "label_pretty": "I currently live in and hope to remain in the following \
        counties of Nova Scotia",
        "label": "I currently live in and hope to remain in the following \
        counties of Nova Scotia",
        "choices": [
            {
                "id": "2.11.1",
                "label": "Halifax",
            },
            {
                "id": "2.11.2",
                "label": "Guysborough",
            },
            {
                "id": "2.11.3",
                "label": "Shelburne",
            },
            {
                "id": "2.11.4",
                "label": "Queens",
            },
            {
                "id": "2.11.5",
                "label": "Annapolis",
            },
            {
                "id": "2.11.6",
                "label": "Lunenburg",
            },
            {
                "id": "2.11.7",
                "label": "Kings",
            },
            {
                "id": "2.11.8",
                "label": "Hants",
            },
            {
                "id": "2.11.9",
                "label": "Yarmouth",
            },
            {
                "id": "2.11.10",
                "label": "Colchester",
            },
            {
                "id": "2.11.11",
                "label": "Cumberland",
            },
            {
                "id": "2.11.12",
                "label": "Pictou",
            },
            {
                "id": "2.11.13",
                "label": "Antigonish",
            },
            {
                "id": "2.11.14",
                "label": "Digby",
            },
            {
                "id": "2.11.15",
                "label": "Richmond",
            },
            {
                "id": "2.11.16",
                "label": "Inverness",
            },
            {
                "id": "2.11.17",
                "label": "Victoria",
            },
            {
                "id": "2.11.18",
                "label": "Cape Breton",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.12",
        "slug": "geographic-area",
        "label_pretty": "My loved one currently lives in and hope to remain in the following geographic \
        area of Nova Scotia",
        "label": "My loved one currently lives in and hope to remain in the\
         following counties of Nova Scotia",
        "choices": [
            {
                "id": "2.12.1",
                "label": "Halifax",
            },
            {
                "id": "2.12.2",
                "label": "Guysborough",
            },
            {
                "id": "2.12.3",
                "label": "Shelburne",
            },
            {
                "id": "2.12.4",
                "label": "Queens",
            },
            {
                "id": "2.12.5",
                "label": "Annapolis",
            },
            {
                "id": "2.11.6",
                "label": "Lunenburg",
            },
            {
                "id": "2.12.7",
                "label": "Kings",
            },
            {
                "id": "2.12.8",
                "label": "Hants",
            },
            {
                "id": "2.12.9",
                "label": "Yarmouth",
            },
            {
                "id": "2.12.10",
                "label": "Colchester",
            },
            {
                "id": "2.12.11",
                "label": "Cumberland",
            },
            {
                "id": "2.12.12",
                "label": "Pictou",
            },
            {
                "id": "2.12.13",
                "label": "Antigonish",
            },
            {
                "id": "2.12.14",
                "label": "Digby",
            },
            {
                "id": "2.12.15",
                "label": "Richmond",
            },
            {
                "id": "2.12.16",
                "label": "Inverness",
            },
            {
                "id": "2.12.17",
                "label": "Victoria",
            },
            {
                "id": "2.12.18",
                "label": "Cape Breton",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.13",
        "slug": "geographic-area",
        "label_pretty": "My loved one currently lives in and hope to remain in the following geographic \
        area of Nova Scotia",
        "label": "My loved one currently lives in and hope to remain in the\
         following counties of Nova Scotia",
        "choices": [
            {
                "id": "2.13.1",
                "label": "Halifax",
            },
            {
                "id": "2.13.2",
                "label": "Guysborough",
            },
            {
                "id": "2.13.3",
                "label": "Shelburne",
            },
            {
                "id": "2.13.4",
                "label": "Queens",
            },
            {
                "id": "2.13.5",
                "label": "Annapolis",
            },
            {
                "id": "2.13.6",
                "label": "Lunenburg",
            },
            {
                "id": "2.13.7",
                "label": "Kings",
            },
            {
                "id": "2.13.8",
                "label": "Hants",
            },
            {
                "id": "2.13.9",
                "label": "Yarmouth",
            },
            {
                "id": "2.13.10",
                "label": "Colchester",
            },
            {
                "id": "2.13.11",
                "label": "Cumberland",
            },
            {
                "id": "2.13.12",
                "label": "Pictou",
            },
            {
                "id": "2.13.13",
                "label": "Antigonish",
            },
            {
                "id": "2.13.14",
                "label": "Digby",
            },
            {
                "id": "2.13.15",
                "label": "Richmond",
            },
            {
                "id": "2.13.16",
                "label": "Inverness",
            },
            {
                "id": "2.13.17",
                "label": "Victoria",
            },
            {
                "id": "2.13.18",
                "label": "Cape Breton",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    //Employment & Retirement
    {
        "id": "2.14",
        "slug": "employment-retirement",
        "label_pretty": "Please select the option that best describes your \
                        current employment or retirement situation",
        "label": "Please select the option that best describes your \
                  current employment or retirement situation",
        "choices": [
            {
                "id": "2.14.1",
                "label": "Working part-time or full time",
            },
            {
                "id": "2.14.2",
                "label": "Retired but working full or part-time.",
            },
            {
                "id": "2.14.3",
                "label": "Retired and no longer working",
            },
            {
                "id": "2.14.4",
                "label": "Unemployed but would like to be working",
            },
            {
                "id": "2.14.5",
                "label": "Not applicable. None of these situations fit",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.15",
        "slug": "employment-retirement",
        "label_pretty": "Please select the option that best describes your loved one's \
                        current employment or retirement situation",
        "label": "Please select the option that best describes your \
                 loved one's current employment or retirement situation",
        "choices": [
            {
                "id": "2.15.1",
                "label": "Working part-time or full time",
            },
            {
                "id": "2.15.2",
                "label": "Retired but working full or part-time.",
            },
            {
                "id": "2.15.3",
                "label": "Retired and no longer working",
            },
            {
                "id": "2.15.4",
                "label": "Unemployed but would like to be working",
            },
            {
                "id": "2.15.5",
                "label": "Not applicable. None of these situations fit",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.16",
        "slug": "employment-retirement",
        "label_pretty": "Please select the option that best describes your \
         loved ones' current employment or retirement situation",
        "label": "Please select the option that best describes your  loved ones' \
        current employment or retirement situation",
        "choices": [
            {
                "id": "2.16.1",
                "label": "Working part-time or full time",
            },
            {
                "id": "2.16.2",
                "label": "Retired but working full or part-time.",
            },
            {
                "id": "2.16.3",
                "label": "Retired and no longer working",
            },
            {
                "id": "2.16.4",
                "label": "Unemployed but would like to be working",
            },
            {
                "id": "2.16.5",
                "label": "Not applicable. None of these situations fit",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    //Family Doctor or Nurse Practitioner Access
    {
        "id": "2.17",
        "slug": "family-doctor-or-nurse-practitioner-access",
        "label_pretty": "Do you currently have a family doctor or nurse practitioner?",
        "label": "Do you currently have a family doctor or nurse practitioner?",
        "choices": [
            {
                "id": "2.17.1",
                "label": "Yes",
            },
            {
                "id": "2.17.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.18",
        "slug": "family-doctor-or-nurse-practitioner-access",
        "label_pretty": "Does your loved one, currently have a family doctor \
                            or nurse practitioner?",
        "label": "Does your loved one, currently have a family doctor \
                    or nurse practitioner?",
        "choices": [
            {
                "id": "2.18.1",
                "label": "Yes",
            },
            {
                "id": "2.18.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.19",
        "slug": "family-doctor-or-nurse-practitioner-access",
        "label_pretty": "Do your loved ones'  currently have\
                          a family doctor or nurse practitioner?",
        "label": "Do your loved ones'  currently have a \
                    family doctor or nurse practitioner?",
        "choices": [
            {
                "id": "2.19.1",
                "label": "Yes",
            },
            {
                "id": "2.19.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    //Healthcare Provider(s)
    {
        "id": "2.20",
        "slug": "healthcare-providers",
        "label_pretty": "Do you access any other healthcare provider(s)?",
        "label": "Do you access any other healthcare provider(s)?",
        "choices": [
            {
                "id": "2.20.1",
                "label": "Yes",
            },
            {
                "id": "2.20.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.21",
        "slug": "healthcare-providers",
        "label_pretty": "Does your loved one access any other \
                         healthcare provider(s)?",
        "label": "Does your loved one access any other \
                    healthcare provider(s)?",
        "choices": [
            {
                "id": "2.21.1",
                "label": "Yes",
            },
            {
                "id": "2.21.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    },
    {
        "id": "2.22",
        "slug": "healthcare-providers",
        "label_pretty": "Do your loved ones' access any other healthcare provider(s)?",
        "label": "Do your loved ones' access any other healthcare provider(s)?",
        "choices": [
            {
                "id": "2.22.1",
                "label": "Yes",
            },
            {
                "id": "2.22.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":true,
        'can_multiple_answers' : false
    }

]

export default data;