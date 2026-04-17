# 👥 KeenKeeper
**"Tend your friendships like a garden."**

KeenKeeper is a dedicated friendship management dashboard designed to help users nurture and maintain their most meaningful connections. In a fast-paced world, it’s easy to lose touch; KeenKeeper ensures you stay on track with your social goals through visual analytics, interaction timelines, and smart contact reminders.

## 🚀 Live Demo
**[[Website Link Here](https://mahmudul-keen-keeper.vercel.app/)]**


## ✨ Key Features

* **Smart Relationship Tracking:** A comprehensive dashboard displaying friend profiles with dynamic status indicators (`overdue`, `almost due`, `on-track`) to prioritize who needs your attention most.
* **Interactive Interaction Timeline:** A centralized history of all communication (Calls, Texts, Videos). Users can log interactions instantly from a friend's profile and filter the history to review specific contact types.
* **Data-Driven Analytics:** Integrated **Recharts** visualization on the Stats page, providing a breakdown of communication methods to help users understand how they connect with their circle.
* **Seamless User Experience:** Built with a "Mobile-First" approach, featuring a persistent fixed navbar, custom 404 error handling, and polished loading animations for data-heavy views.

---

## 🛠️ Technologies Used

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14/15 (App Router) |
| **Styling** | Tailwind CSS |
| **Icons** | React Icons / Lucide React |
| **Charts** | Recharts (PieChart with customized rounded corners) |
| **Notifications** | React Hot Toast / Sonner |
| **Animations** | Framer Motion & CSS Blobs |
| **Deployment** | Vercel |

---

## 📸 Screenshots
*(Pro-tip: Add images here once you have deployed!)*

---

## ⚙️ Local Setup Instructions

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/keenkeeper.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd keenkeeper
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  **Open in your browser:**
    Navigate to `http://localhost:3000`

---

## 📂 Project Structure Highlights
* `app/loading.jsx`: Global skeleton/spinner state for smooth data fetching.
* `app/not-found.jsx`: Custom designed 404 error page.
* `context/install.context.js`: State management for persistent timeline and friendship data.
* `public/friends.json`: Local database for friend profiles.

---

## 🤝 Contact
Your Name - [Your Email/LinkedIn/GitHub Link]

---

### Final Checklist for your 50+10 Marks:
1.  **Git Commits:** Ensure you have at least 8 commits.
2.  **Responsive:** Open your site on your phone and check the 4-column vs 1-column grid.
3.  **Toasts:** Ensure clicking "Call/Text/Video" actually pops up a notification.
4.  **Analytics:** Ensure your Pie Chart is visible and using real data from your context.

**Good luck with the submission! You’ve got a very professional setup here.**