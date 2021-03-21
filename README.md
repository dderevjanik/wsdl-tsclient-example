# WSDL TSClient Example

[![travis-status](https://travis-ci.org/dderevjanik/wsdl-tsclient-example.svg?branch=master)](https://travis-ci.org/dderevjanik/wsdl-tsclient-example)

This is example how to generated and use soap client using [wsdl-tsclient](https://github.com/dderevjanik/wsdl-tsclient).

In this example we are generating soap clients from WSDL provided by [24sevenoffice](https://developer.24sevenoffice.com/docs/). All WSDL files are located in `./resources` folder. We are going to use `npm run generate` to generate soap tsclient into `./generated`. Then, in `./src/Index.ts` we are using generated client.