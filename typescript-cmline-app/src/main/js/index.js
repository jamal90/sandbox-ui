"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./logic/GithubApiService");
console.log("Starting Github App!");
var srv = new GithubApiService_1.GithubApiService();
srv.getUserInfo("jamal90");
