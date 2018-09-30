import * as request from 'request';

export class GithubApiService {

    getUserInfo(userName: string) {

        let options = {
          headers: {
              "User-Agent": "request"
          }
        };

        request.get('https://api.github.com/users/' + userName, options,
            (error, response, body) => {
            if (!error) {
                console.log("Body: " + body);
            }
        });
    }

    getRepo() {

    }

}