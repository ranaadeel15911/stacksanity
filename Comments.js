/* We will first go to sanity.io and after making account we will go to make new project than run command to create sanity in latest 
version if getting some issue than we will install 3.16.1 after when we create project it will ask some question like 

Would you like to add configuration file for sanity project in next js file  ? Yes
Do you wants to use typscriopt ? No 
Would you like an embadded sanity studio ? Yes
Would You like to use the Next.js app directry for route ? Yes
What route woould you like to use for studo ? /admin 
Select project template to use ?  blog or any other which you wnats
Would you like to add project ID and dataset to your .env file ? Yes

Here sanity studio means admin dashboard which we can see in /admin routeif we allow
Some mistakes will occure in post.js firstly remove ) at the end of this file after
it will be write like this  
 const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }]
    we will firstly store in a const than at end we will export default post like below
export default post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }]
    export dafault post
    
    

    After we will se add core origin this means 
    As we know we are talking with server of sanity and we are working with next js which is also a server side 
    And this is disallow.Only allow is to talk client to server so to talk with server to server we will tell the link of 
    localhost at which we are running  after deploying on vercel we will go to our project in sanity and at core origin we will provide
    link of vercel where deployed means domain link in core origin of sanity projec otherwise it will not work

    To add to core we will go in our project than we will go in api and here we will see cors origin and than we will add here 
    If we wwill write * than it will allow all the server which is not good by privacy reason

We will define schema after 

    When we will click services and after if list is empty at top of it we will see write icon with pencil we will click o it 

    We will allow to anyone to /admin route by going to project and than go to +invite member if we will invite as a viewr than he can 
    only view your work if we will allow editor than can edit and other is administrator
*/