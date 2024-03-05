import { client } from "@/sanity/lib/client"

const fetchService = async()=>{
  /* to get the id we will inspect by clicking three dots after opening related service or anything */
  /* To get one doc we will write like below  */
  // const service = (await client.getDocument('fc73d9b7-b644-425d-bc63-ea673febabc1'))
  // const service = (await client.fetch(['fc73d9b7-b644-425d-bc63-ea673febabc1','345188cc-6684-46bf-bcf3-ae1ab3e3ee26']))
  /* Below method is usefull by this it will no store it in cache and will validate when refresh */
  const service = (await client.fetch(`*[_type == "services"]`
  ,{},
  {
    cache:'no-cache'
  }))
  /* We can get all documents and after we can define type of it e.g 
        client.fetch('*[_type == "services"]') */
  console.log(service)
  return service
}
const fetchRev = async()=>{
  const review = await client.getDocument('fd016bda-e7d5-4759-84e0-0163cf2d360a')
  console.log(review)
  return review
}
export default async function Home() {
  const newServ = await fetchService()
  // console.log(newServ)
  const newReview = await fetchRev()
  return (
    <>
    {newServ.map((ser)=>{
      return(
        <>
<h1>{ser.title}</h1>
<h2>{ser.description}</h2>
<hr />
        </>
      )
    })}
    <h1>{newReview.name}</h1>
    <h2>{newReview.position}</h2>
    <h3>{newReview.description}</h3>
    </>
  )
}
