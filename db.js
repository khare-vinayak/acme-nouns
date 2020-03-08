const pg = require('pg')
const Sequelize=require('sequelize');

const conn = new Sequelize('postgres://localhost/acme_nouns');

const People = conn.define('people',{
    name: { type: Sequelize.STRING , unique:true , allowNull : false},
    id: { type: Sequelize.UUID, primaryKey:true,
    defaultValue: Sequelize.UUIDV4}
});

const Places = conn.define('places',{
    name: { type: Sequelize.STRING  , unique:true , allowNull : false},
    id: { type: Sequelize.UUID,  primaryKey:true,
    defaultValue: Sequelize.UUIDV4}
});
const Things = conn.define('things',{
    name: { type: Sequelize.STRING  , unique:true , allowNull : false},
    id: { type: Sequelize.UUID, primaryKey:true,
    defaultValue: Sequelize.UUIDV4}
});

const sync = async()=>{
    await conn.sync({force:true})
}


sync()

module.export={
    sync
};
