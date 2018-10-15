const mongoose = require("mongoose");
const db = require("../models");
// const Schema = mongoose.Schema;

// This file empties the Drugs collection and inserts the Drugs below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/dorisrx"
);

// mongoose.connect(
//     "mongodb://localhost/dorisrx"
// )


const DrugSeed = [

    {
        ndcNum: "12345",
        rxNum: "25345",
        pharmName: "Walgreens",
        doctorName: "Dr. Smith",
        drugName: "Amoxicillin",
        drugDose: 1,
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-10-07",
        rxReorder: "2018-10-04",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "03-15-2019",
        rxReorder: "06-23-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "true",
        middle: "false",
        late: "false",
        currentQty: 45
        },
        {
        ndcNum: "12345",
        rxNum: "345234",
        pharmName: "Walgreens",
        doctorName: "Dr. Smith",
        drugName: "Amoxicillin",
        drugDose: 1,
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
=======
        bottlePartialQty: 45,
        rxDiscard: "03-15-2019",
        rxReorder: "06-23-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "true",
        middle: "false",
        late: "false",
        currentQty: 45
        },
        {
        ndcNum: "12345",
        rxNum: "44313",
        pharmName: "Walgreens",
        doctorName: "Dr. Smith",
        drugName: "Amoxicillin",
        drugDose: 1,
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-12-07",
        rxReorder: "2018-11-11",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "03-15-2019",
        rxReorder: "06-23-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "true",
        middle: "false",
        late: "false",
        currentQty: 45
        },
        {
        ndcNum: "23456",
        rxNum: "54321",
        pharmName: "King Soopers #14",
        doctorName: "Dr. Jones",
        drugName: "Allopurinol",
        drugSizeMeasureType: "60 mg pill",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "01-01-2019",
        rxReorder: "06-23-2019",
        drugFreq: 2,
        early: "true",
        middle: "false",
        late: "true",
        currentQty: 45
        },
        {
        ndcNum: "23456",
        rxNum: "93882",
        pharmName: "King Soopers #14",
        doctorName: "Dr. Jones",
        drugName: "Allopurinol(Zyloprim)",
        drugDose: 1,
        drugSizeMeasureType: "60 mg pill",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
=======
        bottlePartialQty: 23,
        rxDiscard: "01-01-2019",
        rxReorder: "06-23-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 2,
        early: "true",
        middle: "false",
        late: "true",
        currentQty: 50
        },
        {
        ndcNum: "23456",
        rxNum: "55432",
        pharmName: "King Soopers #14",
        doctorName: "Dr. Jones",
        drugName: "Allopurinol(Zyloprim)",
        drugDose: 1,
        drugSizeMeasureType: "60 mg pill",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "01-01-2019",
        rxReorder: "06-23-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 2,
        early: "true",
        middle: "false",
        late: "true",
        currentQty: 50
        },
        {
        ndcNum: "23456",
        rxNum: "22342",
        pharmName: "Wal-Mart #2",
        doctorName: "Dr. Jones",
        drugName: "Mandol",
<<<<<<< HEAD
        drugForm: "tablet",
        drugFormSize: 50,
        drugFormMeasure: "mg",
        currentQty: 90,
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 2,
        drugFrequency: 2,
        early: true,
        mid: false,
        late: true,
        instructions: "take with 3 glasses of water",
        precautions: "stay close to a bathroom"
    },
    {
        ndcNum: "61-555-32",
        rxNum: "12348",
=======
        drugDose: 1,
        drugSizeMeasureType: "2 oz  liquid",
        bottleFullQty: 60,
        bottlePartialQty: 0,
        rxDiscard: "03-02-2019",
        rxReorder: "09-15-2019",
        drugFreq: 2,
        early: "true",
        middle: "true",
        late: "false",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "234125",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        pharmName: "Wal-Mart #2",
        doctorName: "Dr. Jones",
        drugName: "Mandol",
        drugDose: 1,
        drugSizeMeasureType: "2 oz  liquid",
        bottleFullQty: 60,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 2,
        early: "true",
        middle: "true",
        late: "false",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "34321",
        pharmName: "Wal-Mart #2",
        doctorName: "Dr. Jones",
        drugName: "Mandol",
        drugDose: 1,
        drugSizeMeasureType: "2 oz  liquid",
        bottleFullQty: 60,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 2,
        early: "true",
        middle: "true",
        late: "false",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "33253",
        pharmName: "Rite Aid 05",
        doctorName: "Dr. Johnson",
        drugName: "Savella",
        drugDose: 1,
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2019-03-07",
        rxReorder: "2018-12-11",
        drugDose: 2,
        drugFrequency: 2,
        early: true,
        mid: false,
        late: true,
        instructions: "take with 3 glasses of water",
        precautions: "stay close to a bathroom"
    },
    {
        ndcNum: "99-663-21",
        rxNum: "8813R",
        pharmName: "Rite Aid 05",
        doctorName: "Dr. Johnson",
        drugName: "Savella",
        drugForm: "pill",
        drugFormSize: 150,
        drugFormMeasure: "mg",
        currentQty: 120,
        bottleFullQty: 120,
        taken: false,
        rxDiscard: "2019-06-07",
        rxReorder: "2019-09-11",
        drugDose: 1,
=======
        bottlePartialQty: 23,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "99301",
        pharmName: "Rite Aid 05",
        doctorName: "Dr. Johnson",
        drugName: "Savella",
        drugDose: 1,
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "993431",
        pharmName: "Rite Aid 05",
        doctorName: "Dr. Johnson",
        drugName: "Savella",
        drugDose: 1,
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2019-06-07",
        rxReorder: "2019-09-11",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "995561",
        pharmName: "Rite Aid 05",
        doctorName: "Dr. Johnson",
        drugName: "Savella",
        drugDose: 1,
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "99301",
        pharmName: "Save On 10",
        doctorName: "Dr. Reese",
        drugName: "Ramelteon",
        drugDose: 1,
        drugSizeMeasureType: "90 mg tablet",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2019-02-02",
        rxReorder: "2019-03-03",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 120
        },
        {
        ndcNum: "23456",
        rxNum: "3452",
        pharmName: "Save On 10",
        doctorName: "Dr. Reese",
        drugName: "Ramelteon",
        drugDose: 1,
        drugSizeMeasureType: "90 mg tablet",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2019-02-02",
        rxReorder: "2019-03-03",
        drugDose: 1,
=======
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 24
        },
        {
        ndcNum: "23456",
        rxNum: "88813",
        pharmName: "Save On 10",
        doctorName: "Dr. Reese",
        drugName: "Ramelteon",
        drugDose: 1,
        drugSizeMeasureType: "90 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
        },
    {
        ndcNum: "75113",
        rxNum: "12342",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Actigall",
        drugDose: 1,
        drugSizeMeasureType: "100 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
        },
    {
        ndcNum: "75113",
        rxNum: "89923",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Actigall",
        drugDose: 1,
        drugSizeMeasureType: "100 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 10
        },
    {
        ndcNum: "75113",
        rxNum: "12342",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Gabitril",
        drugDose: 1,
        drugSizeMeasureType: "75 mg pill",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
        },
    {
        ndcNum: "75113",
        rxNum: "12342",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Risperidone",
        drugDose: 1,
        drugSizeMeasureType: "75 mg pill",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
    },
    {
        ndcNum: "75113",
        rxNum: "12342",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Seroquel",
        drugDose: 1,
        drugSizeMeasureType: "90 mg pill",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
    },
    {
        ndcNum: "75113",
        rxNum: "12342",
        pharmName: "Save On 10",
        doctorName: "Dr. Steele",
        drugName: "Rucaparib",
        drugDose: 1,
        drugSizeMeasureType: "25 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
    },
        



];


