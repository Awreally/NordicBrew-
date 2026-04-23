:root {
  /* Colors */
  --primary-green: #1B432E;
  --nordic-midnight: #012D19;
  --hearth-cream: #FEF9F2;
  --soft-stone: #F2EDE6;
  --roasted-earth: #7C5730;
  --sun-drenched-wheat: #F9DCC4;
  --amber-glow: #E29578;
  
  /* Typography */
  --font-heading: 'Manrope', sans-serif;
  --font-body: 'Newsreader', serif;
  
  /* Spacing & Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --spacing-unit: 8px;
}

/* Global Reset & Base Styles */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--hearth-cream);
  color: var(--nordic-midnight);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, .font-heading {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--primary-green);
}

/* Hero Section */
.hero-container {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 8%;
  background-size: cover;
  background-position: center;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(1, 45, 25, 0.8);
  margin-bottom: 2.5rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-family: var(--font-heading);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: var(--radius-sm);
}

.btn-primary {
  background-color: var(--primary-green);
  color: white;
}

.btn-primary:hover {
  background-color: var(--nordic-midnight);
  transform: translateY(-2px);
}

.btn-secondary {
  color: var(--primary-green);
  border-bottom: 2px solid transparent;
}

.btn-secondary:hover {
  border-bottom-color: var(--roasted-earth);
}

/* Grid Systems */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 4rem 8%;
}

.product-card {
  transition: transform 0.4s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-image-container {
  background-color: var(--soft-stone);
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

/* Utility Classes */
.text-serif-italic {
  font-family: var(--font-body);
  font-style: italic;
}

.text-caps-tracking {
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}