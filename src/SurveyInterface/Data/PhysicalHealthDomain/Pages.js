let data = [];
// PRE INFO PAGE
data = [...data,...[
    {
        id : "physical-health-opening",
        question_ids : [],
        isRoot: 'physical-health',
        slug:"physical-health-opening",
        image_id :  null,questionsSkip:true,
        info:`As we age, we may experiences changes in our bodies health and wellness. 
        This section will explore 
        things related to physical health - eating, exercise and medical care.`,
        label : "Welcome To Physical Health",
        percentage: 0,
        logic :{
            next_page : null,
            slug: null,
            conditionals :{
                "2.1.1" : "physical-health-opening-aaa",
                "2.1.2" : "physical-health-opening-aab",
                "2.1.3" : "physical-health-opening-aac",

            }
        }
    },   
]];

///physical-health-opening
data = [...data,...[
    {
        id : "physical-health-opening-aaa",
        question_ids : [],
        slug:"physical-health-opening",
        image_id :  null,questionsSkip:true,
        info:"Anticipating and planning for changes in your health now can help you age in place and maintain your physical health and \
                        wellness over time. For example, eating well, exercising regularly, and reducing your exposure to alcohol and smoking may help keep you feeling well \
                        longer. As you consider these questions,\
                        think about your health as it is now and what it might be like in the future.",
        label : "Welcome Physical Health",
        percentage: 0,
        logic :{
            next_page : 'physical-activity-aaa',
            slug: null,
            conditionals : null
        }
    },
    {
        id : "physical-health-opening-aab",
        question_ids : [],
        image_id :  null,questionsSkip:true,
        info:"Anticipating and planning for changes in your loved one's  health now can help them age in place and \
                maintain their physical health and wellness over time. For example, eating well, exercising regularly, \
                and reducing their \
                exposure to alcohol and smoking may help keep them feeling well longer. As you consider these questions,\
                think about their health as it is now and what it might be like in the future",
        label : "Welcome Physical Health",
        percentage: 0,
        logic :{
            next_page : 'physical-activity-aab',
            slug: null,
            conditionals :null
        }
    },
    {
        id : "physical-health-opening-aac",
        question_ids : [],
        image_id :  null,questionsSkip:true,
        info:"Anticipating and planning for changes in your loved ones' health now can help them age in place and maintain their \
                physical health and wellness over time. For example, eating well, exercising regularly, and reducing their exposure \
                to alcohol and smoking may help keep them feeling well longer. As you consider these questions,\
                think about their health as it is now and what it might be like in the future",
        percentage: 0,
        logic :{
            next_page : 'physical-activity-aac',
            slug: null,
            conditionals :null
        }
    },
]];


