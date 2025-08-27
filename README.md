# Rate My Bite

[Live Site](https://rate-my-bite-phi.vercel.app) | [Client GitHub](https://github.com/neelimapriya/rate-my-bite-client) | [Server GitHub](https://github.com/neelimapriya/rate-my-bite-server)

---

## 🍔 Overview

**Rate My Bite** is a dynamic web application for discovering, sharing, and reviewing street food spots. Built with Next.js, it empowers users to explore local favorites, contribute their own finds, and leave reviews. The platform features premium content for subscribers, an admin dashboard for efficient content moderation, and a comprehensive, engaging street food discovery experience.

---

## ✨ Features

- **User Authentication**
  - Register and login with email and password
  - JWT-based secure authentication
  - User profile management
- **Food Discovery**
  - Browse street food spots
  - Search by name, category, or location
  - Filter by price range, rating, and popularity
  - View detailed information about each food spot
- **Content Creation**
  - Post new street food discoveries
  - Upload images
  - Categorize and tag posts
  - Set price ranges and location information
- **Interaction**
  - Upvote/downvote food spots
  - Rate spots from 1-5 stars
  - Comment on posts
- **Premium Features**
  - Subscribe to access exclusive premium content
  - Integrated payment gateway (ShurjoPay/SSLCommerz)
  - Manage subscription
- **Admin Dashboard**
  - Review and approve posts
  - Mark content as premium
  - Moderate comments and reviews
  - Manage users and categories
- **Responsive Design**
  - Fully responsive UI for all devices
  - Mobile-first approach

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Authentication**: JWT
- **Payment**: ShurjoPay
- **Other Libraries**: Framer Motion, Lucide React, Radix UI, Axios, etc.

---

## 📋 Prerequisites

- Node.js (v16+)
- npm or yarn
- Backend API running ([Rate My Bite Server](https://github.com/neelimapriya/rate-my-bite-server))

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/neelimapriya/rate-my-bite-client
```

### 2. Install Dependencies

```bash
cd rate-my-bite-client
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project. Example:

```env
NEXT_PUBLIC_API=https://assignment9-flax.vercel.app/api
JWT_ACCESS_SECRET=your_jwt_secret
```

### 4. Run the Project

- **Development Mode**
  ```bash
  npm run dev
  ```
- **Production Mode**
  ```bash
  npm run build
  npm start
  ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 Pages & Features

### Public Pages
- **Home**: Featured food spots and search
- **Posts**: Browse all food spots with filters
- **Blogs**: View all blogs
- **Login/Register**: User authentication
- **About**: Platform information and team
- **Contact**: Contact form

### Authenticated User Pages
- **Post Food Spot**: Submit new food spots
- **My Posts**: User's submitted food spots
- **Profile**: User profile management
- **Subscription**: Premium subscription management

### Premium User Pages
- **Premium Food Spots**: Exclusive premium content

### Admin Pages
- **Dashboard**: Platform statistics overview
- **Users**: View and manage users
- **Posts**: Edit or delete existing posts
- **Category**: View and manage categories

---


## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any feature, bugfix, or improvement.

---

## 📄 License

This project is for educational/demo purposes.

---

## 🌐 Useful Links

- [Live Site](https://rate-my-bite-phi.vercel.app)
- [Client GitHub Repository](https://github.com/neelimapriya/rate-my-bite-client)
- [Server GitHub Repository](https://github.com/neelimapriya/rate-my-bite-server)
