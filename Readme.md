# dummyBankApi

Runs in [http://localhost:3001/](http://localhost:3001/)

check also here for details: https://documenter.getpostman.com/view/445508/bankapidemo/RVnVELGw

---

Installation

1.  `npm install`
2.  `npm run start`
3.  `mongod` <span style="color:red">_in seperate terminal_</span>

---

# Transactions

## GET List of transactions

http://localhost:3001/api/transactions

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/transactions`

## POST Create new transaction

http://localhost:3001/api/transactions

##### Headers

Content-Type: `application/json`

##### Body

`{ "Id": Number, "Amount": Number, "Type": Number, "AccountCodeFrom": String, "AccountCodeTo": String, "Comment": String }`

#### Sample Request

`curl --request POST \ --url http://localhost:3001/api/transactions \ --header 'Content-Type: application/json' \ --data '{ "Id": 1003, "Amount": 1.45, "Type": 2, "AccountCodeFrom": "nmpegetis", "AccountCodeTo": "habibi", "Comment": "third comment" }'`

## GET Get Single Transaction

http://localhost:3001/api/transactions/:id

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/transactions/1003`

## PUT Update single transaction

http://localhost:3001/api/transactions/:id

##### Headers

Content-Type: `application/json`

##### Body

`{ "Amount": Number, "Type": Number, "AccountCodeFrom": String, "AccountCodeTo": String, "Comment": String }`

#### Sample Request

`curl --request PUT \ --url http://localhost:3001/api/transactions/1003 \ --header 'Content-Type: application/json' \ --data '{ "Amount": 0.8, "Type": 2, "AccountCodeFrom": "habibi", "AccountCodeTo": "habibi", "Comment": "third comment --edited" }'`

## DELETE Delete single transaction

http://localhost:3001/api/transactions/:id

#### Sample Request

`curl --request DELETE \ --url http://localhost:3001/api/transactions/1002`

---

# Accounts

## GET List of accounts

http://localhost:3001/api/accounts

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/accounts`

## POST Create new account

http://localhost:3001/api/accounts

##### Headers

Content-Type: `application/json`

##### Body

`{ "Id": Number, "Code": String, "Name": String }`

#### Sample Request

`curl --request POST \ --url http://localhost:3001/api/accounts \ --header 'Content-Type: application/json' \ --data '{ "Id": 2, "Code": "rita", "Name": "Rita Bous" }'`

## GET Get Single account

http://localhost:3001/api/accounts/:id

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/accounts/2`

## PUT Update single account

http://localhost:3001/api/accounts/:id

##### Headers

Content-Type: `application/json`

##### BODY

`{"Code":String,"Name":String}`

#### Sample Request

`curl --request PUT \ --url http://localhost:3001/api/accounts/2 \ --header 'Content-Type: application/json' \ --data '{"Code":"habibi","Name":"Rita Bous"}'`

## DELETE Delete single account

http://localhost:3001/api/accounts/:id

#### Sample Request

`curl --request DELETE \ --url http://localhost:3001/api/accounts/2`

---

# Branches

## GET List of branches

http://localhost:3001/api/branches

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/branches`

## POST Create new account

http://localhost:3001/api/branches

##### Headers

Content-Type: `application/json`

##### Body

`{ "Id": Number, "Code": Number, "Description": String }`

#### Sample Request

`curl --request POST \ --url http://localhost:3001/api/branches \ --header 'Content-Type: application/json' \ --data '{ "Id": "1001", "Code": "0073", "Description": "N. Ionia Station" }'`

## GET Get Single account

http://localhost:3001/api/branches/:id

#### Sample Request

`curl --request GET \ --url http://localhost:3001/api/branches/1002`

## PUT Update single account

http://localhost:3001/api/branches/:id

##### Headers

Content-Type: `application/json`

##### BODY

`{"Code":String,"Description":String}`

#### Sample Request

`curl --request PUT \ --url http://localhost:3001/api/branches/1002 \ --header 'Content-Type: application/json' \ --data '{"Code":"0073","Description":"Peukakia Station"}'`

## DELETE Delete single account

http://localhost:3001/api/branches/:id

#### Sample Request

`curl --request DELETE \ --url http://localhost:3001/api/branches/1002`
