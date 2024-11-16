const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "randomlover";

const value = {
  name: "dipansh",
  accountNumber: 123,
};
//generate token
const token = jwt.sign(value, SECRET_KEY);
console.log(token);

// decode token
const decodeToken = jwt.decode(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGlwYW5zaCIsImFjY291bnROdW1iZXIiOjEyMywiaWF0IjoxNzI2MzEyNDgyfQ.nx6OUqHJ9DKYEfCUHKMSY9tsiG54Ho79Df9LIYffJoU"
);
console.log(decodeToken);
try {
  const verifiedToken = jwt.verify(
    ".ywiaWF0IjoxNzI2MzEyNDgyfQ.nx6OUqHJ9DKYEfCUHKMSY9tsiG54Ho79Df9LIYffJoU",
    SECRET_KEY,
    () => {
      console.log("Your are Verified");
    }
  );
} catch (e) {
  console.log("Verification Failed");
}