//Physical Activity
data = [...data,...[
    {
        id : "physical-activity-aaa",
        question_ids : ["3.1","3.4", "3.7"],
        slug:"physical-activity",
        image_id :  null,questionsSkip:true,
        label : "Physical Activty",
        percentage: 12.5,
        logic :{
            next_page : 'healthy-eating-food-security-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "physical-activity-aab",
        question_ids : ["3.2","3.5", "3.8"],
        slug:"physical-activity",
        image_id :  null,questionsSkip:true,
        percentage: 12.5,
        label : "Physical Activty",
        logic :{
            next_page : 'healthy-eating-food-security-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "physical-activity-aac",
        question_ids : ["3.3","3.6", "3.9"],
        slug:"physical-activity",
        image_id :  null,questionsSkip:true,
        label : "Physical Activty",
        percentage: 12.5,
        logic :{
            next_page : 'healthy-eating-food-security-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


//
//Healthy Eating and Food Security
data = [...data,...[
    {
        id : "healthy-eating-food-security-aaa",
        question_ids : ["3.10","3.13", "3.16","3.19"],
        slug:"healthy-eating-food-security",
        image_id :  null,questionsSkip:true,
        label : "Healthy Eating and Food Security",
        percentage: 25,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-info-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "healthy-eating-food-security-aab",
        question_ids : ["3.11","3.14", "3.17","3.20"],
        slug:"healthy-eating-food-security",
        image_id :  null,questionsSkip:true,
        label : "Healthy Eating and Food Security",
        percentage: 25,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-info-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "healthy-eating-food-security-aac",
        question_ids : ["3.12","3.15", "3.18","3.21"],
        slug:"healthy-eating-food-security",
        image_id :  null,questionsSkip:true,
        label : "Healthy Eating and Food Security",
        percentage: 25,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-info-aac',
            slug: null,
            conditionals : null,
        }
    }, 
    
]]


//Preventative Screening Tests and Medical Care -Info
data = [...data,...[
    {
        id : "preventative-screening-tests-medical-care-info-aaa",
        question_ids : [],
        slug:"preventative-screening-tests-medical-care-info",
        image_id :  null,questionsSkip:true,
        info : "As we age, there are a number of preventative screening tests and preventative medical \
        tests that are recommended for certain age grops. These tests can help us understand changes \
        in our body and our health risks. For example, colorectal cancer screening, breast health screening \
        (mammograms), cervical cancer screening, prostate cancer screening, bone density testing, routine glucose monitoring,\
         cholesterol monitoring provide us and our healthcare providers with important information.",
        label : "Preventative Screening Tests and Medical Care Info",
        percentage: 30,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "preventative-screening-tests-medical-care-info-aab",
        question_ids : [],
        slug:"preventative-screening-tests-medical-care-info",
        image_id :  null,questionsSkip:true,
        info : "As we age, there are a number of preventative screening tests and preventative medical \
        tests that are recommended for certain age grops. These tests can help us understand changes \
        in our body and our health risks. For example, colorectal cancer screening, breast health screening \
        (mammograms), cervical cancer screening, prostate cancer screening, bone density testing, routine glucose monitoring,\
         cholesterol monitoring provide us and our healthcare providers with important information.",
        label : "Preventative Screening Tests and Medical Care Info",
        percentage: 30,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "preventative-screening-tests-medical-care-info-aac",
        question_ids : [],
        slug:"preventative-screening-tests-medical-care-info",
        image_id :  null,questionsSkip:true,
        info : "As we age, there are a number of preventative screening tests and preventative medical \
        tests that are recommended for certain age grops. These tests can help us understand changes \
        in our body and our health risks. For example, colorectal cancer screening, breast health screening \
        (mammograms), cervical cancer screening, prostate cancer screening, bone density testing, routine glucose monitoring,\
         cholesterol monitoring provide us and our healthcare providers with important information.",
        label : "Preventative Screening Tests and Medical Care Info",
        percentage: 37.5,
        logic :{
            next_page : 'preventative-screening-tests-medical-care-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


// Preventative Screening Tests and Medical Care
data = [...data,...[
    {
        id : "preventative-screening-tests-medical-care-aaa",
        question_ids : ["3.22","3.25","3.28"],
        slug:"preventative-screening-tests-medical-care",
        image_id :  null,questionsSkip:true,
        label : "Preventative Screening Tests and Medical Care",
        percentage: 37.5,
        logic :{
            next_page : 'medical-history-pre-existing-medical-conditions-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "preventative-screening-tests-medical-care-aab",
        question_ids : ["3.23","3.26","3.29"],
        slug:"preventative-screening-tests-medical-care",
        image_id :  null,questionsSkip:true,
        label : "Preventative Screening Tests and Medical Care",
        percentage: 37.5,
        logic :{
            next_page : 'medical-history-pre-existing-medical-conditions-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "preventative-screening-tests-medical-care-aac",
        question_ids : ["3.24","3.27","3.30"],
        slug:"preventative-screening-tests-medical-care",
        image_id :  null,questionsSkip:true,
        label : "Preventative Screening Tests and Medical Care",
        percentage: 37.5,
        logic :{
            next_page : 'medical-history-pre-existing-medical-conditions-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


// Medical History and Pre-Existing Medical Conditions

data = [...data,...[
    {
        id : "medical-history-pre-existing-medical-conditions-aaa",
        question_ids : ["3.31","3.34","3.37"],
        slug:"medical-history-pre-existing-medical-conditions",
        image_id :  null,questionsSkip:true,
        label : "Medical History and Pre-Existing Medical Conditions",
        percentage: 50,
        logic :{
            next_page : 'medication-reminders-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "medical-history-pre-existing-medical-conditions-aab",
        question_ids : ["3.32","3.35","3.38"],
        slug:"medical-history-pre-existing-medical-conditions",
        image_id :  null,questionsSkip:true,
        label : "Medical History and Pre-Existing Medical Conditions",
        percentage: 50,
        logic :{
            next_page : 'medication-reminders-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "medical-history-pre-existing-medical-conditions-aac",
        question_ids : ["3.33","3.36","3.39"],
        slug:"medical-history-pre-existing-medical-conditions",
        image_id :  null,questionsSkip:true,
        label : "Medical History and Pre-Existing Medical Conditions",
        percentage: 50,
        logic :{
            next_page : 'medication-reminders-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


//Medication Reminders
data = [...data,...[
    {
        id : "medication-reminders-aaa",
        question_ids : ["3.40"],
        slug:"medication-reminders",
        image_id :  null,questionsSkip:true,
        label : "Medication Reminders",
        percentage: 62.5,
        logic :{
            next_page : 'culturally-appropriate-culturally-safe-care-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "medication-reminders-aab",
        question_ids : ["3.41"],
        slug:"medication-reminders",
        image_id :  null,questionsSkip:true,
        label : "Medication Reminders",
        percentage: 62.5,
        logic :{
            next_page : 'culturally-appropriate-culturally-safe-care-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "medication-reminders-aac",
        question_ids : ["3.42"],
        slug:"medication-reminders",
        image_id :  null,questionsSkip:true,
        label : "Medication Reminders",
        percentage: 62.5,
        logic :{
            next_page : 'culturally-appropriate-culturally-safe-care-aac',
            slug: null,
            conditionals : null,
        }
    },
]]

//Culturally Appropriate or Culturally Safe Care
data = [...data,...[
    {
        id : "culturally-appropriate-culturally-safe-care-aaa",
        question_ids : ["3.43","3.46"],
        slug:"culturally-appropriate-culturally-safe-care",
        image_id :  null,questionsSkip:true,
        label : "Culturally Appropriate or Culturally Safe Care",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-info-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "culturally-appropriate-culturally-safe-care-aab",
        question_ids : ["3.44","3.47"],
        slug:"culturally-appropriate-culturally-safe-care",
        image_id :  null,questionsSkip:true,
        label : "Culturally Appropriate or Culturally Safe Care",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-info-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "culturally-appropriate-culturally-safe-care-aac",
        question_ids : ["3.45","3.48"],
        slug:"culturally-appropriate-culturally-safe-care",
        image_id :  null,questionsSkip:true,
        label : "Culturally Appropriate or Culturally Safe Care",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-info-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


// Reducing Physical Health Risks_info
data = [...data,...[
    {
        id : "reducing-physical-health-risks-info-aaa",
        question_ids : [],
        slug:"reducing-physical-health-risks",
        info: `Using commercial tobacco, smoking cannabis and/or drinking alcohol can increase your risk of
               certain types of cancer, heart disease and diabetes. Commercial tobacco is highly 
                addictive. There is no safe or "moderate amount" of commercial tobacco consumption. Reducing how much 
                tobacco you use or quitting altogether, 
                is best for your health now and in the future.`,
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "reducing-physical-health-risks-info-aab",
        question_ids : [],
        slug:"reducing-physical-health-risks",
        info: `Using commercial tobacco, smoking cannabis and/or drinking alcohol can increase your risk of
               certain types of cancer, heart disease and diabetes. Commercial tobacco is highly 
                addictive. There is no safe or "moderate amount" of commercial tobacco consumption. Reducing how much 
                tobacco you use or quitting altogether, 
                is best for your health now and in the future.`,
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "reducing-physical-health-risks-info-aac",
        question_ids : [],
        slug:"reducing-physical-health-risks",
        info: `Using commercial tobacco, smoking cannabis and/or drinking alcohol can increase your risk of
               certain types of cancer, heart disease and diabetes. Commercial tobacco is highly 
                addictive. There is no safe or "moderate amount" of commercial tobacco consumption. Reducing how much 
                tobacco you use or quitting altogether, 
                is best for your health now and in the future.`,
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'reducing-physical-health-risks-aac',
            slug: null,
            conditionals : null,
        }
    },
]]

//
// Reducing Physical Health Risks
data = [...data,...[
    {
        id : "reducing-physical-health-risks-aaa",
        question_ids : ["3.49","3.52","3.55","3.58"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'medical-decision-making-aaa',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "reducing-physical-health-risks-aab",
        question_ids : ["3.50","3.53","3.56","3.59"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'medical-decision-making-aab',
            slug: null,
            conditionals : null,
        }
    },
    {
        id : "reducing-physical-health-risks-aac",
        question_ids : ["3.51","3.54","3.57","3.60"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Reducing Physical Health Risks",
        percentage: 75,
        logic :{
            next_page : 'medical-decision-making-aac',
            slug: null,
            conditionals : null,
        }
    },
]]


//Medical Decision Making
data = [...data,...[
    {
        id : "medical-decision-making-aaa",
        question_ids : ["3.61"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Medical Decision Making",
        percentage: 90,
        logic :{
            next_page : null,
            slug: "/resources",
            conditionals : null,
        }
    },
    {
        id : "medical-decision-making-aab",
        question_ids : ["3.62"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Medical Decision Making",
        percentage: 90,
        logic :{
            next_page : null,
            slug: "/resources",
            conditionals : null,
        }
    },
    {
        id : "medical-decision-making-aac",
        question_ids : ["3.63"],
        slug:"reducing-physical-health-risks",
        image_id :  null,questionsSkip:true,
        label : "Medical Decision Making",
        percentage: 90,
        logic :{
            next_page : null,
            slug: "/resources",
            conditionals : null,
        }
    },
]]

export default data;