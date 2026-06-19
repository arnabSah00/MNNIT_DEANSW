# MNNIT_SW - Student Welfare Portal

## Project Overview

A comprehensive, modern Student Welfare Portal website for MNNIT (Maulana Azad National Institute of Technology). Built with React.js, Vite, Tailwind CSS, and React Router DOM for seamless navigation and professional user experience.

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

```bash
# 1. Create a new Vite project
npm create vite@latest mnnit-sw -- --template react

# 2. Navigate to project directory
cd mnnit-sw

# 3. Install dependencies
npm install

# 4. Install additional packages
npm install react-router-dom react-icons
npm install -D tailwindcss postcss autoprefixer

# 5. Initialize Tailwind CSS
npx tailwindcss init -p

# 6. Start development server
npm run dev
```

---

## 📁 Project Structure

```
mnnit-sw/
├── src/
│   ├── assets/                          # Images, logos, icons
│   │
│   ├── components/                      # Reusable components
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx              # Navigation bar with dropdown
│   │   ├── Footer/
│   │   │   └── Footer.jsx              # Footer component
│   │   ├── Hero/
│   │   │   └── Hero.jsx                # Hero banner section
│   │   ├── NoticeCard/                 # Notice card component
│   │   ├── EventCard/                  # Event card component
│   │   └── GalleryCard/                # Gallery card component
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx              # Main layout wrapper
│   │
│   ├── pages/                           # Page components
│   │   ├── Home/
│   │   │   └── Home.jsx                # Home page
│   │   ├── Events/
│   │   │   └── Events.jsx              # Events page
│   │   ├── Gallery/
│   │   │   └── Gallery.jsx             # Gallery page
│   │   ├── Notice/
│   │   │   └── Notice.jsx              # Notices page
│   │   ├── Contact/
│   │   │   └── Contact.jsx             # Contact page with form
│   │   ├── Archive/
│   │   │   └── Archive.jsx             # Archive page
│   │   ├── ScholarshipFellowship/
│   │   │   └── ScholarshipFellowship.jsx
│   │   ├── MedalsAwards/
│   │   │   └── MedalsAwards.jsx
│   │   ├── InsuranceMediclaim/
│   │   │   └── InsuranceMediclaim.jsx
│   │   ├── AntiRagging/
│   │   │   └── AntiRagging.jsx
│   │   └── CounsellingAssistance/
│   │       └── CounsellingAssistance.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx               # Route configuration
│   │
│   ├── App.jsx                         # Root App component
│   ├── main.jsx                        # React entry point
│   └── index.css                       # Global styles + Tailwind
│
├── public/                              # Static assets
│
├── tailwind.config.js                   # Tailwind configuration
├── postcss.config.js                    # PostCSS configuration
├── vite.config.js                       # Vite configuration
├── package.json                         # Project dependencies
└── README.md                            # Documentation
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | UI library and components |
| **Vite** | Build tool and dev server |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Icons** | Icon library |

---

## 📄 Tailwind CSS Setup

### Update `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#0369a1",
      }
    },
  },
  plugins: [],
}
```

### Configure `src/index.css`:

```css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  color: #1f2937;
}
```

---

## 🔧 Key Features

### 1. **Responsive Navigation**
- Desktop dropdown menu for Resources
- Mobile hamburger menu with collapsible dropdowns
- Sticky navbar for easy access
- Smooth transitions and hover effects

### 2. **Page Features**

#### Home Page
- Hero banner with CTA buttons
- Quick access cards for main services
- Features overview section
- Help/Support section

#### Events Page
- Event listings and details
- Responsive layout
- Event card component

#### Gallery Page
- Responsive image grid
- Hover effects
- Lazy loading support

#### Notice Page
- Notice listings with dates
- View/Download buttons
- Date-based sorting

#### Contact Page
- Professional contact form
- Contact information cards
- Google Map placeholder
- Form validation

#### Archive Page
- Search functionality
- Filter by type (notices/events)
- Date-based organization

#### Resource Pages
- Scholarships & Fellowship
- Medals & Awards
- Insurance & Mediclaim
- Anti-Ragging Initiative
- Counselling & Assistance

Each resource page includes:
- Overview section
- Details/Features
- Download resources
- Contact information

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint (if ESLint configured)
npm run lint
```

---

## 🎯 Navigation Routes

