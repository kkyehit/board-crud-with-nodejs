const should = require("should")
const request = require('supertest');
const app = require('../app-route');

// decribe( desc, function(){it( desc , function(){} ) })
describe('GET /users', () =>{
    // it의 첫번째 인자는 성공시 보여주는 메세지이다.
    it('should return 200 status code', ()=> {
        // assert.equal(arr1, arr2) arr1과 arr2가 같지 않다면 에러를 발생시킨다.
        request(app)
        .get('/users')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        })
    });
});