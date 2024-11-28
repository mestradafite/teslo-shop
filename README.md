<div align="center">

  <h3 align="center">Teslo | Shop - Tesla Clothing Store Replica</h3>

  <div style="margin-top: 20px; margin-bottom: 30px;">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

This project is a replica of Tesla's clothing e-commerce platform, built with Next.js. The application aims to provide a smooth shopping experience with robust backend integration and state management.

https://teslo-shop-mef.vercel.app/

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- React.js
- Tailwind CSS
- Prisma
- Postgresql
- Auth.js
- Zustand

## <a name="features">🔋 Features</a>

🛍️ **E-commerce Interface**: Replicates Tesla's clothing store shopping experience.

🔒 **Secure Authentication**: Integrated with auth.js for user login and security.

📄 **Order Management**: Easily view and filter orders as Paid or Pending.

📜 **Pagination**: Navigate through products seamlessly with paginated views.

⚡ **Fast State Management**: Utilizes Zustand for efficient application state handling.

🗂️ **Database Integration**: Powered by Prisma and SQL for dynamic data management.

🎨 **Stylish Design**: Built with Tailwind CSS for responsive and modern UI/UX.

🔄 **Real-Time Updates**: Reflects changes instantly across orders and products.

🌍 **Scalable Architecture**: Designed with Next.js to support large-scale projects.

🛠️ **Developer-Friendly**: Clean and modular codebase for easy customization.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/mestradafite/teslo-shop.git
cd teslo-shop
```

**Installation**

1. Create copy of `.env.template` and rename to `.env` and change the credentials.
2. Install dependencies `npm install`
3. Build database `docker-compose up -d`
4. Run migrations from Prisma `npx prisma migrate dev`
5. Execute seed `npm run seed`
6. Clean localStorage from navigator.
7. Run porject `npm run dev`

Open [http://localhost:3000](http://localhost:5173) in your browser to view the project.
