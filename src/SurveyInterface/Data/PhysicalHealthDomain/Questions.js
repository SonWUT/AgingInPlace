let data = [];

//Title: Physical Activity

// Physcial Activity
const Physcial_Activity_PART_ONE  =[
    // Physcial Activity - 3.1
    {
            "id": "3.1",
            "slug": "physical-activity-part-1",
            "label_pretty": "I am physically able to do a variety of physical activities that I enjoy.",
            "label": "I am physically able to do a variety of physical activities that I enjoy.",
            "choices": [{
                    "id": "3.1.1",
                    "label": "Yes",
                },
                {
                    "id": "3.1.2",
                    "label": "Yes, with adaptations",
                },
                {
                    "id": "3.1.3",
                    "label": "No",
                }
            ],
            "image_id": null,"require_answer":false,
            'can_multiple_answers' : false
    },
    // Physcial Activity - 3.2
    {
        "id": "3.2",
        "slug": "physical-activity-part-1",
        "label_pretty": "My loved one is physically able to do a variety of physical activities that they enjoy",
        "label": "My loved one is physically able to do a variety of physical activities that they enjoy",
        "choices": [{
                "id": "3.2.1",
                "label": "Yes",
            },
            {
                "id": "3.2.2",
                "label": "Yes, with adaptations",
            },
            {
                "id": "3.2.3",
                "label": "No",
            }
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.3
    {
        "id": "3.3",
        "slug": "physical-activity-part-1",
        "label_pretty": "My loved one is physically able to do a variety of physical activities that they enjoy",
        "label": "My loved one is physically able to do a variety of physical activities that they enjoy",
        "choices": [{
                "id": "3.3.1",
                "label": "Yes",
            },
            {
                "id": "3.3.2",
                "label": "Yes, with adaptations",
            },
            {
                "id": "3.3.3",
                "label": "No",
            }
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    }
];

data = [...data, ...Physcial_Activity_PART_ONE];

const Physcial_Activity_PART_TWO  =[
    // Physcial Activity - 3.4
    {
            "id": "3.4",
            "slug": "physical-activity-part-2",
            "label_pretty": "I have places I can go to be physically active in my home and community.",
            "label": "I have places I can go to be physically active in my home and community.",
            "choices": [{
                    "id": "3.4.1",
                    "label": "Yes",
                },
                {
                    "id": "3.4.2",
                    "label": "No",
                },
            ],
            "image_id": null,"require_answer":false,
            'can_multiple_answers' : false
    },
    // Physcial Activity - 3.5
    {
        "id": "3.5",
        "slug": "physical-activity-part-2",
        "label_pretty": "My loved one has places they can go to be physically active in their home and community.",
        "label": "My loved one has places they can go to be physically active in their home and community.",
        "choices": [{
                "id": "3.5.1",
                "label": "Yes",
            },
            {
                "id": "3.5.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.6
     {
        "id": "3.6",
        "slug": "physical-activity-part-2",
        "label_pretty": "My loved ones' have places they can go to be physically active in their home and community.",
        "label": "My loved ones' have places they can go to be physically active in their home and community.",
        "choices": [{
                "id": "3.6.1",
                "label": "Yes",
            },
            {
                "id": "3.6.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    

]
data = [...data, ...Physcial_Activity_PART_TWO];
//
const Physcial_Activity_PART_THREE  =[
    // Physcial Activity - 3.7
    {
            "id": "3.7",
            "slug": "physical-activity-part-3",
            "label_pretty": "I can generally afford to participate in the types of physical activity I enjoy doing.",
            "label": "I can generally afford to participate in the types of physical activity I enjoy doing.",
            "choices": [{
                    "id": "3.7.1",
                    "label": "Yes",
                },
                {
                    "id": "3.7.2",
                    "label": "No",
                },
            ],
            "image_id": null,"require_answer":false,
            'can_multiple_answers' : false
    },
    // Physcial Activity - 3.8
    {
        "id": "3.8",
        "slug": "physical-activity-part-3",
        "label_pretty": "My loved one can generally afford to participate in the types of physical activity they enjoy doing",
        "label": "My loved one can generally afford to participate in the types of physical activity they enjoy doing",
        "choices": [{
                "id": "3.8.1",
                "label": "Yes",
            },
            {
                "id": "3.8.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.9
    {
        "id": "3.9",
        "slug": "physical-activity-part-3",
        "label_pretty": "My loved ones' can generally afford to participate in the types of physical activity they enjoy doing.",
        "label": "My loved ones' can generally afford to participate in the types of physical activity they enjoy doing.",
        "choices": [{
                "id": "3.9.1",
                "label": "Yes",
            },
            {
                "id": "3.9.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ...Physcial_Activity_PART_THREE];

// Title: Healthy Eating and Food Security

let Healthy_Eating_And_Food_Security_PART_ONE = [
    // Physcial Activity - 3.10
    {
        "id": "3.10",
        "slug": "Healthy-Eating-And-Food-Security-1",
        "label_pretty": "In a typical day, I generally eat a variety of healthy foods including a mix of fruits, \
        vegetables, whole grains and sources of lean protein.",
        "label": "In a typical day, I generally eat a variety of healthy foods including a mix of fruits, vegetables,\
         whole grains and sources of lean protein.",
        "choices": [{
                "id": "3.10.1",
                "label": "Yes",
            },
            {
                "id": "3.10.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.11
     {
        "id": "3.11",
        "slug": "Healthy-Eating-And-Food-Security-1",
        "label_pretty": "In a typical day, my loved one generally eats a variety of healthy foods including a mix of fruits, \
        vegetables, whole grains and sources of lean protein.",
        "label": "In a typical day, my loved one generally eats a variety of healthy foods including a mix of fruits, vegetables,\
         whole grains and sources of lean protein.",
        "choices": [{
                "id": "3.11.1",
                "label": "Yes",
            },
            {
                "id": "3.11.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.12
     {
        "id": "3.12",
        "slug": "Healthy-Eating-And-Food-Security-1",
        "label_pretty": "In a typical day, my loved ones' generally eat a variety of healthy foods \
        including a mix of fruits, vegetables, \
        whole grains and sources of lean protein.",
        "label": "In a typical day, my loved ones' generally eat a variety of healthy foods including \
        a mix of fruits, vegetables, whole grains and sources of lean protein.",
        "choices": [{
                "id": "3.12.1",
                "label": "Yes",
            },
            {
                "id": "3.12.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ...Healthy_Eating_And_Food_Security_PART_ONE ];

let Healthy_Eating_And_Food_Security_PART_TWO = [
    // Physcial Activity - 3.13
    {
        "id": "3.13",
        "slug": "Healthy-Eating-And-Food-Security-2",
        "label_pretty": "I skip meals and go hungry because I  can not afford to purchase enough to eat.",
        "label": "I skip meals and go hungry because I  can not afford to purchase enough to eat.",
        "choices": [{
                "id": "3.13.1",
                "label": "Yes",
            },
            {
                "id": "3.13.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.14
     {
        "id": "3.14",
        "slug": "Healthy-Eating-And-Food-Security-2",
        "label_pretty": "My loved one skips meals and go hungry because they can not afford to purchase enough to eat.",
        "label": "My loved one skips meals and go hungry because they can not afford to purchase enough to eat.",
        "choices": [{
                "id": "3.14.1",
                "label": "Yes",
            },
            {
                "id": "3.14.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    }
    ,
    // Physcial Activity - 3.15
    {
        "id": "3.15",
        "slug": "Healthy-Eating-And-Food-Security-2",
        "label_pretty": "My loved ones' skip meals and go hungry because they can not\
                        afford to purchase enough to eat.",
        "label": "My loved ones' skip meals and go hungry because they \
                can not afford to purchase enough to eat.",
        "choices": [{
                "id": "3.15.1",
                "label": "Yes",
            },
            {
                "id": "3.15.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    
]

data = [...data, ... Healthy_Eating_And_Food_Security_PART_TWO];

// 
let Healthy_Eating_And_Food_Security_PART_THREE = [
    // Physcial Activity - 3.16
    {
        "id": "3.16",
        "slug": "Healthy-Eating-And-Food-Security-3",
        "label_pretty": "I tend to eat less healthy food options.",
        "label": "I tend to eat less healthy food options.",
        "choices": [
            {
                "id": "3.16.1",
                "label": "Never",
            },
            {
                "id": "3.16.2",
                "label": "Rarely",
            },
            {
                "id": "3.16.3",
                "label": "Sometimes",
            },
            {
                "id": "3.16.4",
                "label": "Frequently",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.17
     {
        "id": "3.17",
        "slug": "Healthy-Eating-And-Food-Security-3",
        "label_pretty": "My loved one tends to eat less healthy food options.",
        "label": "My loved one tend to eat less healthy food options.",
        "choices": [
            {
                "id": "3.17.1",
                "label": "Never",
            },
            {
                "id": "3.17.2",
                "label": "Rarely",
            },
            {
                "id": "3.17.3",
                "label": "Sometimes",
            },
            {
                "id": "3.17.4",
                "label": "Frequently",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.18
     {
        "id": "3.18",
        "slug": "Healthy-Eating-And-Food-Security-3",
        "label_pretty": "My loved ones' tend to eat less healthy food options.",
        "label": "My loved ones' tend to eat less healthy food options.",
        "choices": [
            {
                "id": "3.18.1",
                "label": "Never",
            },
            {
                "id": "3.18.2",
                "label": "Rarely",
            },
            {
                "id": "3.18.3",
                "label": "Sometimes",
            },
            {
                "id": "3.18.4",
                "label": "Frequently",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ... Healthy_Eating_And_Food_Security_PART_THREE];

let Healthy_Eating_And_Food_Security_PART_FOUR = [
    // Physcial Activity - 3.19
    {
        "id": "3.19",
        "slug": "Healthy-Eating-And-Food-Security-4",
        "label_pretty": "I tend to eat less healthy food options because \
                         ... (Please choose all that apply)",
        "label": "I tend to eat less healthy food options because \
                  ... (Please choose all that apply)",
        "choices": [
            {
                "id": "3.19.1",
                "label": "of Convenience",
            },
            {
                "id": "3.19.2",
                "label": "these options are more affordable",
            },
            {
                "id": "3.19.3",
                "label": "this is what is accessible",
            },
            {
                "id": "3.19.4",
                "label": "of taste preferences",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    },
    // Physcial Activity - 3.20
    {
        "id": "3.20",
        "slug": "Healthy-Eating-And-Food-Security-4",
        "label_pretty": "My loved one tends to eat less healthy food options because ... \
        (Please choose all that apply)",
        "label": "My loved one tends to eat less healthy food\
         options because ... (Please choose all that apply)",
        "choices": [
            {
                "id": "3.20.1",
                "label": "of Convenience",
            },
            {
                "id": "3.20.2",
                "label": "these options are more affordable",
            },
            {
                "id": "3.20.3",
                "label": "this is what is accessible",
            },
            {
                "id": "3.20.4",
                "label": "of taste preferences",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    },
      // Physcial Activity - 3.21
      {
        "id": "3.21",
        "slug": "Healthy-Eating-And-Food-Security-4",
        "label_pretty": "My loved ones' tend to eat less healthy \
                    food options because ... (Please choose all that apply)",
        "label": "My loved ones' tend to eat less healthy food options because ... \
                    (Please choose all that apply)",
        "choices": [
            {
                "id": "3.21.1",
                "label": "of Convenience",
            },
            {
                "id": "3.21.2",
                "label": "these options are more affordable",
            },
            {
                "id": "3.21.3",
                "label": "this is what is accessible",
            },
            {
                "id": "3.21.4",
                "label": "of taste preferences",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    }
]

data = [...data, ... Healthy_Eating_And_Food_Security_PART_FOUR];

//
let Healthy_Eating_And_Food_Security_PART_FIVE = [
    // Physcial Activity - 3.22
    {
        "id": "3.22",
        "slug": "Healthy-Eating-And-Food-Security-5",
        "label_pretty": "I am aware of the various types of preventative screening tests \
            that are recommended for people my age and have already \
            discussed or plan to discuss these soon with my healthcare provider.",
        "label": "I am aware of the various types of preventative screening tests that\
                    are recommended for people my age and have already discussed \
                    or plan to discuss these soon with my healthcare provider.",
        "choices": [
            {
                "id": "3.22.1",
                "label": "Yes",
            },
            {
                "id": "3.22.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.23
    {
        "id": "3.23",
        "slug": "Healthy-Eating-And-Food-Security-5",
        "label_pretty": "My loved one is aware of the various types of preventative screening \
        tests that are recommended for people their age and have already discussed or\
         plan to discuss these soon with their healthcare provider.",
        "label": "My loved one is aware of the various types of preventative screening tests that are\
         recommended for people their age and have already discussed\
         or plan to discuss these soon with their healthcare provider.",
        "choices": [
            {
                "id": "3.23.1",
                "label": "Yes",
            },
            {
                "id": "3.23.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.24
     {
        "id": "3.24",
        "slug": "Healthy-Eating-And-Food-Security-5",
        "label_pretty": "My loved ones' are aware of the various types of preventative screening tests that are recommended for people their age and have already discussed or \
        plan to discuss these soon with their healthcare provider.",
        "label": "My loved ones' are aware of the various types of preventative \
        screening tests that are recommended for people their age and have already discussed \
        or plan to discuss these soon with their healthcare provider.",
        "choices": [
            {
                "id": "3.24.1",
                "label": "Yes",
            },
            {
                "id": "3.24.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    }
]

data = [...data, ... Healthy_Eating_And_Food_Security_PART_FIVE];
//
//
let Healthy_Eating_And_Food_Security_PART_SIX = [
    // Physcial Activity - 3.25
    {
        "id": "3.25",
        "slug": "Healthy-Eating-And-Food-Security-6",
        "label_pretty": "I schedule regular appointments for ... (check all that apply)",
        "label": "I schedule regular appointments for ... (check all that apply)",
        "choices": [
            {
                "id": "3.25.1",
                "label": "Physical Check-ups",
            },
            {
                "id": "3.25.2",
                "label": "Vision Tests",
            },
            {
                "id": "3.25.3",
                "label": "Dental  Check-Ups",
            },
            {
                "id": "3.25.4",
                "label": "Hearing Tests",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    },
     // Physcial Activity - 3.26
     {
        "id": "3.26",
        "slug": "Healthy-Eating-And-Food-Security-6",
        "label_pretty": " My loved one schedules regular appointments for ... (check all that apply)",
        "label": "My loved ones' schedule regular appointments for ... (check all that apply)",
        "choices": [
            {
                "id": "3.26.1",
                "label": "Physical Check-ups",
            },
            {
                "id": "3.26.2",
                "label": "Vision Tests",
            },
            {
                "id": "3.26.3",
                "label": "Dental  Check-Ups",
            },
            {
                "id": "3.26.4",
                "label": "Hearing Tests",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    },
    // Physcial Activity - 3.27
    {
        "id": "3.27",
        "slug": "Healthy-Eating-And-Food-Security-6",
        "label_pretty": "My loved ones' schedule regular appointments for ... (check all that apply)",
        "label": "My loved ones' schedule regular appointments for ... (check all that apply)",
        "choices": [
            {
                "id": "3.27.1",
                "label": "Physical Check-ups",
            },
            {
                "id": "3.27.2",
                "label": "Vision Tests",
            },
            {
                "id": "3.27.3",
                "label": "Dental  Check-Ups",
            },
            {
                "id": "3.27.4",
                "label": "Hearing Tests",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : true
    },
    
]



data = [...data, ... Healthy_Eating_And_Food_Security_PART_SIX];

//
let Healthy_Eating_And_Food_Security_PART_SEVEN = [
      // Physcial Activity - 3.28
      {
        "id": "3.28",
        "slug": "Healthy-Eating-And-Food-Security-7",
        "label_pretty": "  I know know how to keep my bones healthy and strong, and have discussed \
        this with my doctor or other health care professionals.",
        "label": "  I know know how to keep my bones healthy and strong, and have discussed \
        this with my doctor or other health care professionals.",
        "choices": [
            {
                "id": "3.28.1",
                "label": "Yes",
            },
            {
                "id": "3.28.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.29
    {
        "id": "3.29",
        "slug": "Healthy-Eating-And-Food-Security-7",
        "label_pretty": "My loved one knows know how to keep their bones healthy and strong, and have discussed this \
        with their doctor or other health care professionals.",
        "label": "My loved one knows know how to keep their bones healthy and strong, and have discussed this with their doctor or \
        other health care professionals.",
        "choices": [
            {
                "id": "3.29.1",
                "label": "Yes",
            },
            {
                "id": "3.29.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.30
     {
        "id": "3.30",
        "slug": "Healthy-Eating-And-Food-Security-7",
        "label_pretty": " My loved ones' know how to keep their bones healthy and strong, and have discussed \
        this with their doctor or other health care professionals.",
        "label": " My loved ones' know how to keep their bones healthy and strong, and have \
        discussed this with their doctor or other health care professionals.",
        "choices": [
            {
                "id": "3.30.1",
                "label": "Yes",
            },
            {
                "id": "3.30.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ...Healthy_Eating_And_Food_Security_PART_SEVEN];



let medical_history_pre_existing_medical_conditions_part_one =[
    // Physcial Activity - 3.31
    {
      "id": "3.31",
      "slug": "medical-history-pre-existing-medical-conditions-1",
      "label_pretty": " I have talked with my healthcare provider about my pre-existing medical condition(s) \
      and what services and supports I may need as I age.",
      "label": " I have talked with my healthcare provider about my pre-existing medical condition(s) \
      and what services and supports I may need as I age.",
      "choices": [
          {
              "id": "3.31.1",
              "label": "Yes",
          },
          {
              "id": "3.31.2",
              "label": "No",
          },
      ],
      "image_id": null,"require_answer":false,
      'can_multiple_answers' : false
  },
  // Physcial Activity - 3.32
  {
    "id": "3.32",
    "slug": "medical-history-pre-existing-medical-conditions-1",
    "label_pretty": "My loved one has talked with their healthcare provider about their pre-existing medical condition(s) and\
     what services and supports they may need as they age.",
    "label": "My loved one has talked with their healthcare provider about their pre-existing medical condition(s) \
    and what services and supports they may need as they age.",
    "choices": [
        {
            "id": "3.32.1",
            "label": "Yes",
        },
        {
            "id": "3.32.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
    },
      // Physcial Activity - 3.33
  {
    "id": "3.33",
    "slug": "medical-history-pre-existing-medical-conditions-1",
    "label_pretty": "My loved ones' have talked with their healthcare providers \
    about their pre-existing medical condition(s) and what services \
    and supports they may need as they age.",
    "label": "My loved ones' have talked with their healthcare providers about \
    their pre-existing medical \
    condition(s) and what services and supports they may need as they age.",
    "choices": [
        {
            "id": "3.33.1",
            "label": "Yes",
        },
        {
            "id": "3.33.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
    },
]

data = [...data, ...medical_history_pre_existing_medical_conditions_part_one];

//
let medical_history_pre_existing_medical_conditions_part_two =[
    // Physcial Activity - 3.34
    {
      "id": "3.34",
      "slug": "medical-history-pre-existing-medical-conditions-2",
      "label_pretty": "I am aware of my family’s medical history and have talked with my healthcare provider\
       about what I can do now to maintain my health.",
      "label": "I am aware of my family’s medical history and have talked with my healthcare \
      provider about what I can do now to maintain my health.",
      "choices": [
          {
              "id": "3.34.1",
              "label": "Yes",
          },
          {
              "id": "3.34.2",
              "label": "No",
          },
      ],
      "image_id": null,"require_answer":false,
      'can_multiple_answers' : false
  },
    // Physcial Activity - 3.35
    {
        "id": "3.35",
        "slug": "medical-history-pre-existing-medical-conditions-2",
        "label_pretty": "My loved one is aware of their family’s medical history and have \
        talked with their healthcare provider \
        about  what they can do now to maintain their health.",
        "label": "My loved one is aware of their family’s medical \
        history and have talked with their healthcare \
        provider about  what they can do now to maintain their health.",
        "choices": [
            {
                "id": "3.35.1",
                "label": "Yes",
            },
            {
                "id": "3.35.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
      // Physcial Activity - 3.36
      {
        "id": "3.36",
        "slug": "medical-history-pre-existing-medical-conditions-2",
        "label_pretty": "My loved ones' are aware of their family’s medical history and have talked with \
        their healthcare provider about what they can do now to maintain their health.",
        "label": "My loved ones' are aware of their family’s medical history and have talked with their healthcare\
         provider about what they can do now to maintain their health.",
        "choices": [
            {
                "id": "3.36.1",
                "label": "Yes",
            },
            {
                "id": "3.36.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ...medical_history_pre_existing_medical_conditions_part_two];


let medical_history_pre_existing_medical_conditions_part_three =[
    // Physcial Activity - 3.37
    {
      "id": "3.37",
      "slug": "medical-history-pre-existing-medical-conditions-3",
      "label_pretty": "I have talked with my healthcare provider about \
      how my health care needs may change as I age.",
      "label": "I have talked with my healthcare provider about\
       how my health care needs may change as I age.",
      "choices": [
          {
              "id": "3.37.1",
              "label": "Yes",
          },
          {
              "id": "3.37.2",
              "label": "No",
          },
      ],
      "image_id": null,"require_answer":false,
      'can_multiple_answers' : false
  },
   // Physcial Activity - 3.38
   {
    "id": "3.38",
    "slug": "medical-history-pre-existing-medical-conditions-3",
    "label_pretty": "My loved one has talked with their healthcare provider about how \
    their health care needs may change as they age.",
    "label": "My loved one has talked with their healthcare provider about\
     how their health care needs may change as they age.",
    "choices": [
        {
            "id": "3.38.1",
            "label": "Yes",
        },
        {
            "id": "3.38.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
    },
    // Physcial Activity - 3.39
   {
    "id": "3.39",
    "slug": "medical-history-pre-existing-medical-conditions-3",
    "label_pretty": "My loved ones' have talked with their healthcare provider about \
    how their health care needs may change as they age.",
    "label": "My loved ones' have talked with their healthcare provider about how \
    their health care needs may change as they age.",
    "choices": [
        {
            "id": "3.39.1",
            "label": "Yes",
        },
        {
            "id": "3.39.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
    },
]

data = [...data, ...medical_history_pre_existing_medical_conditions_part_three];


// Physcial Activity - 3.

let medication_reminders_part_one = [
     // Physcial Activity - 3.40
     {
        "id": "3.40",
        "slug": "medication_reminders-1",
        "label_pretty": "I am aware of electronic tools, such as medication reminders and health management systems \
        that will allow me to track and manage my medication(s).",
        "label": "I am aware of electronic tools, such as medication reminders and health management systems \
        that will allow me to track and manage my medication(s).",
        "choices": [
            {
                "id": "3.40.1",
                "label": "Yes",
            },
            {
                "id": "3.40.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.41
     {
        "id": "3.41",
        "slug": "medication_reminders-1",
        "label_pretty": "My loved one is aware of electronic tools, such as medication reminders and health management \
        systems that will allow them to track and manage their medication(s).",
        "label": "My loved one is aware of electronic tools, such as medication reminders and health management systems that \
        will allow them to track and manage their medication(s).",
        "choices": [
            {
                "id": "3.41.1",
                "label": "Yes",
            },
            {
                "id": "3.41.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.42
     {
        "id": "3.42",
        "slug": "medication_reminders-1",
        "label_pretty": "My loved ones' are aware of electronic tools, such as medication reminders and health management systems \
        that will allow them to track and manage their medication(s).",
        "label": "My loved ones' are aware of electronic tools, such as medication reminders and health management systems \
        that will allow them to track and manage their medication(s).",
        "choices": [
            {
                "id": "3.42.1",
                "label": "Yes",
            },
            {
                "id": "3.42.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]


data = [...data, ...medication_reminders_part_one];
//
let culturally_appropriate_culturally_safe_care_part_one = [
      // Physcial Activity - 3.43
      {
        "id": "3.43",
        "slug": "culturally_appropriate_culturally_safe_care-1",
        "label_pretty": "I have access to health care providers that I trust and who share my cultural identity",
        "label": "I have access to health care providers that I trust and who share my cultural identity",
        "choices": [
            {
                "id": "3.43.1",
                "label": "Yes",
            },
            {
                "id": "3.43.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    {
        "id": "3.44",
        "slug": "culturally_appropriate_culturally_safe_care-1",
        "label_pretty": "My loved one has access to health care providers that \
        they trust and who share their cultural identity.",
        "label": "My loved one has access to health care providers that they \
        trust and who share their cultural identity.",
        "choices": [
            {
                "id": "3.44.1",
                "label": "Yes",
            },
            {
                "id": "3.44.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     {
        "id": "3.45",
        "slug": "culturally_appropriate_culturally_safe_care-1",
        "label_pretty": "My loved ones' have access to health care \
        providers that they trust and who share their cultural identities",
        "label": "My loved ones' have access to health care providers that \
        they trust and who share their cultural identities",
        "choices": [
            {
                "id": "3.45.1",
                "label": "Yes",
            },
            {
                "id": "3.45.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]


data = [...data, ...culturally_appropriate_culturally_safe_care_part_one];
//
let culturally_appropriate_culturally_safe_care_part_two = [
    // Physcial Activity - 3.46
    {
      "id": "3.46",
      "slug": "culturally_appropriate_culturally_safe_care-2",
      "label_pretty": "I have access to healthcare providers that may not share my cultural identity, but I trust them to provide me\
       with culturally appropriate or culturally safe care.",
      "label": "I have access to healthcare providers that may not share my cultural identity, but I trust them to provide me with \
      culturally appropriate or culturally safe care.",
      "choices": [
          {
              "id": "3.46.1",
              "label": "Yes",
          },
          {
              "id": "3.46.2",
              "label": "No",
          },
      ],
      "image_id": null,"require_answer":false,
      'can_multiple_answers' : false
  },
  // Physcial Activity - 3.47
  {
    "id": "3.47",
    "slug": "culturally_appropriate_culturally_safe_care-2",
    "label_pretty": "My loved one has access to healthcare providers that \
    may not share their cultural identity, but they trust them to provide\
     them  with culturally appropriate or culturally safe care.",
    "label": "My loved one has access to healthcare providers that may not share t\
    heir cultural identity, but they trust \
    them to provide them  with culturally appropriate or culturally safe care.",
    "choices": [
        {
            "id": "3.47.1",
            "label": "Yes",
        },
        {
            "id": "3.47.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
},
 // Physcial Activity - 3.48
 {
    "id": "3.48",
    "slug": "culturally_appropriate_culturally_safe_care-2",
    "label_pretty": "My loved ones' have access to healthcare providers that may not share their cultural identities ,\
     but they trust them to provide \
    them with culturally appropriate or culturally safe care",
    "label": "My loved ones' have access to healthcare providers that may not share their cultural identities , \
    but they trust them to provide them with culturally appropriate or culturally safe care",
    "choices": [
        {
            "id": "3.48.1",
            "label": "Yes",
        },
        {
            "id": "3.48.2",
            "label": "No",
        },
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
}
]

data = [...data, ...culturally_appropriate_culturally_safe_care_part_two];


let reducing_physical_health_risks_one = [
    

    // Physcial Activity - 3.49
    {
        "id": "3.49",
        "slug": "reducing_physical_health_risks-1",
        "label_pretty": "",
        "label": `I currently use commercial tobacco. For example, smoking cigarettes, cigars or chewing commercial tobacco`,
        "choices": [
            {
                "id": "3.49.1",
                "label": "Yes",
            },
            {
                "id": "3.49.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.50
     {
        "id": "3.50",
        "slug": "reducing_physical_health_risks-1",
        "label_pretty": ``,
        "label":`My loved one currently uses commercial tobacco. For example, smoking cigarettes, cigars, or chewing commercial tobacco.`,
        "choices": [
            {
                "id": "3.50.1",
                "label": "Yes",
            },
            {
                "id": "3.50.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.51
    {
        "id": "3.51",
        "slug": "reducing_physical_health_risks-1",
        "label_pretty": "",
        "label": `At least one of my loved ones' currently uses commercial tobacco. For example, smoking cigarettes, cigars or chewing commercial tobacco.`,
        "choices": [
            {
                "id": "3.51.1",
                "label": "Yes",
            },
            {
                "id": "3.51.2",
                "label": "No",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.51.1
    {
        "id": "3.51.1",
        "slug": "reducing_physical_health_risks-1",
        "label_pretty": "",
        "label": "",
         "info":`Using commercial tobacco, smoking cannabis and/or drinking alcohol can increase your risk of certain types of cancer, \
         heart disease and diabetes. Commercial tobacco is highly addictive. \There is no safe or moderate amount" of commercial\
          tobacco consumption. Reducing how much tobacco you use or quitting \
          altogether, is best for your health now and in the future.`,
        "choices": [],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]

data = [...data, ...reducing_physical_health_risks_one];

// 
let reducing_physical_health_risks_two = [
    

    // Physcial Activity - 3.52
    {
        "id": "3.52",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "I have plans to reduce or quit my tobacco use in the next six months.",
        "label": "I have plans to reduce or quit my tobacco use in the next six months.",
        "choices": [
            {
                "id": "3.52.1",
                "label": "Yes",
            },
            {
                "id": "3.52.2",
                "label": "No",
            },
            {
                "id": "3.52.3",
                "label": "Unsure",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
    // Physcial Activity - 3.52=3
    {
        "id": "3.53",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "My loved one has plans to reduce or quit tobacco use in the next six months.",
        "label": "My loved one has plans to reduce or quit tobacco use in the next six months.",
        "choices": [
            {
                "id": "3.53.1",
                "label": "Yes",
            },
            {
                "id": "3.53.2",
                "label": "No",
            },
            {
                "id": "3.53.3",
                "label": "Unsure",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
      // Physcial Activity - 3.54
      {
        "id": "3.54",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "At least one of my loved ones' have a plan to \
        reduce or quit tobacco use in the next six months.",
        "label": "At least one of my loved ones' have a plan to reduce or quit \
        tobacco use in the next six months.",
        "choices": [
            {
                "id": "3.54.1",
                "label": "Yes",
            },
            {
                "id": "3.54.2",
                "label": "No",
            },
            {
                "id": "3.54.3",
                "label": "Unsure",
            },
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    }
]

data = [...data, ...reducing_physical_health_risks_two];



//// 
let reducing_physical_health_risks_three = [
    

    // Physcial Activity - 3.55
    {
        "id": "3.55",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "I regularly drink alcohol.",
        "label": "I regularly drink alcohol.",
        "choices": [
            {
                "id": "3.55.1",
                "label": "Yes",
            },
            {
                "id": "3.55.2",
                "label": "No",
            },
           
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.56
     {
        "id": "3.56",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "My loved one regularly drinks alcohol.",
        "label": "My loved one regularly drinks alcohol.",
        "choices": [
            {
                "id": "3.56.1",
                "label": "Yes",
            },
            {
                "id": "3.56.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.57
     {
        "id": "3.57",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "At least one of my loved ones' regularly drinks alcohol.",
        "label": "At least one of my loved ones' regularly drinks alcohol..",
        "choices": [
            {
                "id": "3.57.1",
                "label": "Yes",
            },
            {
                "id": "3.57.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]


data = [...data, ...reducing_physical_health_risks_three];

// Physcial Activity - 3.
//// 
let reducing_physical_health_risks_four = [
    

    // Physcial Activity - 3.58
    {
        "id": "3.58",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "I currently smoke or inhale cannabis (i.e. marijuana, pot or weed).",
        "label": "I currently smoke or inhale cannabis (i.e. marijuana, pot or weed).",
        "choices": [
            {
                "id": "3.58.1",
                "label": "Yes",
            },
            {
                "id": "3.58.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.59
     {
        "id": "3.59",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "My loved one currently smokes or inhales cannabis (i.e. marijuana, pot or weed).",
        "label": "IMy loved one currently smokes or inhales cannabis (i.e. marijuana, pot or weed).",
        "choices": [
            {
                "id": "3.59.1",
                "label": "Yes",
            },
            {
                "id": "3.59.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
     // Physcial Activity - 3.60
     {
        "id": "3.60",
        "slug": "reducing_physical_health_risks-2",
        "label_pretty": "At least one of my loved ones' currently smoke or inhale cannabis (i.e. marijuana, pot or weed).",
        "label": "At least one of my loved ones' currently smoke or inhale cannabis (i.e. marijuana, pot or weed).",
        "choices": [
            {
                "id": "3.60.1",
                "label": "Yes",
            },
            {
                "id": "3.60.2",
                "label": "No",
            },
            
        ],
        "image_id": null,"require_answer":false,
        'can_multiple_answers' : false
    },
]


data = [...data, ...reducing_physical_health_risks_four];



let medical_decision_making_part_one =[
  // Physcial Activity - 3.58
{
    "id": "3.61",
    "slug": "reducing_physical_health_risks-2",
    "label_pretty": "I have documented my thoughts and wishes regarding medical decisions and end of life care should I become \
    physically unable to communicate those decisions to others.",
    "label": " have documented my thoughts and wishes regarding medical decisions and end of life care should I/they become \
    physically unable to communicate those decisions to others.",
    "choices": [
        {
            "id": "3.61.1",
            "label": "Yes",
        },
        {
            "id": "3.61.2",
            "label": "No",
        },
        
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
},
{
    "id": "3.62",
    "slug": "reducing_physical_health_risks-2",
    "label_pretty": "My loved one has documented their thoughts and wishes regarding medical decisions and end of life care should they become \
    physically unable to communicate those decisions to others.",
    "label": "My loved one has documented their thoughts and wishes regarding medical decisions and end of life care should they become physically \
    unable to communicate those decisions to others.",
    "choices": [
        {
            "id": "3.62.1",
            "label": "Yes",
        },
        {
            "id": "3.62.2",
            "label": "No",
        },
        
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
},
{
    "id": "3.63",
    "slug": "reducing_physical_health_risks-2",
    "label_pretty": "At least one of my loved ones' have documented their thoughts and wishes regarding medical decisions\
     and end of life care should they become \
    physically unable to communicate those decisions to others.",
    "label": "At least one of my loved ones' have documented their thoughts and wishes regarding \
    medical decisions and end of life care should they become \
    physically unable to communicate those decisions to others.",
    "choices": [
        {
            "id": "3.63.1",
            "label": "Yes",
        },
        {
            "id": "3.63.2",
            "label": "No",
        },
        
    ],
    "image_id": null,"require_answer":false,
    'can_multiple_answers' : false
},
]

data = [...data, ...medical_decision_making_part_one];


export default data;