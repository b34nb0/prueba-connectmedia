# Prueba-ConnectMedia  
  
Project build with Node.js, MongoDB and React  

## Web API endpoints:  
* (POST) _/products/load-json_ -> takes json input containing an array of products and inserts them in a MongoDB collection hosted in MongoDB Atlas*  
* (GET)  _/products_ -> gets a list of all the products stored in the collection  
* (GET)  _/products/[id]_ -> gets a product by id (MongoDB-generated id)  
* (POST) _/products/_ -> creates a new product*  
  
_\*Product structure -> {code: String, name: String, description: String, price: Number}_  
  
## Front-end dependencies:  
* react-router-dom  
* axios  
* material-ui  
  
## Back-end dependecies:  
* express  
* mongoose  
* dotenv  
* cors  
  

__Home Page__  
![Home page](/screenshots/prueba-connectmedia-home.png)  
  
__Product Popup__  
![Product popup](/screenshots/prueba-connectmedia-popup.png)  