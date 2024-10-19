const model = require('../models/index.js');
const AltSource = require('../models/alt-source.js');

const insertAltSource = async function (conference, transaction) {
    try {
        return await AltSource.findOrCreate({
            where: { acronym: conference.acronym, source: conference.source , field_of_research: conference.fieldsOfResearch, rank: conference.rank , ConferenceConfid : conference.conf_id },
            defaults: { acronym: conference.acronym, source: conference.source , field_of_research: conference.fieldsOfResearch, rank: conference.rank , ConferenceConfid : conference.conf_id },
            transaction: transaction
        });
    }catch (error) {
        console.log(error);
        throw (error);
    }
} ; 

module.exports = {
    insertAltSource
}