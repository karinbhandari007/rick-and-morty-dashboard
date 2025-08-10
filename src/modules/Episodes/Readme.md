# Rick and Morty Dashboard

A React dashboard application built with Vite and TypeScript that integrates with the Rick and Morty GraphQL API.  
It features authentication, data fetching with Apollo Client, filtering, sorting, and display of characters and episodes using AG Grid. Chakra UI is used for styling and responsive layout.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Authentication](#authentication)  
- [Usage](#usage)  
- [Future Enhancements](#future-enhancements)  
- [Collaborators](#collaborators)  
- [Contact](#contact)

---

## Project Overview

This dashboard allows users to:

- Log in via a mock authentication system  
- View and interact with character data (search, filter by status, species, gender, and sort)  
- View episode data (search by episode name, sort by air date)  
- Navigate between Characters and Episodes pages via a sidebar  
- Enjoy a responsive, user-friendly interface with Chakra UI  
- Benefit from strongly typed API data using GraphQL Code Generator  

---

## Features

- **Authentication**: Mock login/logout with protected routes  
- **GraphQL Integration**: Apollo Client for fetching data with type safety  
- **Character Page**: AG Grid table with name, status, species, gender, origin, episode count + filters and sorting  
- **Episode Page**: AG Grid table with episode name, air date, episode code, number of characters + search and sorting  
- **Responsive Layout**: Sidebar navigation with main content area  
- **Styling**: Chakra UI components

---

## Technologies Used

- React with TypeScript  
- Vite as build tool  
- Apollo Client for GraphQL queries  
- GraphQL Code Generator for TypeScript types  
- AG Grid for powerful tables  
- Chakra UI for UI components and styling  
- React Router for routing  
- React Context + localStorage for authentication state  

---

## Getting Started

### Prerequisites

- Node.js (>=14.x)  
- npm or yarn  

### Installation

```bash
git clone https://github.com/karinbhandari007/rick-and-morty-dashboard.git
cd rick-and-morty-dashboard
npm install
```

### Run Locally

```
npm run dev
```

Open http://localhost:5173 to see the app in your browser.

### Usage

- Start the app and log in using the demo credentials (username: admin, password: 1234)
- Navigate via the sidebar to Characters or Episodes
- Use filters and search bars to refine data
- Sort columns by clicking headers
- Data loads dynamically using Apollo Client with GraphQL queries
- Responsive design works across devices

### Future Enhancements
- Infinite scrolling in AG Grid
- Dark mode toggle using Chakra UI's theme support
- Real authentication integration
- Improved error handling and notifications
- More detailed character and episode views
