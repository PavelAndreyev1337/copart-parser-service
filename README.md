# Copart parser service 🚘
Service for parsing data about copart and IAAI cars by reference.

## How run service locally
* clone repository
* go to project folder
* change `.env.example` to `.env` and put your credential
* install dependencies `npm i`
* run `npm start`

## How deploy 🏁
* go to VPS via ssh
* create new user and add to sudo
* switch to new user
* install node.js
* clone repository
* rename `.env.example` to `.env` and write your credential
* install dependencies via NPM `npm i`
* install chrome
* install xvfb
* execute commands `sudo npm install -g n` and `sudo n stable` (for pm2 autoreload)
* install pm2 via `sudo npm install pm2 -g`
* install nginx
* use `nginx/site.conf`
* start pm2 via `pm2 start process.json`
* add autoreload:
    * `pm2 save`
    * `pm2 install pm2-logrotate`
    * `pm2 logs`
    * `pm2 startup`
    * `sudo reboot`
* add SSL via Certbot
* enjoy 😇
