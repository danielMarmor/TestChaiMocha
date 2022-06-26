const supertest = require('supertest');
const should = require('should');
const assert = require('chai');
const axios = require('axios').default;

const server = supertest.agent('localhost:8081');

describe('Test calculator basics',() =>{
    it('adding 10 + 20 = 30', done= ()=>{
        server.get('/add?x=10&y=20')
        .end((err, res)=>{
            res.status.should.equal(200);
            res.body.should.equal(30);
        });
       
    });
});

describe('Test calculator basics',() =>{
    it('adding post 10 + 20 = 30', done= ()=>{
        server.post('/add-post')
        .send({x :10, y :20})
        .end((err, res)=>{
            res.status.should.equal(201);
            res.body.should.equal(30);
        });
    });
});

describe('Test calculator basics',() =>{
    it('mining 40 - 30 = 10', done= ()=>{
        server.get('/min?x=40&y=30')
        .end((err, res)=>{
            res.status.should.equal(200);
            res.body.should.equal(10);
        });      
    });
});

describe('Test calculator basics',() =>{
    it('multiplying 40 * 30 = 1200', done= ()=>{
        server.get('/mult?x=40&y=30')
        .end((err, res)=>{
            res.status.should.equal(200);
            res.body.should.equal(1200);
        });      
    });
});

describe('Test calculator basics',() =>{
    it('devide 100 / 50 = 2', done= ()=>{
        server.get('/div?x=100&y=50')
        .end((err, res)=>{
            res.status.should.equal(200);
            res.body.should.equal(2);
        });      
    });
});


describe('Test calculator basics',() =>{
    it('adding axios 10 + 20 = 30', done= ()=>{
        axios.get('http://localhost:8081/add?x=10&y=20')
        .then((res)=>{
            res.status.should.equal(200);
            res.data.should.equal(30);
            console.log(res.data)
            done(null);
        }) 
        .catch(function (error) { 
            console.log(error)         
            done(error)         
        });
       
    });
});