// This file empties the Contacts collection and inserts the ContactsSeeds below

const ContactsSeed = [
    {
        pharmName: "Walgreens",
        doctorName: "",
        address: "789 South Southern Street",
        city: "Littleton",
        state: "CO", 
        zip: "80128",
        locationId: "RAF777",
        email: "drmatlock@msnbc.com",
        phone: "720-555-5555"
    },
    {
        pharmName: "King Soopers #14",
        doctorName: "",
        address: "2355 S Lowell Blvd",
        city: "Littleton",
        state: "CO", 
        zip: "80127",
        locationId: "14",
        email: "ksoopers14@gmail.com",
        phone: "720-555-5554"
    },
    {
        pharmName: "Wal-Mart #2",
        doctorName: "",
        address: "6882 N Sheridan",
        city: "Westminster",
        state: "CO", 
        zip: "80103",
        locationId: "2",
        email: "walmartpham2@gmail.com",
        phone: "720-555-5533"
    },

    {
        pharmName: "",
        doctorName: "Dr. Smith",
        address: "8882 N Sheridan",
        city: "Westminster",
        state: "CO", 
        zip: "80103",
        locationId: "",
        email: "drsmith2@gmail.com",
        phone: "720-551-5533"
    },
    {
        pharmName: "",
        doctorName: "Dr. Jones",
        address: "9553 N 31st Ave",
        city: "Lakewood",
        state: "CO", 
        zip: "80112",
        locationId: "2",
        email: "drjones@gmail.com",
        phone: "720-550-5333"
    },
    {
        pharmName: "",
        doctorName: "Dr. Jekyl",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", 
        zip: "80121",
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "720-551-5500"
    },
    {
        pharmName: "Rite Aid 05",
        doctorName: "",
        address: "6882 N Sheridan",
        city: "Westminster",
        state: "CO", 
        zip: "80103",
        locationId: "2",
        email: "riteaid22@gmail.com",
        phone: "303-555-5533"
    },
    {
        pharmName: "",
        doctorName: "Dr. Johnson",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", 
        zip: "80121",
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "303-123-5000"
    },
    {
        pharmName: "Wal-Mart 23",
        doctorName: "",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", 
        zip: "80121",
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "303-123-5000"
    },
    {
        pharmName: "",
        doctorName: "Dr. Steele",
        address: "1225 N Federal",
        city: "Westminster",
        state: "CO", 
        zip: "80121",
        locationId: "",
        email: "drSteeles@gmail.com",
        phone: "303-123-5000"
    }

];


