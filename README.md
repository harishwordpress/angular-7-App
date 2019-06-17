# Angular 7 App 
Login
![alt text](https://github.com/harishwordpress/angular-7-App/blob/master/snaps/login.png)

Registration 
![alt text](https://github.com/harishwordpress/angular-7-App/blob/master/snaps/registration.png)

List
![alt text](https://github.com/harishwordpress/angular-7-App/blob/master/snaps/list.png)

UPDATE
![alt text](https://github.com/harishwordpress/angular-7-App/blob/master/snaps/update.png)

# GET JSON DATA
```bash
https://github.com/harishwordpress/jsondata/blob/master/db.json
```
# Clone repo

Clone this repo into new project folder (e.g., `my-proj`).
```bash
$ git clone  https://github.com/harishwordpress/angular-7-App  my-proj
$ cd my-proj
```
# Structure of App
```bash
├── dist
│   ├── index.html
│   ├── main.js
│   ├── runtime~main.js
│   └── vendors~main.js
├── package.json
├── package-lock.json
├── README.md
├── snaps
│   ├── list.png
│   ├── login.png
│   ├── registration.png
│   └── update.png
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── _components
│   │   │   ├── alert.component.html
│   │   │   ├── alert.component.ts
│   │   │   └── index.ts
│   │   ├── _guards
│   │   │   ├── auth.guard.ts
│   │   │   └── index.ts
│   │   ├── _helpers
│   │   │   ├── error.interceptor.ts
│   │   │   ├── fake-backend.ts
│   │   │   ├── index.ts
│   │   │   └── jwt.interceptor.ts
│   │   ├── home
│   │   │   ├── filter.pipe.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.ts
│   │   ├── homeDetail
│   │   │   ├── homeDetail.component.html
│   │   │   └── homeDetail.component.ts
│   │   ├── login
│   │   │   ├── login.component.html
│   │   │   └── login.component.ts
│   │   ├── _models
│   │   │   ├── index.ts
│   │   │   └── user.ts
│   │   ├── register
│   │   │   ├── register.component.html
│   │   │   └── register.component.ts
│   │   └── _services
│   │       ├── alert.service.ts
│   │       ├── authentication.service.ts
│   │       ├── index.ts
│   │       └── user.service.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── typings.d.ts
├── tsconfig.json
└── webpack.config.js
```

# Versions 
```bash
make sure u have node or npm installed 
npm -v //5.6.0
node -v // v8.9.4
angular version -7
bootstrap 4.1.3
```

# Install Dependency
```bash

npm install
```

# Start the project 
```bash
npm Start 
npm run-script build
```

# Start Build  
```bash 
npm run-script build
```






