const router = require("express").Router();
const Seller = require("../models/seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
