<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://www.cintap.com/wp-content/uploads/2022/05/ReactJS.png" width="400" alt="Laravel Logo"></a></p>


## Instructions
1- Clone the repo
```bash
   git clone https://github.com/uusa35/excercise-blackstone.git
```
- 2- to create new docker image up and running from terminal cd to project folder then write
```bash
   cd excercise-blackstone && composer install && ./vendor/bin/sail up
```
- 3- OPEN NEW TERMINAL then cd to project folder and run the following :
```bash
     ./vendor/bin/sail artisan migrate:refresh --seed
```
- 3- within the project folder install and build your dev
```bash
     yarn install && yarn dev
```
- 4- open a browser then navigate to http://localhost:8000 as requested.
