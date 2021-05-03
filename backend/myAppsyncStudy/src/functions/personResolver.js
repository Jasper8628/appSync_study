import { DynamoDB } from 'aws-sdk'
const db = new DynamoDB
export const handlePerson = (id) => {
    const params={
        id:id
    }
    db.getItem(params)
    .then(res=>{
        console.log(res)
    })
}
export const handlePeople=()=>{
    const params={}
    db.batchGetItem(params)
    .then(res=>{
        console.log(res)
    })
}