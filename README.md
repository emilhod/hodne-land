# Emil Hodneland - Static Homepage

This is a simple **static homepage** for **Emil Hodneland**, hosted at [hodne.land](https://hodne.land).

## 🚀 Project Overview
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Azure Static Web Apps
- **Domain:** hodne.land

## 📂 Project Structure
```
my-next-app/
│── src/
│   ├── app/
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Homepage
│   ├── styles/         # Tailwind CSS global styles
│── public/             # Static assets
│── next.config.js      # Next.js config
│── tailwind.config.ts  # Tailwind CSS config
│── tsconfig.json       # TypeScript config
│── package.json        # Dependencies & scripts
│── .eslintrc.json      # ESLint config
```

## 🛠️ Setup & Development
### **1️⃣ Install dependencies**
```sh
npm install
```

### **2️⃣ Start the development server**
```sh
npm run dev
```
- The site will be available at **http://localhost:3000**.

### **3️⃣ Build for production**
```sh
npm run build && next export
```
- This generates a static site in the `out/` folder.

## 🚀 Deployment on Azure
1. Push your code to GitHub.
2. In [Azure Portal](https://portal.azure.com), create a **Static Web App**.
3. Select **GitHub** as the deployment source.
4. Choose **Build Preset: Next.js**.
5. Azure will automatically deploy your site.

## 🌍 Live Website
The site is available at **[hodne.land](https://hodne.land)**.

---

💡 _This project is minimal and serves as a personal landing page for Emil Hodneland._

