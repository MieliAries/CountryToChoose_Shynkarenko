const { Table } = require('cli-table');
const {MongoClient} = require('mongodb');
const fs = require('fs');

const uri = "mongodb+srv://Mieli:passwordformieli@countrytochoose.xvivhiq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function SaveCountries(){
    try {
        await client.connect();
        await  listCountries(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function connect(){
    try {
        await client.connect();
        console.log(`Connected to DB`)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listCountries(client){
    const result = await client.db("CountryToChoose").collection("countries").find().toArray();

    if(result) {
        console.log(`Found a country:`);
        console.log(result);
        return result;
        const jsonResult = JSON.stringify(result, null, 2); // null and 2 for pretty formatting
        fs.writeFile('../src/db/countries_data.json', jsonResult, 'utf8', (err) => {
            if(err){
                console.error(err);
            }
        });
    }
};

async function findUserByFirstName(client, first_name){
    const result = await client.db("CountryToChoose").collection("users").findOne({first_name: first_name});

    if(result){
        console.log(`Found a profile with the first name: ${first_name}`);
        console.log(result);
    } else {
        console.log(`No profiles with this first name: ${first_name}`)
    }
}

async function findCountryByName(client, Country_Name){
    const result = await client.db("CountryToChoose").collection("countries").findOne({Country_Name: Country_Name});

    if(result){
        console.log(`Found a profile with the first name: ${Country_Name}`);
        console.log(result);
    } else {
        console.log(`No profiles with this first name: ${Country_Name}`)
    }
}

module.exports = {connect, client, SaveCountries};