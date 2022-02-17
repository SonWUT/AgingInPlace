// {
//     id= null;
//     store = null;
//     slug = "";
//     label = "";
//     questions= [];
//     image_id = 12;
// }

let data = [];
//Who Is This For Pages//
let WHO_IS_THIS_FOR = [
    {
        id : "PRAAAA",
        question_ids : ["2.1"],
        isRoot: 'pre-interview',
        slug:"what-is-this-for",
        image_id :  null,
        label : "Who Is This For",
        percentage: 0.0,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.1.1" : "AGEAAA",
                "2.1.2" : "AGEAAB",
                "2.1.3" : "AGEAAC",

            }
        }
    },   
];

//................................................................
 data =[...data, ...WHO_IS_THIS_FOR];


//Age
let AGE = [
    {
        id : "AGEAAA",
        question_ids : ["2.2"],
        image_id :  null,
        slug:"how-old-are-you",
        label : "How Old...",
        percentage: (1.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.2.1" : "household-composition-aaa",
                "2.2.2" : "household-composition-aaa",
                "2.2.3" : "household-composition-aaa",

            }
        }
    },
    {
        id : "AGEAAB",
        question_ids : ["2.3"],
        image_id :  null,
        slug:"how-old-are-you",
        label : "How Old...",
        percentage: (1.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.3.1" : "household-composition-aab",
                "2.3.2" : "household-composition-aab",
                "2.3.3" : "household-composition-aab",

            }
        }
    }
    ,
    {
        id : "AGEAAC",
        question_ids : ["2.4"],
        image_id :  null,
        label : "How Old...",
        percentage: (1.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.4.1" : "household-composition-aac",
                "2.4.2" : "household-composition-aac",
                "2.4.3" : "household-composition-aac",

            }
        }
    } 
];

//................................................................
 data =[...data, ...AGE];


//HOUSEHOLD
let HOUSE_HOLD_COMP = [
    {
        id : "household-composition-aaa",
        question_ids : ["2.5"],
        image_id :  null,
        slug:"household-composition",
        label : "Household Composition",
        percentage: (2.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.5.1" : "equity-groups-aaa",
                "2.5.2" : "equity-groups-aaa",
                "2.5.3" : "equity-groups-aaa",
                "2.5.4" : "equity-groups-aaa",
                "2.5.5" : "equity-groups-aaa",

            }
        }
    },
    {
        id : "household-composition-aab",
        question_ids : ["2.6"],
        image_id :  null,
        slug:"household-composition",
        label : "Household Composition",
        percentage: (2.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.6.1" : "equity-groups-aab",
                "2.6.2" : "equity-groups-aab",
                "2.6.3" : "equity-groups-aab",
                "2.6.4" : "equity-groups-aab",
                "2.6.5" : "equity-groups-aab",

            }
        }
    }
    ,
    {
        id : "household-composition-aac",
        question_ids : ["2.7"],
        image_id :  null,
        slug:"household-composition",
        label : "Household Composition",
        percentage: (2.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.7.1" : "equity-groups-aac",
                "2.7.2" : "equity-groups-aac",
                "2.7.3" : "equity-groups-aac",
                "2.7.4" : "equity-groups-aac",
                "2.7.5" : "equity-groups-aac",

            }
        }
    } 
];

data =[...data, ...HOUSE_HOLD_COMP];
//................................................................

//EQUITY_GROUPS
let EQUITY_GROUPS = [
    {
        id : "equity-groups-aaa",
        question_ids : ["2.8"],
        image_id :  null,
        slug:"equity-groups",
        label : "Equity Groups",
        percentage: (3.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.8.1" : "geographic-area-aaa",
                "2.8.2" : "geographic-area-aaa",
                "2.8.3" : "geographic-area-aaa",
                "2.8.4" : "geographic-area-aaa",
                "2.8.5" : "geographic-area-aaa",
                "2.8.6" : "geographic-area-aaa",

            }
        }
    },
    {
        id : "equity-groups-aab",
        question_ids : ["2.9"],
        image_id :  null,
        slug:"equity-groups",
        label : "Equity Groups",
        percentage: (3.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.9.1" : "geographic-area-aab",
                "2.9.2" : "geographic-area-aab",
                "2.9.3" : "geographic-area-aab",
                "2.9.4" : "geographic-area-aab",
                "2.9.5" : "geographic-area-aab",
                "2.9.6" : "geographic-area-aab",

            }
        }
    }
    ,
    {
        id : "equity-groups-aac",
        question_ids : ["2.10"],
        image_id :  null,
        slug:"equity-groups",
        label : "Equity Groups",
        percentage: (3.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.10.1" : "geographic-area-aac",
                "2.10.2" : "geographic-area-aac",
                "2.10.3" : "geographic-area-aac",
                "2.10.4" : "geographic-area-aac",
                "2.10.5" : "geographic-area-aac",
                "2.10.6" : "geographic-area-aac",

            }
        }
    } 
];

