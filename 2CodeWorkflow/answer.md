## Code Workflow

#### Model
* id
* sso
* origins
* secret

#### Routes
* internal/clients
  - get the lists of clients
* clients/by-origin
  - find client by origin
* internal/api-key/Validation
  - check if API key is valid
* internal/clients/:clientId
  - find client by id
* health

--------------------- Inputs after the 2 hours interview ---------------------
## Creativity

#### Submission
* [Github Repo](https://github.com/shumin13/aaweather)
* [Live Version](https://airasiaw.herokuapp.com/)


## 3 Favourite NPM Packages
* [passport](http://passportjs.org/)
  - Easy to set up authentication for Node.js with passport
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
  - Easy to hash and compare passwords in Node.js
* [socket.io](https://socket.io/)
  - Useful for building chat app

## Core
* Question 18 - How do you solve the callback hell in this example?
```
query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
  query("SELECT * FROM transactions WHERE clientId="+ id, function (transactions) {
    transactions.each(function (transac) {
      query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, function (error) {
        if (!error) {
          console.log("success!!");
        } else {
          console.log("error");
        }
      });
    });
  });
});```

* Answer:

```
function message (error) {
  if (!error) {
    console.log("success!!")
  } else {
    console.log("error")
  }
}

function updateTransac (transac) {
  query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, message)
}

function forEachTransac (transactions) {
  transactions.each(updateTransac)
}

function selectID (id) {
  query("SELECT * FROM transactions WHERE clientId="+ id, forEachTransac)
}

query("SELECT clientId FROM clients WHERE clientName='picanteverde';", selectID)
```
