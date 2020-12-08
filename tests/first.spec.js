const express = require('express');
const request = require('supertest');
const { expect } = require('chai');

const app = express();

app.get('/first', (err, res) => {
  res.status(200).json({
    ok: 'response'
  })
})

describe('First test', () => {
  it('ok response', () => {
    request(app)
      .get('/first')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      })
  })

  it('mocky ok response', (done) => {
    request('https://run.mocky.io')
      .get('/v3/962076b4-5ccf-44c4-ad13-1c1ed1070c78')
      .expect(200, done)
  })
})