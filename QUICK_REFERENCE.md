# 🚀 MNNIT_SW - Quick Reference Guide for Developers

A quick lookup guide for common tasks and code snippets.

---

## 📖 Table of Contents

1. [Installation](#installation)
2. [Running the Project](#running-the-project)
3. [Project Structure](#project-structure)
4. [Common Tasks](#common-tasks)
5. [File Locations](#file-locations)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)
8. [Routes](#routes)

---

## 🔧 Installation

### Fresh Setup

```bash
# Create project
npm create vite@latest mnnit-sw -- --template react

# Navigate
cd mnnit-sw

# Install all dependencies
npm install

# Verify installation
npm run dev
```

### Using Provided Files

1. Copy all files from output directory
2. Maintain folder structure as shown
3. Run: `npm install`
4. Run: `npm run dev`

---

## ▶️ Running the Project

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Linting (if configured)
npm run lint
```

**Default Port**: http://localhost:3000

---

## 📁 Project Structure Quick Reference

```
src/
├── App.jsx                      → Root component
├── main.jsx                     → Entry point
├── index.css                    → Global styles
├── components/
│   ├── Navbar/Navbar.jsx       → Navigation bar
│   ├── Footer/Footer.jsx       → Footer
│   └── Hero/Hero.jsx           → Hero banner
├── layouts/
│   └── MainLayout.jsx          → Layout wrapper
├── routes/
│   └── AppRoutes.jsx           → Route definitions
└── pages/
    ├── Home/Home.jsx
    ├── Events/Events.jsx
    ├── Gallery/Gallery.jsx
    ├── Notice/Notice.jsx
    ├── Contact/Contact.jsx
    ├── Archive/Archive.jsx
    └── [Resource Pages]/
```

---

## 🎯 Common Tasks

### Add a New Page

1. **Create component**:
```bash
mkdir -p src/pages/NewPage
touch src/pages/NewPage/NewPage.jsx
```

2. **Add component code**:
```jsx
function NewPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Page Title</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Content here */}
      </div>
    </div>
  );
}

export default NewPage;
```

3. **Add to routes** in `src/routes/AppRoutes.jsx`:
```jsx
import NewPage from "../pages/NewPage/NewPage";

// Inside <Route element={<MainLayout />}>
<Route path="/new-page" element={<NewPage />} />
```

4. **Add to navigation** in `src/components/Navbar/Navbar.jsx`:
```jsx
<Link to="/new-page" className="hover:text-blue-100 ...">
  New Page
</Link>
```

---

### Add a New Component

```jsx
// src/components/MyComponent/MyComponent.jsx
import { FiIcon } from "react-icons/fi";

function MyComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Component Title</h2>
      <p className="text-gray-600">Content here</p>
    </div>
  );
}

export default MyComponent;
```

---

### Change Colors

Find and replace in all files:
- `from-blue-900` → `from-your-color`
- `to-blue-700` → `to-your-color`
- `text-blue-600` → `text-your-color`

Or edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: "#your-color"
    }
  }
}
```

---

### Add Form Handling

```jsx
import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send to API here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

---

### Use React Icons

```jsx
import { FiHome, FiSettings, FiDownload, FiPhone } from "react-icons/fi";

function MyComponent() {
  return (
    <div>
      <FiHome size={24} /> {/* Home icon */}
      <FiSettings size={24} /> {/* Settings icon */}
      <FiDownload size={20} /> {/* Download icon */}
      <FiPhone size={20} /> {/* Phone icon */}
    </div>
  );
}
```

**Popular Icon Sets**:
- `fi` - Feather Icons
- `fa` - Font Awesome
- `md` - Material Design
- `ai` - Ant Design
- `ri` - Remix Icon

---

### Create a Card Component

```jsx
function Card({ title, description, icon: Icon, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className={`${color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Usage:
<Card 
  title="My Card"
  description="Card description"
  icon={FiHome}
  color="bg-blue-600"
/>
```

---

## 📍 File Locations

| Feature | File |
|---------|------|
| Navigation | `src/components/Navbar/Navbar.jsx` |
| Footer | `src/components/Footer/Footer.jsx` |
| Routes | `src/routes/AppRoutes.jsx` |
| Styles | `src/index.css` |
| Layout | `src/layouts/MainLayout.jsx` |
| Contact Email | `src/pages/Contact/Contact.jsx` |
| Phone Numbers | `src/components/Footer/Footer.jsx` |
| Colors | `tailwind.config.js` |
| Brand Name | `src/components/Navbar/Navbar.jsx` |

---

## 🎨 Customization Snippets

### Change Brand Name

```jsx
// In Navbar.jsx
<Link to="/" className="text-2xl font-bold">
  YOUR_BRAND_NAME {/* Change this */}
</Link>
```

### Change Email

```jsx
// In Footer.jsx or Contact.jsx
<a href="mailto:your-email@domain.com">
  your-email@domain.com
</a>
```

### Change Phone

```jsx
<a href="tel:+919876543210">
  +91 9876543210
</a>
```

### Modify Colors

```jsx
// Instead of: className="bg-blue-600"
// Use: className="bg-purple-600"

// Or configure in tailwind.config.js
theme: {
  colors: {
    primary: "#your-color-hex"
  }
}
```

---

## 🐛 Troubleshooting Quick Fixes

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force

# Restart dev server
npm run dev
```

### Styles Not Applying

```bash
# Make sure Tailwind content paths are correct in tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,jsx}" ✓ This must match your files
]

# Restart dev server after changes
```

### Icons Not Showing

```bash
# Verify correct import
import { FiIcon } from "react-icons/fi"; ✓
// NOT: import { FiIcon } from "react-icons";

# Install if missing
npm install react-icons
```

### Routes Not Working

```jsx
// In main.jsx - verify BrowserRouter wraps App
<BrowserRouter>
  <App />
</BrowserRouter>

// In AppRoutes.jsx - verify MainLayout wraps routes
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
</Route>
```

---

## 🗺️ Available Routes

| Path | Component | Feature |
|------|-----------|---------|
| `/` | Home | Welcome, features, quick links |
| `/events` | Events | Event listings |
| `/gallery` | Gallery | Image gallery |
| `/notice` | Notice | Announcements |
| `/contact` | Contact | Contact form |
| `/archive` | Archive | Searchable history |
| `/scholarship-fellowship` | Scholarships | Scholarship info |
| `/medals-awards` | Medals | Awards & recognition |
| `/insurance-mediclaim` | Insurance | Coverage info |
| `/anti-ragging` | Anti-Ragging | Support & policies |
| `/counselling-assistance` | Counselling | Mental health services |

---

## 🎯 Common Customizations

### 1. Add Your Logo

```jsx
// In Navbar.jsx
import logo from "../../assets/logo.png";

<img src={logo} alt="Logo" className="h-8" />
```

### 2. Change Hero Text

```jsx
// In Hero.jsx
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Your Custom Heading Here
</h1>
```

### 3. Update Contact Info

```jsx
// In Footer.jsx
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+911234567890">+91 1234567890</a>
```

### 4. Add Real Images

```jsx
// In Gallery.jsx
<img src="/path/to/image.jpg" alt="Description" className="w-full h-full object-cover" />
```

### 5. Connect Backend

```jsx
// Example in any page
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err));
}, []);
```

---

## 📦 Dependencies Quick Reference

| Package | Version | Install | Use |
|---------|---------|---------|-----|
| React | 18.2.0 | Included | UI library |
| React Router DOM | 6.20.0 | Included | Navigation |
| React Icons | 4.12.0 | Included | Icons |
| Tailwind CSS | 3.3.6 | Included | Styling |
| Vite | 5.0.0 | Included | Build tool |

---

## ⚡ Performance Tips

```jsx
// 1. Use React.memo for expensive components
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// 2. Use useCallback for callbacks
const handleClick = useCallback(() => {
  // Handle click
}, []);

