/**
 * Exports a handler to be used as a lambda function on Netlify (which is backed by AWS)
 * @see https://www.fastify.io/docs/latest/Serverless/#lambdajs
 */
const awsLambdaFastify = require('aws-lambda-fastify');
const init = require('./app');

const proxy = awsLambdaFastify(init());
exports.handler = proxy;
