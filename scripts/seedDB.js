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
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
<<<<<<< HEAD
        taken: false,
        rxDiscard: "2018-10-07",
        rxReorder: "2018-10-04",
=======
        bottlePartialQty: 0,
        rxDiscard: "03-15-2019",
        rxReorder: "06-23-2019",
>>>>>>> a2ad63edf1849241fe34dfed23511ec32212f898
        drugDose: 1,
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
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
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
        drugSizeMeasureType: "100 mg capsule",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2018-12-07",
        rxReorder: "2018-11-11",
        drugDose: 1,
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
        drugDose: 1,
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
        drugSizeMeasureType: "60 mg pill",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
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
        drugSizeMeasureType: "60 mg pill",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2018-11-07",
        rxReorder: "2018-10-11",
        drugDose: 1,
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
        pharmName: "Wal-Mart #2",
        doctorName: "Dr. Jones",
        drugName: "Mandol",
        drugSizeMeasureType: "2 oz  liquid",
        bottleFullQty: 60,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugDose: 1,
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
        drugSizeMeasureType: "2 oz  liquid",
        bottleFullQty: 60,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugDose: 1,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2019-06-07",
        rxReorder: "2019-09-11",
        drugDose: 1,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugDose: 1,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2019-02-02",
        rxReorder: "2019-03-03",
        drugDose: 1,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        taken: false,
        rxDiscard: "2019-02-02",
        rxReorder: "2019-03-03",
        drugDose: 1,
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
        drugSizeMeasureType: "150 mg tablet",
        bottleFullQty: 90,
        bottlePartialQty: 0,
        rxDiscard: "05-10-2019",
        rxReorder: "09-15-2019",
        drugDose: 1,
        drugFreq: 1,
        early: "false",
        middle: "false",
        late: "true",
        currentQty: 55
        }

];


// This file empties the Contacts collection and inserts the ContactsSeeds below

const ContactsSeed = [
    {
        pharmName: "Walgreens",
        doctorName: "",
        address: "789 South Southern Street",
        city: "Littleton",
        state: "CO", "zip": 80128,
        locationId: "RAF777",
        email: "drmatlock@msnbc.com",
        phone: "720-555-5555"
    },
    {
        pharmName: "King Soopers #14",
        doctorName: "",
        address: "2355 S Lowell Blvd",
        city: "Littleton",
        state: "CO", "zip": 80127,
        locationId: "14",
        email: "ksoopers14@gmail.com",
        phone: "720-555-5554"
    },
    {
        pharmName: "Wal-Mart #2",
        doctorName: "",
        address: "6882 N Sheridan",
        city: "Westminster",
        state: "CO", "zip": 80103,
        locationId: "2",
        email: "walmartpham2@gmail.com",
        phone: "720-555-5533"
    },

    {
        pharmName: "",
        doctorName: "Dr. Smith",
        address: "8882 N Sheridan",
        city: "Westminster",
        state: "CO", "zip": 80103,
        locationId: "",
        email: "drsmith2@gmail.com",
        phone: "720-551-5533"
    },
    {
        pharmName: "",
        doctorName: "Dr. Jones",
        address: "9553 N 31st Ave",
        city: "Lakewood",
        state: "CO", "zip": 80112,
        locationId: "2",
        email: "drjones@gmail.com",
        phone: "720-550-5333"
    },
    {
        pharmName: "",
        doctorName: "Dr. Jekyl",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", "zip": 80121,
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "720-551-5500"
    },
    {
        pharmName: "Rite Aid 05",
        doctorName: "",
        address: "6882 N Sheridan",
        city: "Westminster",
        state: "CO", "zip": 80103,
        locationId: "2",
        email: "riteaid22@gmail.com",
        phone: "303-555-5533"
    },
    {
        pharmName: "",
        doctorName: "Dr. Johnson",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", "zip": 80121,
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "303-123-5000"
    },
    {
        pharmName: "",
        doctorName: "Dr. Reese",
        address: "8882 N Wadsworth",
        city: "Arvada",
        state: "CO", "zip": 80121,
        locationId: "",
        email: "drjekyl@gmail.com",
        phone: "303-123-5000"
    },
    {
        pharmName: "",
        doctorName: "Dr. Steele",
        address: "1225 N Federal",
        city: "Westminster",
        state: "CO", "zip": 80121,
        locationId: "",
        email: "drSteeles@gmail.com",
        phone: "303-123-5000"
    }

];


// This file empties the Inventory collection and inserts the ContactsSeeds below

const InventorySeed = [

    {
        drugName: "Amoxicillin",
        currentQuantity: 90,
        taken: false,
        drugDose: 2,
        drugFrequency: 1,
        early: true,
        mid: false,
        late: false,
        drugForm: "pill",
        taken: false
        },
        {
        drugName: "Allopurinol(Zyloprim)",
        currentQuantity: 09,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        early: true,
        mid: false,
        late: false,
        drugForm: "pill",
        taken: false
        },
        {
        drugName: "Mandol",
        currentQuantity: 23,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        early: true,
        mid: false,
        late: false,
        drugForm: "capsule",
        taken: false
        },
        {
        drugName: "Savella",
        currentQuantity: 33,
        taken: false,
        drugDose: 1,
        drugFrequency: 2,
        early: true,
        mid: true,
        late: false,
        drugForm: "Ounce's'",
        taken: false
        },
        {
        drugName: "Ramelteon",
        currentQuantity: 8,
        taken: false,
        drugDose: 2,
        drugFrequency: 2,
        early: true,
        mid: false,
        late: true,
        drugForm: "capsule",
        taken: false
        },
        {
        drugName: "Actigall",
        currentQuantity: 12,
        taken: false,
        drugDose: 2,
        drugFrequency: 2,
        early: true,
        mid: false,
        late: true,
        drugForm: "pill",
        taken: false
        },
        {
        drugName: "Gabitril",
        currentQuantity: 75,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        early: false,
        mid: false,
        late: true,
        drugForm: "Ounce's'",
        taken: false
        },
        {
        drugName: "Retapamulin",
        currentQuantity: 62,
        taken: false,
        drugDose: 1,
        drugFrequency: 2,
        early: false,
        mid: true,
        late: true,
        drugForm: "Ounce's'",
        taken: false
        },
        {
        drugName: "Risperidone",
        currentQuantity: 43,
        taken: false,
        drugDose: 3,
        drugFrequency: 1,
        early: false,
        mid: false,
        late: true,
        drugForm: "pill",
        taken: false
        },
        {
        drugName: "Rucaparib",
        currentQuantity: 45,
        taken: false,
        drugDose: 3,
        drugFrequency: 1,
        early: false,
        mid: false,
        late: true,
        drugForm: "pill",
        taken: false
        },
        {
        drugName: "Seroquel",
        currentQuantity: 44,
        taken: false,
        drugDose: 1,
        drugFrequency: 1,
        early: false,
        mid: false,
        late: true,
        drugForm: "capsule",
        taken: false
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