```
/                              → Home
/events                        → Events
/gallery                       → Gallery
/notice                        → Notices
/contact                       → Contact Us
/archive                       → Archive

/scholarship-fellowship        → Scholarship & Fellowship
/medals-awards                 → Medals & Awards
/insurance-mediclaim           → Insurance & Mediclaim
/anti-ragging                  → Anti-Ragging Initiative
/counselling-assistance        → Counselling & Assistance
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#1e40af, #1e3a8a)
- **Secondary**: Cyan (#0369a1)
- **Background**: Gray (#f9fafb, #f3f4f6)
- **Text**: Dark Gray (#1f2937, #374151)
- **Accent**: Various (Green, Purple, Red for different sections)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Font Weight**: Bold (600-900)
- **Body Font Weight**: Normal (400-500)

### Spacing
- Uses Tailwind's standard spacing scale
- Consistent padding/margin for visual hierarchy

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (`sm`)
- **Tablet**: 640px - 1024px (`md`, `lg`)
- **Desktop**: > 1024px (`xl`, `2xl`)

---

## 🔐 Best Practices Used

1. **Component Architecture**
   - Functional components with React hooks
   - Reusable component structure
   - Proper prop passing

2. **Routing**
   - Clean route configuration
   - Nested layouts
   - Outlet-based component injection

3. **Styling**
   - Utility-first CSS approach
   - No CSS conflicts
   - Mobile-first responsive design

4. **Performance**
   - Code splitting via routes
   - Lazy loading support
   - Optimized re-renders

5. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support

---

## 🔄 Component Integration

### Navbar Component
- Uses React Icons (FiMenu, FiX, FiChevronDown)
- Mobile menu toggle state management
- Resources dropdown with hover/click detection

### Footer Component
- Social media links
- Quick navigation
- Contact information
- Copyright year (dynamic)

### Hero Component
- Gradient background with blob effects
- CTA buttons
- Statistics section

### Pages
- All pages follow consistent header structure
- Proper spacing and alignment
- Professional typography

---

## 📋 File Creation Checklist

✅ `src/App.jsx`
✅ `src/main.jsx`
✅ `src/index.css`
✅ `src/routes/AppRoutes.jsx`
✅ `src/layouts/MainLayout.jsx`
✅ `src/components/Navbar/Navbar.jsx`
✅ `src/components/Footer/Footer.jsx`
✅ `src/components/Hero/Hero.jsx`
✅ `src/pages/Home/Home.jsx`
✅ `src/pages/Events/Events.jsx`
✅ `src/pages/Gallery/Gallery.jsx`
✅ `src/pages/Notice/Notice.jsx`
✅ `src/pages/Contact/Contact.jsx`
✅ `src/pages/Archive/Archive.jsx`
✅ `src/pages/ScholarshipFellowship/ScholarshipFellowship.jsx`
✅ `src/pages/MedalsAwards/MedalsAwards.jsx`
✅ `src/pages/InsuranceMediclaim/InsuranceMediclaim.jsx`
✅ `src/pages/AntiRagging/AntiRagging.jsx`
✅ `src/pages/CounsellingAssistance/CounsellingAssistance.jsx`

---

## 🚀 Next Steps for Enhancement

1. **Add Backend Integration**
   - Fetch real data from API
   - Database integration (MongoDB/PostgreSQL)
   - Authentication system

2. **Component Enhancement**
   - Create NoticeCard, EventCard, GalleryCard components
   - Implement form validation
   - Add loading states

3. **Features to Add**
   - Search functionality
   - Filters and sorting
   - User authentication
   - Admin panel
   - File upload functionality
   - Email notifications

4. **SEO & Performance**
   - Add meta tags
   - Implement sitemap
   - Image optimization
   - Code splitting

5. **Testing**
   - Unit tests with Jest
   - Component tests with React Testing Library
   - E2E tests with Cypress

---

## 🐛 Troubleshooting

### Tailwind CSS not working?
- Ensure `tailwind.config.js` has correct content paths
- Check if `@import "tailwindcss"` is in `index.css`
- Clear browser cache and rebuild

### Routes not working?
- Verify `BrowserRouter` wraps the app in `main.jsx`
- Check route paths match `Link` paths
- Ensure `AppRoutes.jsx` exports correctly

### Icons not displaying?
- Verify `react-icons` is installed
- Import icons correctly: `import { FiIcon } from "react-icons/fi"`
- Check icon names on [react-icons.github.io](https://react-icons.github.io)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Icons](https://react-icons.github.io)

---

## 📝 License

This project is created for MNNIT Student Welfare Portal.

---

## 👥 Contributors

Built with professional standards and best practices for student welfare.

---

**Last Updated**: January 2024
**Project Version**: 1.0.0
