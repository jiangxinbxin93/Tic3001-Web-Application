var chai = require("chai");
let { expect, assert } = require("chai");

var jp = require("jsonpath");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("REST API", function () {
    let userId;
    describe("POST", ()=> {
        it("/particular", async function () {
            const data = {
              name: "John",
              phone: `9${Math.floor(Math.random()*9999999)}`,
              
            };
        
            let res = await chai
              .request("http://localhost:3000/particular")
              .post("/")
              .send(data)
              .set("Content-Type", "application/json")
              .set("Acceept", "application/json");
        
            expect(res).to.have.status(201);
            expect(res.body).to.deep.include(data);
            userId=res.body._id;
           
          });

    });

    describe("GET", ()=> {
        it("/particular", async function () {
            let res = await chai.request("http://localhost:3000/particular").get("/");
        
            expect(res).to.have.status(200);
          });

    });

    describe("PATCH", ()=> {
        it("/particular/:id", async function () {
            const data={phone: `9${Math.floor(Math.random()*9999999)}`};
            let res = await chai
              .request("http://localhost:3000/particular")
              .patch(`/${userId}`)
              .send(data)
              .set("Content-Type", "application/json")
              .set("Acceept", "application/json");
              //expect(res).to.have.status(200);
            expect(res.body.phone).to.equal(data.phone);
         
          });


    })
    describe("DELETE", ()=> {
        it("/particular/:id", async function () {
            let res = await chai
              .request("http://localhost:3000/particular")
              .delete(`/${userId}`);
        
            expect(res).to.have.status(200);
           
            
          });


    })

 
});
