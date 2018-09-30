import {GithubApiService} from "./logic/GithubApiService";

console.log("Starting Github App!");

let srv = new GithubApiService();
srv.getUserInfo("jamal90");