// 3. Use useMemo for expensive calculations
const result = useMemo(() => {
  return complexCalculation();
}, [dependency]);

// 4. Code splitting with React.lazy
const Home = React.lazy(() => import('./pages/Home'));
```

---

## 🚀 Deployment Checklist

- [ ] All routes working
- [ ] Responsive design tested
- [ ] Images optimized
- [ ] No console errors
- [ ] Contact form working
- [ ] Mobile menu tested
- [ ] Accessibility checked
- [ ] SEO meta tags added
- [ ] Build successful: `npm run build`
- [ ] Preview build: `npm run preview`

---

## 📱 Responsive Classes

```jsx
// Mobile first approach
<div className="
  w-full              /* Mobile: full width */
  sm:w-1/2            /* Small screens and up: 50% */
  md:w-1/3            /* Medium screens and up: 33% */
  lg:w-1/4            /* Large screens and up: 25% */
">
  Content
</div>
```

---

## 🎨 Tailwind Utilities Quick Ref

```jsx
// Layout
<div className="flex items-center justify-between gap-4">
  
// Padding & Margin
className="p-4 m-2 px-6 py-3 mb-4"

// Colors
className="bg-blue-600 text-white border-red-500"

// Sizing
className="w-full h-screen max-w-7xl"

// Effects
className="shadow-md rounded-lg hover:shadow-lg transition-shadow"

// Responsive
className="block md:flex lg:grid grid-cols-3"
```

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev/guide)
- [React Icons](https://react-icons.github.io)
- [Tailwind Components](https://tailwindui.com)

---

## 💾 Save Time: Copy-Paste Templates

### Basic Page Template

```jsx
function PageName() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Page Title</h1>
          <p className="text-blue-100 mt-2">Subtitle or description</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Content Section
          </h2>
          <p className="text-gray-600">
            Your content here...
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageName;
```

---

## ✅ Pre-Launch Checklist

- [ ] All 11 pages accessible
- [ ] Navigation working (desktop & mobile)
- [ ] Forms functional
- [ ] Responsive on mobile, tablet, desktop
- [ ] No broken links
- [ ] No console errors
- [ ] Performance optimized
- [ ] SEO basics added
- [ ] Build completes: `npm run build`
- [ ] Ready for deployment

---

**Version**: 1.0.0  
**Last Updated**: January 2024  
**Status**: Production Ready ✅

---

**Need Help?** Refer to [README.md](./README.md) or [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)

Happy coding! 🚀
