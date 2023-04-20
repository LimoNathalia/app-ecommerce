import clientPromise from '../../lib/mongodb'

export default async function handler(request, response) {
  try {
    const mongoClient = await clientPromise
    const db = mongoClient.db('Ecommerce')
    const collection = db.collection('products')
    const results = await collection.find({}).toArray()

    response.status(200).json(results)
  } catch (e) {
    console.error(e)
  }
}
