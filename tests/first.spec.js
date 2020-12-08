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
})