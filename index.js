import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresStrategy from "./src/strategies/postegresStrategy.js"
const postgresConnectionString = "postgres://george:senha2@localhost:5432/heroes"
 

const mongoDBConnectionString = 'mongodb://george:mypass@localhost:27017/heroes'
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))
await mongoDBContext.connect()

const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect()
 
 
 const data = [
     {
        name:"georgelobo",
        type: "transaction"
        
    },
    {
        
        name:"ricardosilva",
        type:"activityLog"
    }
]

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext,
}
  

for(const {type,name} of data){
     const context = contextTypes[type]
     await context.create({name: name + Date.now()})
   console.log(await context.read())
  }


 