data =[...data, ...EQUITY_GROUPS];


//counties
let GEOGRAPHIC_AREA = [
    { 
        id : "geographic-area-aaa",
        question_ids : ["2.11"],
        image_id :  null,
        slug:"geographic-area",
        label : "Counties",
        percentage: (4.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.11.1" : "employment-and-retirement-aaa",
                "2.11.2" : "employment-and-retirement-aaa",
                "2.11.3" : "employment-and-retirement-aaa",
                "2.11.4" : "employment-and-retirement-aaa",
                "2.11.5" : "employment-and-retirement-aaa",
                "2.11.6" : "employment-and-retirement-aaa",
                "2.11.7" : "employment-and-retirement-aaa",
                "2.11.8" : "employment-and-retirement-aaa",
                "2.11.9" : "employment-and-retirement-aaa",
                "2.11.10" : "employment-and-retirement-aaa",
                "2.11.11" : "employment-and-retirement-aaa",
                "2.11.12" : "employment-and-retirement-aaa",
                "2.11.13" : "employment-and-retirement-aaa",
                "2.11.14" : "employment-and-retirement-aaa",
                "2.11.15" : "employment-and-retirement-aaa",
                "2.11.16" : "employment-and-retirement-aaa",
                "2.11.17" : "employment-and-retirement-aaa",
                "2.11.18" : "employment-and-retirement-aaa",

            }
        }
    },
    {
        id : "geographic-area-aab",
        question_ids : ["2.12"],
        image_id :  null,
        slug:"geographic-area",
        label : "Counties",
        percentage: (4.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.12.1" : "employment-and-retirement-aab",
                "2.12.2" : "employment-and-retirement-aab",
                "2.12.3" : "employment-and-retirement-aab",
                "2.12.4" : "employment-and-retirement-aab",
                "2.12.5" : "employment-and-retirement-aab",
                "2.12.6" : "employment-and-retirement-aab",
                "2.12.7" : "employment-and-retirement-aab",
                "2.12.8" : "employment-and-retirement-aab",
                "2.12.9" : "employment-and-retirement-aab",
                "2.12.10" : "employment-and-retirement-aab",
                "2.12.11" : "employment-and-retirement-aab",
                "2.12.12" : "employment-and-retirement-aab",
                "2.12.13" : "employment-and-retirement-aab",
                "2.12.14" : "employment-and-retirement-aab",
                "2.12.15" : "employment-and-retirement-aab",
                "2.12.16" : "employment-and-retirement-aab",
                "2.12.17" : "employment-and-retirement-aab",
                "2.12.18" : "employment-and-retirement-aab",

            }
        }
    }
    ,
    {
        id : "geographic-area-aac",
        question_ids : ["2.13"],
        image_id :  null,
        slug:"geographic-area",
        label : "Counties",
        percentage: (4.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.13.1" : "employment-and-retirement-aac",
                "2.13.2" : "employment-and-retirement-aac",
                "2.13.3" : "employment-and-retirement-aac",
                "2.13.4" : "employment-and-retirement-aac",
                "2.13.5" : "employment-and-retirement-aac",
                "2.13.6" : "employment-and-retirement-aac",
                "2.13.7" : "employment-and-retirement-aac",
                "2.13.8" : "employment-and-retirement-aac",
                "2.13.9" : "employment-and-retirement-aac",
                "2.13.10" : "employment-and-retirement-aac",
                "2.13.11" : "employment-and-retirement-aac",
                "2.13.12" : "employment-and-retirement-aac",
                "2.13.13" : "employment-and-retirement-aac",
                "2.13.14" : "employment-and-retirement-aac",
                "2.13.15" : "employment-and-retirement-aac",
                "2.13.16" : "employment-and-retirement-aac",
                "2.13.17" : "employment-and-retirement-aac",
                "2.13.18" : "employment-and-retirement-aac",

            }
        }
    } 
];

data =[...data, ...GEOGRAPHIC_AREA];

