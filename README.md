## Waller. Instagram Wall Feed Test

Get the latest Instagram posts every 60 seconds and show them in a slideshow.

### Installation for development

[Go to Manage Clients](https://www.instagram.com/developer/clients/manage/) on instagram developer site to assign an client_id and client_secret for the application.

Install dependences

```
npm install
```

Create the .env file and set

```
REACT_APP_CLIENT_ID=INSTAGRAM_CLIENT_ID
REACT_APP_REDIRECT=REDIRECT_URI
```


### Run

```
npm start
```

The application on start redirect to /login section, login with instagram credentials.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

