# Description


## Run Dev

1. Clone repository
2. Create copy of ```.env.template``` and rename to ```.env``` and change the credentials.
3. Install dependencies ```npm install```
4. Build databe ```docker-compose up -d```
5. Run migrations from Prisma ```npx prisma migrate dev```
5. Execute seed ```npm run seed```
6. Run porject ```npm run dev```


## Run Prod


## Tech used

1. State Management - Zustand
2. Prisma
3. Postgresql