//Employment & Retirment
let EMPLOYMENT_AND_RETIREMENT = [
    { 
        id : "employment-and-retirement-aaa",
        question_ids : ["2.14"],
        image_id :  null,
        slug:"employment-and-retirement",
        label : "Employment And Retirement",
        percentage: (5.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.14.1" : "family-doctor-or-nurse-aaa",
                "2.14.2" : "family-doctor-or-nurse-aaa",
                "2.14.3" : "family-doctor-or-nurse-aaa",
                "2.14.4" : "family-doctor-or-nurse-aaa",
                "2.14.5" : "family-doctor-or-nurse-aaa",

            }
        }
    },
    { 
        id : "employment-and-retirement-aab",
        question_ids : ["2.15"],
        image_id :  null,
        slug:"employment-and-retirement",
        label : "Employment And Retirement",
        percentage: (5.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.15.1" : "family-doctor-or-nurse-aab",
                "2.15.2" : "family-doctor-or-nurse-aab",
                "2.15.3" : "family-doctor-or-nurse-aab",
                "2.15.4" : "family-doctor-or-nurse-aab",
                "2.15.5" : "family-doctor-or-nurse-aab",

            }
        }
    }
    ,
    { 
        id : "employment-and-retirement-aac",
        question_ids : ["2.16"],
        image_id :  null,
        slug:"employment-and-retirement",
        label : "Employment And Retirement",
        percentage: (5.0/7)*100,
        logic :{
            next_page : null,slug: null,
            conditionals :{
                "2.16.1" : "family-doctor-or-nurse-aac",
                "2.16.2" : "family-doctor-or-nurse-aac",
                "2.16.3" : "family-doctor-or-nurse-aac",
                "2.16.4" : "family-doctor-or-nurse-aac",
                "2.16.5" : "family-doctor-or-nurse-aac",

            }
        }
    }
];

data =[...data, ...EMPLOYMENT_AND_RETIREMENT];

//FAMIL DOCTOR
let FAMILY_DOCTOR = [
    { 
        id : "family-doctor-or-nurse-aaa",
        question_ids : ["2.17"],
        image_id :  null,
        slug:"family-doctor-or-nurse",
        label : "Family Doctor Or Nurse",
        percentage: (6.0/7)*100,
        logic :{
            next_page : null,slug: '/domain-page',
            conditionals :{
                "2.17.1" : "health-providers-aaa",
                "2.17.2" : "health-providers-aaa",

            }
        }
    },
    { 
        id : "family-doctor-or-nurse-aab",
        question_ids : ["2.18"],
        image_id :  null,
        slug:"family-doctor-or-nurse",
        label : "Family Doctor Or Nurse",
        percentage: (6.0/7)*100,
        logic :{
            next_page : null,slug: "/domain-page",
            conditionals :{
                "2.18.1" : "health-providers-aab",
                "2.18.2" : "health-providers-aab",
            }
        }
    },
    { 
        id : "family-doctor-or-nurse-aac",
        question_ids : ["2.19"],
        image_id :  null,
        slug:"family-doctor-or-nurse",
        label : "Family Doctor Or Nurse",
        percentage: (6.0/7)*100,
        logic :{
            next_page : null,slug: '/domain-page',
            conditionals :{
                "2.19.1" : "health-providers-aac",
                "2.19.2" : "health-providers-aac",
            }
        }
    },
];

data =[...data, ...FAMILY_DOCTOR];
//Healthcare Providers
//FAMIL DOCTOR
let HEALTHCARE_PROVIDER = [
    { 
        id : "health-providers-aaa",
        question_ids : ["2.20"],
        image_id :  null,
        slug:"health-providers",
        label : "HealthCare Providers",
        percentage: (7.0/7)*100,
        logic :{
            next_page : null,slug: '/domain-page',
            conditionals : null
        }
    },
    { 
        id : "health-providers-aab",
        question_ids : ["2.21"],
        image_id :  null,
        slug:"health-providers",
        label : "HealthCare Providers",
        percentage: (7.0/7)*100,
        logic :{
            next_page : null,slug: '/domain-page',
            conditionals :null
        }
    },
    { 
        id : "health-providers-aac",
        question_ids : ["2.22"],
        image_id :  null,
        slug:"health-providers",
        label : "HealthCare Providers",
        percentage: (7.0/7)*100,
        logic :{
            next_page : null,slug: '/domain-page',
            conditionals :null
        }
    },
   
];

data =[...data, ...HEALTHCARE_PROVIDER];



export default data;