// This file empties the Inventory collection and inserts the ContactsSeeds below

const InventorySeed = [

    {
        drugName: "Amoxicillin",
        currentQuantity: 83,
        taken: false,
        drugDose: 2,
        drugFrequency: 1,
        drugForm: "100 mg capsule",
        early: true,
        mid: false,
        late: false,
        },
        {
        drugName: "Allopurinol(Zyloprim)",
        currentQuantity: 09,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        drugForm: "60 mg pill",
        early: true,
        mid: false,
        late: false,
        },
        {
        drugName: "Mandol",
        currentQuantity: 51,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        drugForm: "2 oz  liquid",
        early: true,
        mid: false,
        late: false,
        },
        {
        drugName: "Savella",
        currentQuantity: 36,
        taken: false,
        drugDose: 1,
        drugFrequency: 2,
        drugForm: "150 mg tablet",
        early: true,
        mid: true,
        late: false,
        },
        {
        drugName: "Ramelteon",
        currentQuantity: 4,
        taken: false,
        drugDose: 2,
        drugFrequency: 2,
        drugForm: "90 mg tablet",
        early: true,
        mid: false,
        late: true
        },
        {
        drugName: "Actigall",
        currentQuantity: 120,
        taken: false,
        drugDose: 2,
        drugFrequency: 2,
        drugForm: "100 mg tablet",
        early: true,
        mid: false,
        late: true
        },
        {
        drugName: "Gabitril",
        currentQuantity: 90,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        drugForm: "75 mg pill",
        early: false,
        mid: false,
        late: true
        },
        {
        drugName: "Retapamulin",
        currentQuantity: 8,
        taken: false,
        drugDose: 1,
        drugFrequency: 2,
        drugForm: "50 mg capsule",
        early: false,
        mid: true,
        late: true
        },
        {
        drugName: "Risperidone",
        currentQuantity: 90,
        taken: false,
        drugDose: 3,
        drugFrequency: 1,
        drugForm: "200 mg tablet",
        early: false,
        mid: true,
        late: false
        },
        {
        drugName: "Rucaparib",
        currentQuantity: 90,
        taken: false,
        drugDose: 3,
        drugFrequency: 1,
        drugForm: "25 mg tablet",
        early: false,
        mid: false,
        late: true
        },
        {
        drugName: "Seroquel",
        currentQuantity: 90,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        drugForm: "90 mg pill",
        early: false,
        mid: true,
        late: true
        }



];


//the collection is named "drugs"

db.Drug
    .remove({})
    .then(() => db.Drug.collection.insertMany(DrugSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// the collection is "contacts"

db.Contact
    .remove({})
    .then(() => db.Contact.collection.insertMany(ContactsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// the collection turns out to be "inventories" due to mongo's pluralizing

db.Inventory
    .remove({})
    .then(() => db.Inventory.collection.insertMany(InventorySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });