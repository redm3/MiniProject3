# MiniProject3
Clone https://github.com/redm3/MiniProject3.git
npm install axios
npm install express
npm install dotenv
npm install mongoose --save
npm init
npm run start
GET
http://127.0.0.1:8000/api/users/ retrive all Users which is automated on npm start
GET
http://127.0.0.1:8000/api/products  retrive all products which is automated on npm start
Post order 
http://127.0.0.1:8000/api/orders/create
in this format
{
  "id": 1,
  "userId": "64362039ff6373d8692cc6f7",
  "date": "2023-04-12T12:34:56.789Z",
  "products": [
    {
      "productId": "64376f90ab8111f192d252cf",
      "quantity": 2
    },
    {
      "productId": "64376f90ab8111f192d252d0",
      "quantity": 1
    }
  ]
}
only use UserID and productID that exist in database
