
# React tRPC Prisma MongoDB 

<img src="https://github.com/Shaban-Eissa/React-tRPC-Prisma-MongoDB/assets/49924090/9926a968-38ef-46c7-b8b7-7032ebd609bb" width="900" height="450" />

A Fullstack built with React, tRPC, Prisma, and MongoDB.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Features

- **Create:** Allow users to create items that stored on mongoDB.
- **Delete:** Allow users to delete items that stored on mongoDB.


## Demo

<img src="https://github.com/Shaban-Eissa/React-tRPC-Prisma-MongoDB/assets/49924090/b306820f-6691-49d4-99e1-22ee426e3bb2" width="900" height="400" />


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/React-tRPC-Prisma-MongoDB
   ```

2. Navigate to the project directory:
    
    ```bash
    cd React-tRPC-Prisma-MongoDB
    ```
    
3. Install dependencies:
    
    ```bash
    npm i --workspaces
    ```

5. Create .env file in server workspace:
    ```bash
    DATABASE_URL=your_mongodb_url
    ```

5. Open terminal and write ```npx prisma db push```. used to update the database schema to match your Prisma schema.
   It creates tables in the database if they don't exist, and updates existing tables if they are different.

6. Open terminal and write ```npx prisma generate```. used to generate the Prisma Client based on your Prisma schema.

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. To access React application visit [http://localhost:3000](http://localhost:3000).
3. To access the API visit [http://localhost:3000/trpc/todo.list](http://localhost:3000/trpc/todo.list).
   

## Technologies

This project utilizes a robust stack of modern technologies for efficient development and optimal user experience:

- React
- Typescript
- tRPC
- Prisma
- MongoDB
- Tailwind CSS
  
## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

