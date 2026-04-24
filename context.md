# Project context: RealTimeWorkingMain
Generated: 2026-04-24 · 11 files · stripped: comments, blank_lines, console_logs

---

## Project structure

```
RealTimeWorkingMain/
├── app/
│   ├── about.html
│   ├── home.css
│   ├── home.html
│   ├── index.html
│   ├── page3.html
│   └── videoUpload.html
├── package.json
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       ├── screenmain.js
│       └── socket.io.js
├── server/
│   └── app.py
└── server.js
```

---

## Files

### `app/about.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About - Sign Language Recognition</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800 font-sans">


  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-orange-600">RTSLD</h1>
      <nav>
        <ul class="flex gap-4">
          <li><a href="/" class="text-gray-700 hover:text-orange-600">Home</a></li>
          <li><a href="/about" class="text-orange-600 font-semibold">About</a></li>
        </ul>
      </nav>
    </div>
  </header>


  <main class="max-w-5xl mx-auto px-4 py-10">
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-center mb-4">About the Project</h2>
      <p class="text-lg text-center text-gray-700">
        This project focuses on real-time Sign Language Recognition using computer vision and machine learning technique.
        Our goal is to bridge the communication gap between the deaf and hearing communities by converting sign gestures into readable text.
      </p>
    </section>

    <section class="mb-12">
      <h3 class="text-2xl font-semibold mb-4 text-center">Our Team</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow rounded-lg p-6 text-center">
          <h4 class="text-xl font-bold">Piyush</h4>

        </div>
        <div class="bg-white shadow rounded-lg p-6 text-center">
          <h4 class="text-xl font-bold">Smeet</h4>

        </div>
        <div class="bg-white shadow rounded-lg p-6 text-center">
          <h4 class="text-xl font-bold">Siddhi</h4>

        </div>
      </div>
    </section>

    <section>
      <h3 class="text-2xl font-semibold mb-4 text-center">Project Guide</h3>
      <div class="bg-white shadow rounded-lg p-6 text-center max-w-md mx-auto">
        <h4 class="text-xl font-bold">Dr.Vinit Kotak</h4>
        <p class="text-gray-600">Faculty Guide & Project Mentor</p>
      </div>
    </section>
  </main>


  <footer class="bg-white shadow-inner mt-10 py-4 text-center text-sm text-gray-500">
    © 2025 
  </footer>

</body>
</html>
```

### `app/home.css`

```css
:root {
  --dl-layout-size-large: 144px;
  --dl-layout-size-small: 48px;
  --dl-layout-space-unit: 16px;
  --dl-layout-size-medium: 96px;
  --dl-layout-size-xlarge: 192px;
  --dl-layout-size-xsmall: 16px;
  --dl-color-theme-accent1: #FFFFFF;
  --dl-color-theme-accent2: #F5D1B0;
  --dl-layout-radius-round: 50%;
  --dl-layout-size-xxlarge: 288px;
  --dl-color-theme-primary1: #BF4408;
  --dl-color-theme-primary2: #E65103;
  --dl-layout-size-maxwidth: 1400px;
  --dl-layout-radius-radius2: 2px;
  --dl-layout-radius-radius4: 4px;
  --dl-layout-radius-radius8: 8px;
  --dl-layout-space-halfunit: 8px;
  --dl-layout-space-sixunits: 96px;
  --dl-layout-space-twounits: 32px;
  --dl-color-theme-secondary1: #FFFFFF;
  --dl-color-theme-secondary2: #FBF1EB;
  --dl-layout-space-fiveunits: 80px;
  --dl-layout-space-fourunits: 64px;
  --dl-layout-space-threeunits: 48px;
  --dl-color-theme-neutral-dark: #191818;
  --dl-layout-radius-cardradius: 8px;
  --dl-color-theme-neutral-light: #FBFAF9;
  --dl-layout-radius-imageradius: 8px;
  --dl-layout-radius-inputradius: 24px;
  --dl-layout-radius-buttonradius: 24px;
  --dl-layout-space-oneandhalfunits: 24px;
}

.button {
  color: var(--dl-color-theme-neutral-dark);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-theme-neutral-dark);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-theme-neutral-light);
}

.input {
  color: var(--dl-color-theme-neutral-dark);
  cursor: auto;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-theme-neutral-dark);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar8-wrapper {
  display: contents;
}

.navbar8-container1 {
  top: 0;
  width: 100%;
  display: flex;
  z-index: 1000;
  position: sticky;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
.custom-header {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--dl-color-theme-neutral-light);
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.custom-header-container {
  max-width: var(--dl-layout-size-maxwidth);
  margin: 0 auto;
  padding: var(--dl-layout-space-oneandhalfunits) var(--dl-layout-space-threeunits);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-logo {
  height: 3rem;
}

.custom-header-button {
  padding: var(--dl-space-halfunit) var(--dl-space-oneandhalfunits);
  font-weight: 500;
}


.navbar8-navbar-interactive {
  width: 100%;
  display: flex;
  z-index: 100;
  max-width: var(--dl-layout-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-layout-space-oneandhalfunits);
  padding-left: var(--dl-layout-space-threeunits);
  padding-right: var(--dl-layout-space-threeunits);
  padding-bottom: var(--dl-layout-space-oneandhalfunits);
  justify-content: space-between;
}

.navbar8-image1 {
  height: 3rem;
}

.navbar8-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.navbar8-links1 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: var(--dl-layout-space-twounits);
  flex-direction: row;
  justify-content: flex-start;
}

.navbar8-link11 {
  text-decoration: none;
}

.navbar8-link31 {
  text-decoration: none;
}

.navbar8-link4-dropdown-trigger {
  gap: 4px;
  cursor: pointer;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.navbar8-icon-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.navbar8-container2 {
  display: flex;
  align-items: center;
  animation-name: rotateInDownLeft;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: flex-end;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.navbar8-icon10 {
  width: 24px;
  height: 24px;
}

.navbar8-container3 {
  display: flex;
  align-items: center;
  animation-name: rotateInDownRight;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: flex-end;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.navbar8-icon12 {
  width: 24px;
  height: 24px;
}

.custom-hr {
  margin: var(--dl-space-threeunits) 0;
  border: none;
  height: 2px;
  background-color: var(--dl-color-theme-neutral-dark); 
  opacity: 0.1; 
}


.navbar8-buttons1 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: row;
}

.navbar8-action11 {
  display: flex;
  flex-direction: row;
}

.navbar8-action21 {
  display: flex;
  flex-direction: row;
}

.navbar8-burger-menu {
  display: none;
}

.navbar8-icon14 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}

.navbar8-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-layout-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-theme-neutral-light);
}

.navbar8-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-threeunits);
  justify-content: space-between;
}

.navbar8-logo {
  height: 3rem;
}

.navbar8-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar8-icon16 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}

.navbar8-links2 {
  gap: var(--dl-layout-space-unit);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}

.navbar8-link12 {
  text-decoration: none;
}

.navbar8-link32 {
  text-decoration: none;
}

.navbar8-link4-accordion {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-trigger {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}

.navbar8-icon-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.navbar8-container4 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.navbar8-icon18 {
  width: 24px;
  height: 24px;
}

.navbar8-container5 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.navbar8-icon20 {
  width: 24px;
  height: 24px;
}

.navbar8-container6 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-halfunit);
  grid-template-columns: 1fr;
}

.navbar8-menu-item1 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}

.navbar8-page1-image1 {
  width: 50px;
  height: 50px;
}

.navbar8-content1 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.navbar8-page11 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item2 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}

.navbar8-page2-image1 {
  width: 50px;
  height: 50px;
}

.navbar8-content2 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.navbar8-page21 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item3 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}

.navbar8-page3-image1 {
  width: 50px;
  height: 50px;
}

.navbar8-content3 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.navbar8-page31 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item4 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}

.navbar8-page4-image1 {
  width: 50px;
  height: 50px;
}

.navbar8-content4 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.navbar8-page41 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-buttons2 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  margin-top: var(--dl-layout-space-twounits);
  align-items: center;
  flex-direction: row;
}

.navbar8-icon-group {
  gap: var(--dl-layout-space-twounits);
  display: flex;
}

.navbar8-container7 {
  top: 100%;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  animation-name: fadeInDownBig;
  animation-delay: 0s;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.navbar8-link5-menu-list {
  width: 100%;
  display: grid;
  padding: var(--dl-layout-space-oneandhalfunits);
  grid-gap: var(--dl-layout-space-halfunit);
  max-width: var(--dl-layout-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.navbar8-menu-item5 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}

.navbar8-page1-image2 {
  width: 30px;
  height: 30px;
}

.navbar8-content5 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-page12 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item6 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}

.navbar8-page2-image2 {
  width: 30px;
  height: 30px;
}

.navbar8-content6 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-page22 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item7 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}

.navbar8-page3-image2 {
  width: 30px;
  height: 30px;
}

.navbar8-content7 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-page32 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-menu-item8 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}

.navbar8-page4-image2 {
  width: 30px;
  height: 30px;
}

.navbar8-content8 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}

.navbar8-page42 {
  font-style: normal;
  font-weight: 600;
}

.navbar8-container8 {
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}

.home-fragment100 {
  display: contents;
}

.home-text100 {
  display: inline-block;
}

.home-fragment101 {
  display: contents;
}

.home-text101 {
  display: inline-block;
}

.home-fragment102 {
  display: contents;
}

.home-text102 {
  display: inline-block;
}

.home-fragment103 {
  display: contents;
}

.home-text103 {
  display: inline-block;
}

.home-fragment104 {
  display: contents;
}

.home-text104 {
  display: inline-block;
}

.home-fragment105 {
  display: contents;
}

.home-text105 {
  display: inline-block;
}

.home-fragment106 {
  display: contents;
}

.home-text106 {
  display: inline-block;
}

.home-fragment107 {
  display: contents;
}

.home-text107 {
  display: inline-block;
}

.home-fragment108 {
  display: contents;
}

.home-text108 {
  display: inline-block;
}

.home-fragment109 {
  display: contents;
}

.home-text109 {
  display: inline-block;
}

.home-fragment110 {
  display: contents;
}

.home-text110 {
  display: inline-block;
}

.home-fragment111 {
  display: contents;
}

.home-text111 {
  display: inline-block;
}

.home-fragment112 {
  display: contents;
}

.home-text112 {
  display: inline-block;
}

.home-fragment113 {
  display: contents;
}

.home-text113 {
  display: inline-block;
}

@media(max-width: 767px) {
  .navbar8-navbar-interactive {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
  }
  .navbar8-desktop-menu {
    display: none;
  }
  .navbar8-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar8-mobile-menu {
    padding-top: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-oneandhalfunits);
  }
  .navbar8-container6 {
    grid-gap: 0;
  }
  .navbar8-link5-menu-list {
    display: none;
  }
}

@media(max-width: 479px) {
  .navbar8-navbar-interactive {
    padding: var(--dl-layout-space-unit);
  }
  .navbar8-mobile-menu {
    padding: var(--dl-layout-space-unit);
  }
}

.hero17-wrapper {
  display: contents;
}

.hero17-header78 {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.hero17-column {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-unit);
}

.hero17-content1 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.hero17-text1 {
  text-align: center;
}

.hero17-text2 {
  text-align: center;
}

.hero17-actions {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-unit);
}

.hero17-content2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.hero17-row-container1 {
  width: 100%;
}

.hero17-placeholder-image10 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image11 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image12 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image13 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image14 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image15 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image16 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image17 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image18 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image19 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image20 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image21 {
  width: 400px;
  height: 400px;
}

.hero17-row-container2 {
  width: 100%;
}

.hero17-placeholder-image22 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image23 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image24 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image25 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image26 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image27 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image28 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image29 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image30 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image31 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image32 {
  width: 400px;
  height: 400px;
}

.hero17-placeholder-image33 {
  width: 400px;
  height: 400px;
}

.hero17-container2 {
  display: contents;
}

.home-fragment114 {
  display: contents;
}

.home-text114 {
  display: inline-block;
}

.home-fragment115 {
  display: contents;
}

.home-text115 {
  display: inline-block;
}

.home-fragment116 {
  display: contents;
}

.home-text116 {
  display: inline-block;
}

.home-fragment117 {
  display: contents;
}

.home-text117 {
  display: inline-block;
}

@media(max-width: 767px) {
  .hero17-content2 {
    width: 100%;
  }
}

@media(max-width: 479px) {
  .hero17-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero17-button1 {
    width: 100%;
  }
  .hero17-button2 {
    width: 100%;
  }
}

.features24-wrapper {
  display: contents;
}

.features24-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}

.features24-image-container {
  height: 100%;
  display: flex;
  position: relative;
}

.features24-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-tabs-menu {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal1 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal2 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal3 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.home-fragment118 {
  display: contents;
}

.home-text118 {
  display: inline-block;
}

.home-fragment119 {
  display: contents;
}

.home-text119 {
  display: inline-block;
}

.home-fragment120 {
  display: contents;
}

.home-text120 {
  display: inline-block;
}

.home-fragment121 {
  display: contents;
}

.home-text121 {
  display: inline-block;
}

.home-fragment122 {
  display: contents;
}

.home-text122 {
  display: inline-block;
}

.home-fragment123 {
  display: contents;
}

.home-text123 {
  display: inline-block;
}

@media(max-width: 991px) {
  .features24-container2 {
    grid-gap: var(--dl-layout-space-twounits);
    grid-template-columns: 1fr;
  }
}

.cta26-wrapper {
  display: contents;
}

.cta26-accent2-bg {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent2);
}

.cta26-accent2-bg:hover {
  transform: scale3d(1.1,1.1,1.1);
}

.cta26-accent1-bg {
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent1);
}

.cta26-container2 {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-fourunits);
  border-radius: var(--dl-layout-radius-cardradius);
  padding-right: var(--dl-layout-space-fourunits);
  padding-bottom: var(--dl-layout-space-sixunits);
}

.cta26-container2:hover {
  color: var(--dl-color-theme-neutral-light);
  background-color: var(--dl-color-theme-neutral-dark);
}

.cta26-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.cta26-actions {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.home-fragment124 {
  display: contents;
}

.home-text124 {
  display: inline-block;
}

.home-fragment125 {
  display: contents;
}

.home-text125 {
  display: inline-block;
}

.home-fragment126 {
  display: contents;
}

.home-text126 {
  display: inline-block;
}

@media(max-width: 767px) {
  .cta26-container2 {
    gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media(max-width: 479px) {
  .cta26-actions {
    flex-wrap: wrap;
    align-self: stretch;
    justify-content: center;
  }
  .cta26-button {
    flex: 1;
  }
}

.features25-wrapper {
  display: contents;
}

.features25-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}

.features25-tabs-menu {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.features25-tab-horizontal1 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features25-tab-horizontal2 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features25-tab-horizontal3 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features25-image-container {
  height: 100%;
  display: flex;
  position: relative;
}

.features25-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.home-fragment127 {
  display: contents;
}

.home-text127 {
  display: inline-block;
}

.home-fragment128 {
  display: contents;
}

.home-text128 {
  display: inline-block;
}

.home-fragment129 {
  display: contents;
}

.home-text129 {
  display: inline-block;
}

.home-fragment130 {
  display: contents;
}

.home-text130 {
  display: inline-block;
}

.home-fragment131 {
  display: contents;
}

.home-text131 {
  display: inline-block;
}

.home-fragment132 {
  display: contents;
}

.home-text132 {
  display: inline-block;
}

@media(max-width: 991px) {
  .features25-container2 {
    grid-gap: var(--dl-layout-space-twounits);
    grid-template-columns: 1fr;
  }
  .features25-tabs-menu {
    order: 2;
  }
}

.pricing14-wrapper {
  display: contents;
}

.pricing14-pricing23 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.pricing14-max-width {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.pricing14-section-title {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.pricing14-text100 {
  text-align: center;
}

.pricing14-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text101 {
  text-align: center;
}

.pricing14-text102 {
  text-align: center;
}

.pricing14-tabs {
  display: flex;
  align-items: flex-start;
}

.pricing14-button10 {
  gap: var(--dl-layout-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: var(--dl-layout-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-right-radius: 0;
}

.pricing14-button11 {
  gap: var(--dl-layout-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: var(--dl-layout-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-right-radius: 0;
}

.pricing14-button12 {
  gap: var(--dl-layout-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
}

.pricing14-button13 {
  gap: var(--dl-layout-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
}

.pricing14-container1 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.pricing14-column1 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}

.pricing14-price10 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price11 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text107 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text108 {
  font-size: 48px;
}

.pricing14-list1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item10 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item11 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item12 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button14 {
  width: 100%;
}

.pricing14-column2 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}

.pricing14-price12 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price13 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text114 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text115 {
  font-size: 48px;
}

.pricing14-list2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item13 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item14 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item15 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item16 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button15 {
  width: 100%;
}

.pricing14-column3 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}

.pricing14-price14 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price15 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text122 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text123 {
  font-size: 48px;
}

.pricing14-list3 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item17 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item18 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item19 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item20 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item21 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button16 {
  width: 100%;
}

.pricing14-container2 {
  gap: 32px;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.pricing14-column4 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}

.pricing14-price16 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price17 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text131 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text132 {
  font-size: 48px;
}

.pricing14-list4 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item22 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item23 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item24 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button17 {
  width: 100%;
}

.pricing14-column5 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}

.pricing14-price18 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price19 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text138 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text139 {
  font-size: 48px;
}

.pricing14-list5 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item25 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item26 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item27 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item28 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button18 {
  width: 100%;
}

.pricing14-column6 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}

.pricing14-price20 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-price21 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.pricing14-text146 {
  font-style: normal;
  font-weight: 600;
}

.pricing14-text147 {
  font-size: 48px;
}

.pricing14-list6 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.pricing14-list-item29 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item30 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item31 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item32 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-list-item33 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.pricing14-button19 {
  width: 100%;
}

.home-fragment133 {
  display: contents;
}

.home-text133 {
  display: inline-block;
}

.home-fragment134 {
  display: contents;
}

.home-text134 {
  display: inline-block;
}

.home-fragment135 {
  display: contents;
}

.home-text135 {
  display: inline-block;
}

.home-fragment136 {
  display: contents;
}

.home-text136 {
  display: inline-block;
}

.home-fragment137 {
  display: contents;
}

.home-text137 {
  display: inline-block;
}

.home-fragment138 {
  display: contents;
}

.home-text138 {
  display: inline-block;
}

.home-fragment139 {
  display: contents;
}

.home-text139 {
  display: inline-block;
}

.home-fragment140 {
  display: contents;
}

.home-text140 {
  display: inline-block;
}

.home-fragment141 {
  display: contents;
}

.home-text141 {
  display: inline-block;
}

.home-fragment142 {
  display: contents;
}

.home-text142 {
  display: inline-block;
}

.home-fragment143 {
  display: contents;
}

.home-text143 {
  display: inline-block;
}

.home-fragment144 {
  display: contents;
}

.home-text144 {
  display: inline-block;
}

.home-fragment145 {
  display: contents;
}

.home-text145 {
  display: inline-block;
}

.home-fragment146 {
  display: contents;
}

.home-text146 {
  display: inline-block;
}

.home-fragment147 {
  display: contents;
}

.home-text147 {
  display: inline-block;
}

.home-fragment148 {
  display: contents;
}

.home-text148 {
  display: inline-block;
}

.home-fragment149 {
  display: contents;
}

.home-text149 {
  display: inline-block;
}

.home-fragment150 {
  display: contents;
}

.home-text150 {
  display: inline-block;
}

.home-fragment151 {
  display: contents;
}

.home-text151 {
  display: inline-block;
}

.home-fragment152 {
  display: contents;
}

.home-text152 {
  display: inline-block;
}

.home-fragment153 {
  display: contents;
}

.home-text153 {
  display: inline-block;
}

.home-fragment154 {
  display: contents;
}

.home-text154 {
  display: inline-block;
}

.home-fragment155 {
  display: contents;
}

.home-text155 {
  display: inline-block;
}

.home-fragment156 {
  display: contents;
}

.home-text156 {
  display: inline-block;
}

.home-fragment157 {
  display: contents;
}

.home-text157 {
  display: inline-block;
}

.home-fragment158 {
  display: contents;
}

.home-text158 {
  display: inline-block;
}

.home-fragment159 {
  display: contents;
}

.home-text159 {
  display: inline-block;
}

.home-fragment160 {
  display: contents;
}

.home-text160 {
  display: inline-block;
}

.home-fragment161 {
  display: contents;
}

.home-text161 {
  display: inline-block;
}

.home-fragment162 {
  display: contents;
}

.home-text162 {
  display: inline-block;
}

.home-fragment163 {
  display: contents;
}

.home-text163 {
  display: inline-block;
}

.home-fragment164 {
  display: contents;
}

.home-text164 {
  display: inline-block;
}

.home-fragment165 {
  display: contents;
}

.home-text165 {
  display: inline-block;
}

.home-fragment166 {
  display: contents;
}

.home-text166 {
  display: inline-block;
}

.home-fragment167 {
  display: contents;
}

.home-text167 {
  display: inline-block;
}

.home-fragment168 {
  display: contents;
}

.home-text168 {
  display: inline-block;
}

.home-fragment169 {
  display: contents;
}

.home-text169 {
  display: inline-block;
}

.home-fragment170 {
  display: contents;
}

.home-text170 {
  display: inline-block;
}

.home-fragment171 {
  display: contents;
}

.home-text171 {
  display: inline-block;
}

.home-fragment172 {
  display: contents;
}

.home-text172 {
  display: inline-block;
}

.home-fragment173 {
  display: contents;
}

.home-text173 {
  display: inline-block;
}

.home-fragment174 {
  display: contents;
}

.home-text174 {
  display: inline-block;
}

.home-fragment175 {
  display: contents;
}

.home-text175 {
  display: inline-block;
}

.home-fragment176 {
  display: contents;
}

.home-text176 {
  display: inline-block;
}

.home-fragment177 {
  display: contents;
}

.home-text177 {
  display: inline-block;
}

.home-fragment178 {
  display: contents;
}

.home-text178 {
  display: inline-block;
}

.home-fragment179 {
  display: contents;
}

.home-text179 {
  display: inline-block;
}

.home-fragment180 {
  display: contents;
}

.home-text180 {
  display: inline-block;
}

.home-fragment181 {
  display: contents;
}

.home-text181 {
  display: inline-block;
}

.home-fragment182 {
  display: contents;
}

.home-text182 {
  display: inline-block;
}

.home-fragment183 {
  display: contents;
}

.home-text183 {
  display: inline-block;
}

@media(max-width: 991px) {
  .pricing14-container1 {
    flex-direction: column;
  }
  .pricing14-column3 {
    width: 100%;
  }
  .pricing14-container2 {
    flex-direction: column;
  }
  .pricing14-column6 {
    width: 100%;
  }
}

@media(max-width: 479px) {
  .pricing14-max-width {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
}

.steps2-wrapper {
  display: contents;
}

.steps2-container1 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.steps2-max-width {
  gap: var(--dl-layout-space-fourunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.steps2-container2 {
  align-items: start;
}

.steps2-section-header {
  gap: var(--dl-layout-space-oneandhalfunits);
  top: 10%;
  display: flex;
  position: sticky;
  align-items: flex-start;
  flex-direction: column;
}

.steps2-actions {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}

.steps2-container3 {
  grid-area: span 1/span 1/span 1/span 1;
}

.steps2-container4 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}

.steps2-text14 {
  text-align: center;
}

.steps2-text15 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}

.steps2-container5 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent2);
}

.steps2-text17 {
  text-align: center;
}

.steps2-text18 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}

.steps2-container6 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}

.steps2-text20 {
  text-align: center;
}

.steps2-text21 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}

.steps2-container7 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  background-color: var(--dl-color-theme-accent2);
}

.steps2-text23 {
  text-align: center;
}

.steps2-text24 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}

.home-fragment184 {
  display: contents;
}

.home-text184 {
  display: inline-block;
}

.home-fragment185 {
  display: contents;
}

.home-text185 {
  display: inline-block;
}

.home-fragment186 {
  display: contents;
}

.home-text186 {
  display: inline-block;
}

.home-fragment187 {
  display: contents;
}

.home-text187 {
  display: inline-block;
}

.home-fragment188 {
  display: contents;
}

.home-text188 {
  display: inline-block;
}

.home-fragment189 {
  display: contents;
}

.home-text189 {
  display: inline-block;
}

.home-fragment190 {
  display: contents;
}

.home-text190 {
  display: inline-block;
}

.home-fragment191 {
  display: contents;
}

.home-text191 {
  display: inline-block;
}

@media(max-width: 991px) {
  .steps2-max-width {
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .steps2-section-header {
    position: static;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .steps2-actions {
    width: 100%;
    align-self: flex-start;
  }
  .steps2-container4 {
    width: 100%;
  }
  .steps2-container5 {
    width: 100%;
  }
  .steps2-container6 {
    width: 100%;
  }
  .steps2-container7 {
    width: 100%;
  }
}

@media(max-width: 479px) {
  .steps2-button {
    width: 100%;
  }
}

.testimonial17-wrapper {
  display: contents;
}

.testimonial17-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.testimonial17-container10 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-layout-space-fourunits);
  flex-direction: column;
}

.testimonial17-text11 {
  text-align: center;
}

.testimonial17-container12 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.testimonial17-image1 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  object-fit: cover;
  border-radius: var(--dl-layout-radius-round);
}

.testimonial17-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.testimonial17-text14 {
  text-align: left;
}

.testimonial17-container14 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.testimonial17-image2 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  object-fit: cover;
  border-radius: var(--dl-layout-radius-round);
}

.testimonial17-container15 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.testimonial17-text17 {
  text-align: left;
}

.testimonial17-container16 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.testimonial17-image3 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  object-fit: cover;
  border-radius: var(--dl-layout-radius-round);
}

.testimonial17-container17 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.testimonial17-text20 {
  text-align: left;
}

.testimonial17-container18 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.testimonial17-image4 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  object-fit: cover;
  border-radius: var(--dl-layout-radius-round);
}

.testimonial17-container19 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.testimonial17-text23 {
  text-align: left;
}

.home-fragment192 {
  display: contents;
}

.home-text192 {
  display: inline-block;
}

.home-fragment193 {
  display: contents;
}

.home-text193 {
  display: inline-block;
}

.home-fragment194 {
  display: contents;
}

.home-text194 {
  display: inline-block;
}

.home-fragment195 {
  display: contents;
}

.home-text195 {
  display: inline-block;
}

.home-fragment196 {
  display: contents;
}

.home-text196 {
  display: inline-block;
}

.home-fragment197 {
  display: contents;
}

.home-text197 {
  display: inline-block;
}

.home-fragment198 {
  display: contents;
}

.home-text198 {
  display: inline-block;
}

.home-fragment199 {
  display: contents;
}

.home-text199 {
  display: inline-block;
}

.home-fragment200 {
  display: contents;
}

.home-text200 {
  display: inline-block;
}

.home-fragment201 {
  display: contents;
}

.home-text201 {
  display: inline-block;
}

.home-fragment202 {
  display: contents;
}

.home-text202 {
  display: inline-block;
}

.home-fragment203 {
  display: contents;
}

.home-text203 {
  display: inline-block;
}

.home-fragment204 {
  display: contents;
}

.home-text204 {
  display: inline-block;
}

.home-fragment205 {
  display: contents;
}

.home-text205 {
  display: inline-block;
}

@media(max-width: 991px) {
  .testimonial17-container10 {
    margin-bottom: var(--dl-layout-space-threeunits);
  }
}

@media(max-width: 767px) {
  .testimonial17-container10 {
    margin-bottom: var(--dl-layout-space-oneandhalfunits);
  }
  .testimonial17-card1 {
    width: 100%;
  }
  .testimonial17-card2 {
    width: 100%;
  }
  .testimonial17-card3 {
    width: 100%;
  }
  .testimonial17-card4 {
    width: 100%;
  }
}

.contact10-wrapper {
  display: contents;
}

.contact10-container1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.contact10-max-width {
  align-self: center;
}

.contact10-content1 {
  width: 100%;
  margin-bottom: var(--dl-layout-space-threeunits);
  justify-content: flex-start;
}

.contact10-content2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}

.contact10-content3 {
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}

.contact10-container2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.contact10-image1 {
  object-fit: cover;
}

.contact10-text12 {
  text-align: center;
}

.contact10-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.contact10-container4 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.contact10-image2 {
  object-fit: cover;
}

.contact10-text14 {
  text-align: center;
}

.contact10-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.home-fragment206 {
  display: contents;
}

.home-text206 {
  display: inline-block;
}

.home-fragment207 {
  display: contents;
}

.home-text207 {
  display: inline-block;
}

.home-fragment208 {
  display: contents;
}

.home-text208 {
  display: inline-block;
}

.home-fragment209 {
  display: contents;
}

.home-text209 {
  display: inline-block;
}

.home-fragment210 {
  display: contents;
}

.home-text210 {
  display: inline-block;
}

.home-fragment211 {
  display: contents;
}

.home-text211 {
  display: inline-block;
}

@media(max-width: 991px) {
  .contact10-content1 {
    align-items: flex-start;
    justify-content: flex-start;
  }
  .contact10-content3 {
    position: relative;
    align-items: center;
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .contact10-content1 {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .contact10-image1 {
    width: 100%;
  }
  .contact10-image2 {
    width: 100%;
  }
}

.footer4-wrapper {
  display: contents;
}

.footer4-footer7 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.footer4-max-width {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer4-content {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer4-logo1 {
  gap: 24px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
}

.footer4-logo2 {
  height: 2rem;
}

.footer4-links {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-items: flex-start;
}

.footer4-credits {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}

.footer4-row {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: space-between;
}

.footer4-container {
  display: flex;
  align-items: flex-start;
}

.footer4-footer-links {
  gap: 24px;
  display: flex;
  align-items: flex-start;
}

.footer4-text11 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
}

.home-fragment212 {
  display: contents;
}

.home-text212 {
  display: inline-block;
}

.home-fragment213 {
  display: contents;
}

.home-text213 {
  display: inline-block;
}

.home-fragment214 {
  display: contents;
}

.home-text214 {
  display: inline-block;
}

.home-fragment215 {
  display: contents;
}

.home-text215 {
  display: inline-block;
}

.home-fragment216 {
  display: contents;
}

.home-text216 {
  display: inline-block;
}

.home-fragment217 {
  display: contents;
}

.home-text217 {
  display: inline-block;
}

.home-fragment218 {
  display: contents;
}

.home-text218 {
  display: inline-block;
}

.home-fragment219 {
  display: contents;
}

.home-text219 {
  display: inline-block;
}

@media(max-width: 767px) {
  .footer4-row {
    gap: var(--dl-layout-space-oneandhalfunits);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

@media(max-width: 479px) {
  .footer4-max-width {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .footer4-links {
    flex-direction: column;
  }
  .footer4-footer-links {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.home-fragment100 {
  display: contents;
}

.home-text100 {
  display: inline-block;
}

.home-fragment101 {
  display: contents;
}

.home-text101 {
  display: inline-block;
}

.home-fragment102 {
  display: contents;
}

.home-text102 {
  display: inline-block;
}

.home-fragment103 {
  display: contents;
}

.home-text103 {
  display: inline-block;
}

.home-fragment104 {
  display: contents;
}

.home-text104 {
  display: inline-block;
}

.home-fragment105 {
  display: contents;
}

.home-text105 {
  display: inline-block;
}

.home-fragment106 {
  display: contents;
}

.home-text106 {
  display: inline-block;
}

.home-fragment107 {
  display: contents;
}

.home-text107 {
  display: inline-block;
}

.home-fragment108 {
  display: contents;
}

.home-text108 {
  display: inline-block;
}

.home-fragment109 {
  display: contents;
}

.home-text109 {
  display: inline-block;
}

.home-fragment110 {
  display: contents;
}

.home-text110 {
  display: inline-block;
}

.home-fragment111 {
  display: contents;
}

.home-text111 {
  display: inline-block;
}

.home-fragment112 {
  display: contents;
}

.home-text112 {
  display: inline-block;
}

.home-fragment113 {
  display: contents;
}

.home-text113 {
  display: inline-block;
}

.home-fragment114 {
  display: contents;
}

.home-text114 {
  display: inline-block;
}

.home-fragment115 {
  display: contents;
}

.home-text115 {
  display: inline-block;
}

.home-fragment116 {
  display: contents;
}

.home-text116 {
  display: inline-block;
}

.home-fragment117 {
  display: contents;
}

.home-text117 {
  display: inline-block;
}

.home-fragment118 {
  display: contents;
}

.home-text118 {
  display: inline-block;
}

.home-fragment119 {
  display: contents;
}

.home-text119 {
  display: inline-block;
}

.home-fragment120 {
  display: contents;
}

.home-text120 {
  display: inline-block;
}

.home-fragment121 {
  display: contents;
}

.home-text121 {
  display: inline-block;
}

.home-fragment122 {
  display: contents;
}

.home-text122 {
  display: inline-block;
}

.home-fragment123 {
  display: contents;
}

.home-text123 {
  display: inline-block;
}

.home-fragment124 {
  display: contents;
}

.home-text124 {
  display: inline-block;
}

.home-fragment125 {
  display: contents;
}

.home-text125 {
  display: inline-block;
}

.home-fragment126 {
  display: contents;
}

.home-text126 {
  display: inline-block;
}

.home-fragment127 {
  display: contents;
}

.home-text127 {
  display: inline-block;
}

.home-fragment128 {
  display: contents;
}

.home-text128 {
  display: inline-block;
}

.home-fragment129 {
  display: contents;
}

.home-text129 {
  display: inline-block;
}

.home-fragment130 {
  display: contents;
}

.home-text130 {
  display: inline-block;
}

.home-fragment131 {
  display: contents;
}

.home-text131 {
  display: inline-block;
}

.home-fragment132 {
  display: contents;
}

.home-text132 {
  display: inline-block;
}

.home-fragment133 {
  display: contents;
}

.home-text133 {
  display: inline-block;
}

.home-fragment134 {
  display: contents;
}

.home-text134 {
  display: inline-block;
}

.home-fragment135 {
  display: contents;
}

.home-text135 {
  display: inline-block;
}

.home-fragment136 {
  display: contents;
}

.home-text136 {
  display: inline-block;
}

.home-fragment137 {
  display: contents;
}

.home-text137 {
  display: inline-block;
}

.home-fragment138 {
  display: contents;
}

.home-text138 {
  display: inline-block;
}

.home-fragment139 {
  display: contents;
}

.home-text139 {
  display: inline-block;
}

.home-fragment140 {
  display: contents;
}

.home-text140 {
  display: inline-block;
}

.home-fragment141 {
  display: contents;
}

.home-text141 {
  display: inline-block;
}

.home-fragment142 {
  display: contents;
}

.home-text142 {
  display: inline-block;
}

.home-fragment143 {
  display: contents;
}

.home-text143 {
  display: inline-block;
}

.home-fragment144 {
  display: contents;
}

.home-text144 {
  display: inline-block;
}

.home-fragment145 {
  display: contents;
}

.home-text145 {
  display: inline-block;
}

.home-fragment146 {
  display: contents;
}

.home-text146 {
  display: inline-block;
}

.home-fragment147 {
  display: contents;
}

.home-text147 {
  display: inline-block;
}

.home-fragment148 {
  display: contents;
}

.home-text148 {
  display: inline-block;
}

.home-fragment149 {
  display: contents;
}

.home-text149 {
  display: inline-block;
}

.home-fragment150 {
  display: contents;
}

.home-text150 {
  display: inline-block;
}

.home-fragment151 {
  display: contents;
}

.home-text151 {
  display: inline-block;
}

.home-fragment152 {
  display: contents;
}

.home-text152 {
  display: inline-block;
}

.home-fragment153 {
  display: contents;
}

.home-text153 {
  display: inline-block;
}

.home-fragment154 {
  display: contents;
}

.home-text154 {
  display: inline-block;
}

.home-fragment155 {
  display: contents;
}

.home-text155 {
  display: inline-block;
}

.home-fragment156 {
  display: contents;
}

.home-text156 {
  display: inline-block;
}

.home-fragment157 {
  display: contents;
}

.home-text157 {
  display: inline-block;
}

.home-fragment158 {
  display: contents;
}

.home-text158 {
  display: inline-block;
}

.home-fragment159 {
  display: contents;
}

.home-text159 {
  display: inline-block;
}

.home-fragment160 {
  display: contents;
}

.home-text160 {
  display: inline-block;
}

.home-fragment161 {
  display: contents;
}

.home-text161 {
  display: inline-block;
}

.home-fragment162 {
  display: contents;
}

.home-text162 {
  display: inline-block;
}

.home-fragment163 {
  display: contents;
}

.home-text163 {
  display: inline-block;
}

.home-fragment164 {
  display: contents;
}

.home-text164 {
  display: inline-block;
}

.home-fragment165 {
  display: contents;
}

.home-text165 {
  display: inline-block;
}

.home-fragment166 {
  display: contents;
}

.home-text166 {
  display: inline-block;
}

.home-fragment167 {
  display: contents;
}

.home-text167 {
  display: inline-block;
}

.home-fragment168 {
  display: contents;
}

.home-text168 {
  display: inline-block;
}

.home-fragment169 {
  display: contents;
}

.home-text169 {
  display: inline-block;
}

.home-fragment170 {
  display: contents;
}

.home-text170 {
  display: inline-block;
}

.home-fragment171 {
  display: contents;
}

.home-text171 {
  display: inline-block;
}

.home-fragment172 {
  display: contents;
}

.home-text172 {
  display: inline-block;
}

.home-fragment173 {
  display: contents;
}

.home-text173 {
  display: inline-block;
}

.home-fragment174 {
  display: contents;
}

.home-text174 {
  display: inline-block;
}

.home-fragment175 {
  display: contents;
}

.home-text175 {
  display: inline-block;
}

.home-fragment176 {
  display: contents;
}

.home-text176 {
  display: inline-block;
}

.home-fragment177 {
  display: contents;
}

.home-text177 {
  display: inline-block;
}

.home-fragment178 {
  display: contents;
}

.home-text178 {
  display: inline-block;
}

.home-fragment179 {
  display: contents;
}

.home-text179 {
  display: inline-block;
}

.home-fragment180 {
  display: contents;
}

.home-text180 {
  display: inline-block;
}

.home-fragment181 {
  display: contents;
}

.home-text181 {
  display: inline-block;
}

.home-fragment182 {
  display: contents;
}

.home-text182 {
  display: inline-block;
}

.home-fragment183 {
  display: contents;
}

.home-text183 {
  display: inline-block;
}

.home-fragment184 {
  display: contents;
}

.home-text184 {
  display: inline-block;
}

.home-fragment185 {
  display: contents;
}

.home-text185 {
  display: inline-block;
}

.home-fragment186 {
  display: contents;
}

.home-text186 {
  display: inline-block;
}

.home-fragment187 {
  display: contents;
}

.home-text187 {
  display: inline-block;
}

.home-fragment188 {
  display: contents;
}

.home-text188 {
  display: inline-block;
}

.home-fragment189 {
  display: contents;
}

.home-text189 {
  display: inline-block;
}

.home-fragment190 {
  display: contents;
}

.home-text190 {
  display: inline-block;
}

.home-fragment191 {
  display: contents;
}

.home-text191 {
  display: inline-block;
}

.home-fragment192 {
  display: contents;
}

.home-text192 {
  display: inline-block;
}

.home-fragment193 {
  display: contents;
}

.home-text193 {
  display: inline-block;
}

.home-fragment194 {
  display: contents;
}

.home-text194 {
  display: inline-block;
}

.home-fragment195 {
  display: contents;
}

.home-text195 {
  display: inline-block;
}

.home-fragment196 {
  display: contents;
}

.home-text196 {
  display: inline-block;
}

.home-fragment197 {
  display: contents;
}

.home-text197 {
  display: inline-block;
}

.home-fragment198 {
  display: contents;
}

.home-text198 {
  display: inline-block;
}

.home-fragment199 {
  display: contents;
}

.home-text199 {
  display: inline-block;
}

.home-fragment200 {
  display: contents;
}

.home-text200 {
  display: inline-block;
}

.home-fragment201 {
  display: contents;
}

.home-text201 {
  display: inline-block;
}

.home-fragment202 {
  display: contents;
}

.home-text202 {
  display: inline-block;
}

.home-fragment203 {
  display: contents;
}

.home-text203 {
  display: inline-block;
}

.home-fragment204 {
  display: contents;
}

.home-text204 {
  display: inline-block;
}

.home-fragment205 {
  display: contents;
}

.home-text205 {
  display: inline-block;
}

.home-fragment206 {
  display: contents;
}

.home-text206 {
  display: inline-block;
}

.home-fragment207 {
  display: contents;
}

.home-text207 {
  display: inline-block;
}

.home-fragment208 {
  display: contents;
}

.home-text208 {
  display: inline-block;
}

.home-fragment209 {
  display: contents;
}

.home-text209 {
  display: inline-block;
}

.home-fragment210 {
  display: contents;
}

.home-text210 {
  display: inline-block;
}

.home-fragment211 {
  display: contents;
}

.home-text211 {
  display: inline-block;
}

.home-fragment212 {
  display: contents;
}

.home-text212 {
  display: inline-block;
}

.home-fragment213 {
  display: contents;
}

.home-text213 {
  display: inline-block;
}

.home-fragment214 {
  display: contents;
}

.home-text214 {
  display: inline-block;
}

.home-fragment215 {
  display: contents;
}

.home-text215 {
  display: inline-block;
}

.home-fragment216 {
  display: contents;
}

.home-text216 {
  display: inline-block;
}

.home-fragment217 {
  display: contents;
}

.home-text217 {
  display: inline-block;
}

.home-fragment218 {
  display: contents;
}

.home-text218 {
  display: inline-block;
}

.home-fragment219 {
  display: contents;
}

.home-text219 {
  display: inline-block;
}


.textarea {
  color: var(--dl-color-theme-neutral-dark);
  cursor: auto;
  padding: 0.5rem;
  border-color: var(--dl-color-theme-neutral-dark);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-theme-neutral-light);
}

.list {
  width: 100%;
  margin: 1em 0px 1em 0px;
  display: block;
  padding: 0px 0px 0px 1.5rem;
  list-style-type: none;
  list-style-position: outside;
}

.list-item {
  display: list-item;
}

.teleport-show {
  display: flex !important;
  transform: none !important;
}

.thq-input {
  color: var(--dl-color-theme-neutral-dark);
  cursor: auto;
  outline: none;
  padding: 0.5rem 1rem;
  align-self: stretch;
  text-align: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-width: 1px;
  border-radius: var(--dl-layout-radius-inputradius);
  background-color: var(--dl-color-theme-neutral-light);
}

.thq-input:focus {
  outline: 1px solid var(--dl-color-theme-primary1);
}

.thq-button-filled {
  gap: var(--dl-layout-space-halfunit);
  fill: var(--dl-color-theme-secondary1);
  color: var(--dl-color-theme-secondary1);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  font-weight: bold;
  padding-top: var(--dl-layout-space-halfunit);
  white-space: nowrap;
  border-color: var(--dl-color-theme-primary1);
  border-width: 1px;
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: var(--dl-layout-radius-buttonradius);
  padding-right: var(--dl-layout-space-oneandhalfunits);
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: center;
  background-color: var(--dl-color-theme-primary1);
}

.thq-button-filled:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  border-color: var(--dl-color-theme-primary2);
  background-color: var(--dl-color-theme-primary2);
}

.thq-button-outline {
  gap: var(--dl-layout-space-halfunit);
  fill: var(--dl-color-theme-primary1);
  color: var(--dl-color-theme-primary1);
  border: 1px solid;
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  font-weight: bold;
  padding-top: var(--dl-layout-space-halfunit);
  white-space: nowrap;
  border-color: var(--dl-color-theme-primary1);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: var(--dl-layout-radius-buttonradius);
  padding-right: var(--dl-layout-space-oneandhalfunits);
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: center;
}

.thq-button-outline:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  border-color: var(--dl-color-theme-primary2);
  background-color: var(--dl-color-theme-primary2);
}

.thq-button-flat {
  gap: var(--dl-layout-space-halfunit);
  fill: var(--dl-color-theme-primary1);
  color: var(--dl-color-theme-primary1);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  font-weight: bold;
  padding-top: var(--dl-layout-space-halfunit);
  white-space: nowrap;
  border-color: transparent;
  border-width: 1px;
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: var(--dl-layout-radius-buttonradius);
  padding-right: var(--dl-layout-space-oneandhalfunits);
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: center;
}

.thq-button-flat:hover {
  fill: var(--dl-color-theme-secondary1);
  color: var(--dl-color-theme-secondary1);
  border-color: var(--dl-color-theme-primary2);
  background-color: var(--dl-color-theme-primary2);
}

.thq-heading-1 {
  font-size: 48px;
  font-family: STIX Two Text;
  font-weight: 700;
  line-height: 1.5;
}

.thq-heading-2 {
  font-size: 35px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 1.5;
}

.thq-heading-3 {
  font-size: 26px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 1.5;
}

.thq-body-large {
  font-size: 18px;
  font-family: Noto Sans;
  line-height: 1.5;
}

.thq-body-small {
  font-size: 16px;
  font-family: Noto Sans;
  line-height: 1.5;
}

.thq-team-image-round {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}

.thq-section-padding {
  width: 100%;
  display: flex;
  padding: var(--dl-layout-space-fiveunits);
  position: relative;
  align-items: center;
  flex-direction: column;
}

.thq-section-max-width {
  width: 100%;
  max-width: var(--dl-layout-size-maxwidth);
}

.thq-img-ratio-1-1 {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: var(--dl-layout-radius-imageradius);
}

.thq-img-ratio-16-9 {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: var(--dl-layout-radius-imageradius);
}

.thq-img-ratio-4-3 {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
  border-radius: var(--dl-layout-radius-imageradius);
}

.thq-img-ratio-4-6 {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/6;
  border-radius: var(--dl-layout-radius-imageradius);
}

.thq-img-round {
  width: 100%;
  border-radius: var(--dl-layout-radius-round);
}

.thq-flex-column {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}

.thq-flex-row {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
}

.thq-grid-6 {
  display: grid;
  grid-gap: var(--dl-layout-space-twounits);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.thq-grid-5 {
  display: grid;
  grid-gap: var(--dl-layout-space-twounits);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.thq-card {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  padding: var(--dl-layout-space-twounits);
  align-items: stretch;
  border-radius: var(--dl-layout-radius-cardradius);
  flex-direction: column;
}

.thq-box-shadow {
  box-shadow: 0px 0px 5px -2px var(--dl-color-theme-neutral-dark);
}

.thq-grid-3 {
  display: grid;
  grid-gap: var(--dl-layout-space-twounits);
  grid-template-columns: 1fr 1fr 1fr;
}

.thq-grid-4 {
  display: grid;
  grid-gap: var(--dl-layout-space-twounits);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.thq-grid-2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-twounits);
  grid-template-columns: 1fr 1fr;
}

.thq-checkbox {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}

.thq-select {
  cursor: pointer;
  appearance: none;
  padding-top: var(--dl-layout-space-halfunit);
  padding-left: var(--dl-layout-space-unit);
  border-radius: var(--dl-layout-radius-inputradius);
  padding-right: var(--dl-layout-space-twounits);
  padding-bottom: var(--dl-layout-space-halfunit);
  background-color: var(--dl-color-theme-neutral-light);
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg width%3D%2220%22 height%3D%2220%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22 viewBox%3D%220 0 20 20%22 fill%3D%22%23000%22%3E%3Cpath d%3D%22M4.293 7.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 8px center;
}

.thq-divider-horizontal {
  width: 100%;
  height: 1px;
  background-color: var(--dl-color-theme-neutral-dark);
}

.thq-icon-small {
  width: 24px;
  height: 24px;
}

.thq-button-icon {
  fill: var(--dl-color-theme-secondary1);
  padding: 3px;
  transition: 0.3s;
  border-radius: var(--dl-layout-radius-round);
}

.thq-button-icon:hover {
  fill: var(--dl-color-theme-secondary2);
}

.thq-icon-medium {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
}

.thq-icon-x-small {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}

.thq-link {
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  background: linear-gradient(to right, var(--dl-color-theme-primary1) 50%, var(--dl-color-theme-neutral-dark) 50%);
  transition: background-position 300ms ease;
  font-weight: 600;
  background-clip: text;
  background-size: 200% 100%;
  background-position: 100%;
  -webkit-text-fill-color: transparent;
}

.thq-link:hover {
  background-position: 0 100%;
}

.thq-grid-auto-300 {
  display: grid;
  grid-gap: var(--dl-layout-space-oneandhalfunits);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.thq-animated-group-vertical-reverse {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  animation: scroll-y 20s linear infinite;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  animation-direction: reverse;
}

.thq-animated-group-horizontal-reverse {
  gap: var(--dl-layout-space-unit);
  display: flex;
  animation: scroll-x 20s linear infinite;
  min-width: 100%;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-around;
  animation-direction: reverse;
}

.thq-animated-group-vertical {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  animation: scroll-y 20s linear infinite;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
}

.thq-animated-group-horizontal {
  gap: var(--dl-layout-space-unit);
  display: flex;
  animation: scroll-x 20s linear infinite;
  min-width: 100%;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-around;
}

.thq-animated-group-container-vertical {
  gap: var(--dl-layout-space-unit);
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.thq-animated-group-container-horizontal {
  gap: var(--dl-layout-space-unit);
  display: flex;
  overflow: hidden;
}

.thq-mask-image-vertical {
  mask-image: linear-gradient(to bottom, transparent, black 1%, black 99%, transparent);
}

.thq-mask-image-horizontal {
  mask-image: linear-gradient(to right, transparent, black 1%, black 99%, transparent);
}

.thq-img-scale {
  transition: 0.3s;
}

.thq-img-scale:hover {
  scale: 1.05;
}

.thq-animated-card-bg-1 {
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  border-radius: var(--dl-layout-radius-cardradius);
  background-color: var(--dl-color-theme-accent1);
}

.thq-animated-card-bg-2 {
  transition: transform 0.3s;
  border-radius: var(--dl-layout-radius-cardradius);
  background-color: var(--dl-color-theme-accent2);
}

.thq-button-animated {
  outline: none;
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-width: 2px;
}

.thq-input::placeholder {
  text-align: center;
  vertical-align: middle;
}

.thq-animated-group-container-vertical:hover div {
  animation-play-state: paused;
}

.thq-animated-group-container-horizontal:hover div {
  animation-play-state: paused;
}

.thq-animated-card-bg-2:has([data-animated="true"]:hover) {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg);
}

.thq-animated-card-bg-1:has([data-animated="true"]:hover) {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg);
}

.thq-button-animated:before {
  top: 0;
  left: -20%;
  color: var(--dl-color-theme-neutral-light);
  width: 200%;
  height: 101%;
  content: "";
  z-index: 1;
  position: absolute;
  transform: scaleX(0);
  transition: transform 0.5s;
  border-radius: var(--dl-layout-radius-buttonradius);
  background-color: var(--dl-color-theme-neutral-dark);
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
}

.thq-button-animated:hover::before {
  color: var(--dl-color-theme-neutral-light);
  z-index: -1;
  transform: scaleX(1);
}

.Content {
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}

@media(max-width: 991px) {
  .thq-grid-4 {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media(max-width: 767px) {
  .thq-section-padding {
    padding: var(--dl-layout-space-threeunits);
  }
  .thq-flex-column {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .thq-flex-row {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .thq-grid-6 {
    grid-gap: var(--dl-layout-space-oneandhalfunits);
    grid-template-columns: 1fr 1fr 1fr;
  }
  .thq-grid-5 {
    grid-gap: var(--dl-layout-space-oneandhalfunits);
    grid-template-columns: 1fr 1fr 1fr;
  }
  .thq-card {
    padding: var(--dl-layout-space-oneandhalfunits);
  }
  .thq-grid-3 {
    grid-gap: var(--dl-layout-space-oneandhalfunits);
    grid-template-columns: 1fr 1fr;
  }
  .thq-grid-4 {
    grid-gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
  }
  .thq-grid-2 {
    grid-gap: var(--dl-layout-space-oneandhalfunits);
    grid-template-columns: 1fr;
  }
  .thq-img-scale {
    width: 100%;
  }
}

@media(max-width: 479px) {
  .thq-section-padding {
    padding: var(--dl-layout-space-oneandhalfunits);
  }
  .thq-flex-column {
    gap: var(--dl-layout-space-unit);
  }
  .thq-flex-row {
    gap: var(--dl-layout-space-unit);
  }
  .thq-grid-6 {
    grid-gap: var(--dl-layout-space-unit);
    grid-template-columns: 1fr 1fr;
  }
  .thq-grid-5 {
    grid-gap: var(--dl-layout-space-unit);
    grid-template-columns: 1fr 1fr;
  }
  .thq-grid-3 {
    grid-gap: var(--dl-layout-space-unit);
    align-items: center;
    grid-template-columns: 1fr;
  }
  .thq-grid-4 {
    grid-gap: var(--dl-layout-space-unit);
    align-items: center;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
  .thq-grid-2 {
    grid-gap: var(--dl-layout-space-unit);
  }
  .thq-grid-auto-300 {
    grid-template-columns: 1fr;
  }
}
```

### `app/home.html`

> [skipped — file exceeds 100kb limit]

### `app/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Call - RTSLD</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/js/socket.io.js" defer></script>
    <script src="/js/main.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
    <style>
        :root {
            --primary: #BF4408;
            --primary-hover: #E65103;
            --bg-light: #FBFAF9;
            --text-dark: #191818;
        }
        body { background: var(--bg-light); font-family: 'Segoe UI', sans-serif; }
        /* Navbar consistent with home */
        .site-nav {
            background: #fff;
            border-bottom: 1px solid #e5e7eb;
            position: sticky; top: 0; z-index: 50;
        }
        .nav-inner {
            max-width: 1400px; margin: 0 auto;
            padding: 0.75rem 1.5rem;
            display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { font-size: 1.5rem; font-weight: 700; color: var(--primary); text-decoration: none; }
        .nav-links { display: flex; gap: 1rem; align-items: center; }
        .nav-links a {
            color: #374151; text-decoration: none; font-size: 0.9rem;
            padding: 0.4rem 0.75rem; border-radius: 6px; transition: background 0.2s;
        }
        .nav-links a:hover { background: #fef3ee; color: var(--primary); }
        .nav-btn {
            background: var(--primary); color: #fff;
            padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.875rem;
            text-decoration: none; transition: background 0.2s;
        }
        .nav-btn:hover { background: var(--primary-hover); }
        /* Layout */
        .page-layout { display: flex; height: calc(100vh - 57px); overflow: hidden; }
        /* Sidebar */
        .sidebar {
            width: 260px; min-width: 260px; background: #fff;
            border-right: 1px solid #e5e7eb; display: flex; flex-direction: column;
            transition: transform 0.3s;
        }
        .sidebar-header {
            padding: 1rem 1.25rem; border-bottom: 1px solid #e5e7eb;
            font-size: 1.1rem; font-weight: 600; color: var(--text-dark);
        }
        #allusers { flex: 1; overflow-y: auto; padding: 0.5rem; }
        #allusers li {
            display: flex; align-items: center; justify-content: space-between;
            padding: 0.6rem 0.75rem; border-radius: 8px; cursor: pointer;
            font-size: 0.9rem; color: #374151; margin-bottom: 2px;
            transition: background 0.15s;
        }
        #allusers li:hover { background: #fef3ee; }
        .call-btn {
            border: none; background: transparent; cursor: pointer;
            padding: 4px; border-radius: 6px; transition: background 0.15s;
        }
        .call-btn:hover { background: #fee2e2; }
        .call-btn img { width: 18px; height: 18px; display: block; }
        /* Username input */
        .username-section {
            padding: 1rem 1.25rem; border-top: 1px solid #e5e7eb;
        }
        .username-section input {
            width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db;
            border-radius: 8px; font-size: 0.875rem; outline: none;
            transition: border-color 0.2s;
        }
        .username-section input:focus { border-color: var(--primary); }
        .username-section button {
            margin-top: 0.5rem; width: 100%; padding: 0.5rem;
            background: #16a34a; color: #fff; border: none; border-radius: 8px;
            font-size: 0.875rem; font-weight: 600; cursor: pointer;
            transition: background 0.2s;
        }
        .username-section button:hover { background: #15803d; }
        /* Main video area */
        .video-area {
            flex: 1; display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            padding: 1.25rem; gap: 1rem; overflow: auto;
        }
        /* Video grid */
        .video-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            width: 100%; max-width: 960px;
        }
        /* Individual video tile */
        .video-tile {
            position: relative; background: #111; border-radius: 12px;
            overflow: hidden; aspect-ratio: 16/9;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .video-tile video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .video-label {
            position: absolute; top: 8px; left: 10px;
            background: rgba(0,0,0,0.55); color: #fff;
            font-size: 0.75rem; font-weight: 600; padding: 2px 8px;
            border-radius: 20px; backdrop-filter: blur(4px);
        }
        /* Caption bar — sits INSIDE each tile at the bottom */
        .caption-bar {
            position: absolute; bottom: 0; left: 0; right: 0;
            background: rgba(0,0,0,0.72); color: #fff;
            font-size: 0.875rem; font-weight: 500;
            padding: 6px 10px;
            display: flex; align-items: center; gap: 6px;
            min-height: 36px;
            backdrop-filter: blur(4px);
        }
        .caption-bar p {
            flex: 1; margin: 0; font-size: 0.82rem;
            min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .clear-caption-btn {
            border: none; background: #dc2626; color: #fff;
            font-size: 0.68rem; padding: 2px 7px; border-radius: 4px;
            cursor: pointer; white-space: nowrap; flex-shrink: 0;
            transition: background 0.15s;
        }
        .clear-caption-btn:hover { background: #b91c1c; }
        /* Switch source button */
        .switch-source-btn {
            border: 1px solid rgba(255,255,255,0.4);
            background: rgba(255,255,255,0.12); color: #fff;
            font-size: 0.68rem; padding: 2px 7px; border-radius: 4px;
            cursor: pointer; white-space: nowrap; flex-shrink: 0;
            transition: background 0.15s;
        }
        .switch-source-btn:hover { background: rgba(255,255,255,0.28); }
        /* Active captioning indicator */
        .captioning-badge {
            position: absolute; top: 8px; right: 10px;
            background: rgba(22,163,74,0.88); color: #fff;
            font-size: 0.68rem; font-weight: 700; padding: 2px 8px;
            border-radius: 20px; display: none; align-items: center; gap: 4px;
            backdrop-filter: blur(4px);
        }
        .captioning-badge.active { display: flex; }
        .captioning-badge .dot {
            width: 6px; height: 6px; border-radius: 50%; background: #fff;
            animation: pulse-dot 1.2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.35; transform: scale(0.65); }
        }
        /* Controls */
        .controls {
            display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;
        }
        .ctrl-btn {
            padding: 0.5rem 1.1rem; border: none; border-radius: 8px;
            font-size: 0.875rem; font-weight: 500; cursor: pointer;
            transition: background 0.2s, transform 0.1s;
        }
        .ctrl-btn:active { transform: scale(0.97); }
        .ctrl-btn.grey { background: #374151; color: #fff; }
        .ctrl-btn.grey:hover { background: #1f2937; }
        .ctrl-btn.blue { background: #2563eb; color: #fff; }
        .ctrl-btn.blue:hover { background: #1d4ed8; }
        .ctrl-btn.red-soft { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
        .ctrl-btn.red-soft:hover { background: #fca5a5; }
        .end-call-btn {
            width: 52px; height: 52px; border-radius: 50%; border: none;
            background: #dc2626; cursor: pointer;
            display: none; align-items: center; justify-content: center;
            box-shadow: 0 4px 12px rgba(220,38,38,0.4);
            transition: background 0.2s, transform 0.1s;
        }
        .end-call-btn:hover { background: #b91c1c; }
        .end-call-btn img { width: 22px; height: 22px; }
        /* Mobile sidebar toggle */
        .sidebar-toggle {
            display: none;
            background: none; border: 1px solid #d1d5db; border-radius: 6px;
            padding: 4px 8px; cursor: pointer; font-size: 1.2rem;
        }
        /* ---- RESPONSIVE ---- */
        @media (max-width: 768px) {
            .page-layout { flex-direction: column; height: auto; min-height: calc(100vh - 57px); }
            .sidebar {
                width: 100%; min-width: unset;
                border-right: none; border-bottom: 1px solid #e5e7eb;
                max-height: 220px;
            }
            .sidebar.collapsed { max-height: 52px; overflow: hidden; }
            .sidebar-toggle { display: inline-block; }
            .video-grid { grid-template-columns: 1fr; }
            .video-area { padding: 0.75rem; }
        }
        @media (max-width: 480px) {
            .controls { gap: 0.4rem; }
            .ctrl-btn { font-size: 0.8rem; padding: 0.4rem 0.75rem; }
        }
    </style>
</head>
<body>
<nav class="site-nav">
    <div class="nav-inner">
        <a href="/" class="nav-logo">RTSLD</a>
        <div class="nav-links">
            <button class="sidebar-toggle" id="sidebarToggle" title="Toggle contacts">☰</button>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/page2" class="nav-btn">Video Upload</a>
        </div>
    </div>
</nav>
<div class="page-layout">
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">Contacts</div>
        <ul id="allusers"></ul>
        <div class="username-section">
            <input id="username" type="text" placeholder="Enter your username" />
            <button id="create-user">Join</button>
        </div>
    </aside>
    <main class="video-area">
        <div class="video-grid" id="videoGrid">
            <div class="video-tile" id="localTile">
                <span class="video-label" id="localLabel">You</span>
                <div class="captioning-badge" id="localBadge">
                    <span class="dot"></span> Captioning
                </div>
                <video id="localVideo" autoplay playsinline muted></video>
                <div class="caption-bar">
                    <p id="predictionText">Caption: ...</p>
                    <button class="switch-source-btn" id="switchToLocal">Caption this</button>
                    <button class="clear-caption-btn" id="clear-btn">Clear</button>
                </div>
            </div>
            <div class="video-tile" id="remoteTile">
                <span class="video-label" id="remoteLabel">Remote</span>
                <div class="captioning-badge" id="remoteBadge">
                    <span class="dot"></span> Captioning
                </div>
                <video id="remoteVideo" autoplay playsinline></video>
                <div class="caption-bar">
                    <p id="remoteCaptionText">Remote caption: ...</p>
                    <button class="switch-source-btn" id="switchToRemote">Caption this</button>
                </div>
            </div>
        </div>
        <div class="controls">
            <button id="mute-audio-btn" class="ctrl-btn grey">Mute</button>
            <button id="toggle-video-btn" class="ctrl-btn grey">Video Off</button>
            <button id="share-screen-btn" class="ctrl-btn blue">Share Screen</button>
            <button id="stop-screen-share-btn" class="ctrl-btn red-soft">Stop Share</button>
            <button id="end-call-btn" class="end-call-btn" title="End Call">
                <img src="/images/phone-disconnect.png" alt="End Call" />
            </button>
        </div>
    </main>
</div>
<canvas id="canvas" style="display:none;"></canvas>
<script>
// ── Sidebar mobile toggle ─────────────────────────────────────────────────────
document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
});
// ── Caption source state ──────────────────────────────────────────────────────
// 'local'  = draw frames from localVideo  (default)
// 'remote' = draw frames from remoteVideo
let captionSource = 'local';
let sentence = [];
let lastWord  = "";
const captionCanvas = document.createElement('canvas');
const captionCtx    = captionCanvas.getContext('2d');
// Update the pulsing badge and switch button labels to reflect current source
function updateSourceUI() {
    const localBadge    = document.getElementById('localBadge');
    const remoteBadge   = document.getElementById('remoteBadge');
    const switchToLocal  = document.getElementById('switchToLocal');
    const switchToRemote = document.getElementById('switchToRemote');
    if (captionSource === 'local') {
        localBadge.classList.add('active');
        remoteBadge.classList.remove('active');
        switchToLocal.textContent  = '✓ Captioning';
        switchToLocal.style.background  = 'rgba(22,163,74,0.5)';
        switchToLocal.style.borderColor = 'rgba(22,163,74,0.8)';
        switchToRemote.textContent = 'Caption this';
        switchToRemote.style.background  = '';
        switchToRemote.style.borderColor = '';
    } else {
        remoteBadge.classList.add('active');
        localBadge.classList.remove('active');
        switchToRemote.textContent = '✓ Captioning';
        switchToRemote.style.background  = 'rgba(22,163,74,0.5)';
        switchToRemote.style.borderColor = 'rgba(22,163,74,0.8)';
        switchToLocal.textContent  = 'Caption this';
        switchToLocal.style.background  = '';
        switchToLocal.style.borderColor = '';
    }
}
// Switch to local video as caption source
document.getElementById('switchToLocal').addEventListener('click', () => {
    if (captionSource === 'local') return;
    captionSource = 'local';
    sentence = []; lastWord = "";
    document.getElementById('predictionText').innerText = 'Caption: ...';
    updateSourceUI();
    // Tell the remote peer what WE switched to, so they can show it too
    if (typeof socket !== 'undefined' && username.value) {
        socket.emit('caption-source-change', { from: username.value, source: 'local' });
    }
});
// Switch to remote video as caption source
document.getElementById('switchToRemote').addEventListener('click', () => {
    if (captionSource === 'remote') return;
    captionSource = 'remote';
    sentence = []; lastWord = "";
    document.getElementById('predictionText').innerText = 'Caption: ...';
    updateSourceUI();
    if (typeof socket !== 'undefined' && username.value) {
        socket.emit('caption-source-change', { from: username.value, source: 'remote' });
    }
});
// Clear button
document.getElementById('clear-btn').addEventListener('click', () => {
    sentence = []; lastWord = "";
    document.getElementById('predictionText').innerText = 'Caption: ...';
});
// ── TTS ───────────────────────────────────────────────────────────────────────
function speakText(text) {
    if ('speechSynthesis' in window) {
        const s = new SpeechSynthesisUtterance(text);
        s.lang = 'en'; s.rate = 1; s.volume = 1;
        window.speechSynthesis.speak(s);
    }
}
// ── Frame capture & predict ───────────────────────────────────────────────────
async function sendFrame() {
    // Pick which video element to draw from
    const sourceEl = captionSource === 'local'
        ? document.getElementById('localVideo')
        : document.getElementById('remoteVideo');
    if (!sourceEl || !sourceEl.srcObject || sourceEl.readyState < 2) return;
    if (sourceEl.videoWidth === 0) return;
    captionCanvas.width  = sourceEl.videoWidth;
    captionCanvas.height = sourceEl.videoHeight;
    captionCtx.drawImage(sourceEl, 0, 0, captionCanvas.width, captionCanvas.height);
    const frameData = captionCanvas.toDataURL('image/jpeg', 0.6).split(',')[1];
    try {
        const response = await fetch('https://realtimeworkingmain.onrender.com/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `frame=${encodeURIComponent(frameData)}`,
        });
        if (!response.ok) return;
        const result  = await response.json();
        const newWord = (result.prediction || '').trim();
        if (newWord && newWord !== 'None' && newWord.toLowerCase() !== 'no hands detected') {
            if (newWord !== lastWord) {
                sentence.push(newWord);
                lastWord = newWord;
                speakText(newWord);
            }
        }
        const captionStr = sentence.join(' ');
        // Always update the local display (predictionText shows what WE are captioning)
        document.getElementById('predictionText').innerText = `Caption: ${captionStr}`;
        // Broadcast via socket so the remote peer's bar updates
        if (typeof socket !== 'undefined' && username.value) {
            socket.emit('caption-update', { from: username.value, caption: captionStr });
        }
        // Also over WebRTC data channel
        if (typeof dataChannel !== 'undefined' && dataChannel && dataChannel.readyState === 'open') {
            dataChannel.send(JSON.stringify({ caption: captionStr }));
        }
    } catch (_) { /* server cold-starting, ignore */ }
}
// ── Socket listeners (wait for main.js to define socket) ─────────────────────
const waitForSocket = setInterval(() => {
    if (typeof socket === 'undefined') return;
    clearInterval(waitForSocket);
    // Remote user's caption → update remoteCaptionText
    socket.on('caption-update', (data) => {
        if (!data || !data.caption === undefined) return;
        if (data.from && username.value && data.from === username.value) return;
        document.getElementById('remoteCaptionText').innerText =
            `${data.from || 'Remote'}: ${data.caption}`;
    });
    // Remote user switched their caption source — just informational, log it
    socket.on('caption-source-change', (data) => {
        if (!data) return;
        // You could show a toast here if desired; for now silently noted
        console.log(`${data.from} switched caption source to: ${data.source}`);
    });
}, 150);
// ── Init ──────────────────────────────────────────────────────────────────────
updateSourceUI();
setInterval(sendFrame, 2000);
</script>
</body>
</html>
```

### `app/page3.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Future scope for now
    </title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold mb-4">Sign Language Model Trainer</h1>

    <button id="start-recording" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition">
        Start Recording Signs
    </button>

    <button id="train-model" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-green-700 transition mt-4">
        Train Model
    </button>

    <p id="status" class="text-lg font-semibold mt-4 text-gray-700"></p>

    <script>
        document.getElementById("start-recording").addEventListener("click", async () => {
            document.getElementById("status").innerText = "Recording signs...";
            try {
                await fetch("/start-recording");
                document.getElementById("status").innerText = "Recording complete!";
            } catch (error) {
                document.getElementById("status").innerText = "Error starting recording!";
            }
        });

        document.getElementById("train-model").addEventListener("click", async () => {
            document.getElementById("status").innerText = "Training model...";
            try {
                await fetch("/train-model");
                document.getElementById("status").innerText = "Model training complete!";
            } catch (error) {
                document.getElementById("status").innerText = "Error training model!";
            }
        });
    </script>
</body>
</html>
```

### `app/videoUpload.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Captioning (Multi-Language)</title>


    <script src="https://cdn.tailwindcss.com"></script>

</head>
<body class="bg-gray-100 font-sans flex flex-col items-center justify-center min-h-screen p-6">

    <h1 class="text-2xl font-bold text-gray-800 mb-4">Upload a Video for Captioning</h1>


    <label class="mb-2 font-semibold">Select Language:</label>
    <select id="languageSelect"
            class="mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-md">
        <option value="en">English</option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
    </select>


    <input type="file" id="videoInput" accept="video/*"
           class="mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-md">


    <video id="videoPlayer" controls class="w-full max-w-2xl bg-black rounded-lg shadow-lg"></video>


    <div id="captionBox"
         class="mt-4 p-4 bg-black bg-opacity-70 text-white text-lg font-semibold rounded-lg shadow-lg w-full max-w-2xl text-center">
        <p id="predictionText">Captions will appear here...</p>
    </div>


    <canvas id="canvas" class="hidden"></canvas>


    <button onclick="goBack()"
            class="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
        Go Back to Video Call
    </button>

    <button onclick="window.open('/page3')"
            class="fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition">
        Go to Add A Sign
    </button>

    <script>
        //google api : https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=Hello

        const videoInput = document.getElementById("videoInput");
        const videoPlayer = document.getElementById("videoPlayer");
        const predictionText = document.getElementById("predictionText");
        const local =" " ;
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const languageSelect = document.getElementById("languageSelect");

        let sentence = [];
        let lastWord = "";

        let isTabActive = true;

            // Detect when the user switches tabs
            document.addEventListener("visibilitychange", () => {
                isTabActive = !document.hidden; // `false` when tab is inactive, `true` when active
            });


        // Function for Text-to-Speech (TTS)
        function speakText(text, lang) {
            if ('speechSynthesis' in window) {
                let speech = new SpeechSynthesisUtterance(text);
                speech.lang = lang; // Set language
                speech.rate = 1; // Normal speed
                speech.volume = 1; // Max volume
                window.speechSynthesis.speak(speech);
            } else {
                console.log("Text-to-Speech not supported in this browser.");
            }
        }

        // Translate text using Google Translate API
        async function translateText(text, targetLang) {
    try {
        let response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        let result = await response.json();
        return result[0][0][0];  // Get the translated word
    } catch (error) {
        console.error("Translation error:", error);
        return text; // Fallback to original text
    }
}


        // When a video is uploaded
        videoInput.addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const videoURL = URL.createObjectURL(file);
                videoPlayer.src = videoURL;
                videoPlayer.load();
            }
        });

        // Capture frames & send to backend every second
        function processVideo() {
            if (!videoPlayer || videoPlayer.paused || videoPlayer.ended) return;

            // Capture frame
            canvas.width = videoPlayer.videoWidth;
            canvas.height = videoPlayer.videoHeight;
            ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

            // Convert frame to base64
            const frameData = canvas.toDataURL("image/jpeg").split(",")[1];

            // const apiBaseURL = "https://f684-2409-40c0-36-7aad-257f-326e-e5a2-fedb.ngrok-free.app"; // Update with ngrok URL
            // fetch(`${apiBaseURL}/predict`, { method: "POST",
            //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
            //     body: `frame=${encodeURIComponent(frameData)}`,});


            //Send frame to Flask backend
            fetch("https://realtimeworkingmain.onrender.com/predict", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `frame=${encodeURIComponent(frameData)}`,
            })
            .then(response => response.json())
            .then(async result => {
                if (!isTabActive) return; // Don't process results if tab is inactive
                let newWord = result.prediction.trim();

                if (newWord && newWord !== "None" && newWord.toLowerCase() !== "no hands detected") {
                    if (newWord !== lastWord) {
                        sentence.push(newWord);
                        lastWord = newWord;

                        // Translate the word
                        let selectedLang = languageSelect.value;
                        let translatedWord = await translateText(newWord, selectedLang);

                        // Update UI with translated word
                        predictionText.innerText = `Caption: ${sentence.join(" ")} (${translatedWord})`;

                        // Speak the translated word
                        speakText(translatedWord, selectedLang);
                    }
                }
            })
            .catch(error => console.error("Error sending frame:", error));
        }

        // Start capturing frames when video starts playing
        videoPlayer.addEventListener("play", () => {
            setInterval(processVideo, 1000);
        });

        // Go Back to Video Call
        function goBack() {
            if (window.opener) {
                window.close(); // If opened in a new tab, close it
            } else {
                window.location.href = "/"; // If in the same tab, navigate back
            }
        }
    </script>

</body>
</html>
```

### `package.json`

```json
{
  "name": "video-calling-app",
  "version": "1.0.0",
  "description": "**Media Stream Negotiation: **\r WebRTC involves negotiating media streams between peers. The addTrack() method is used to add audio and video tracks from the local stream to the peer connection. These tracks are then negotiated between peers during the offer/answer exchange to establish a common media format for communication.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "17": "^0.0.0",
    "express": "^4.18.2",
    "piyush": "^1.0.0",
    "piyushai": "^1.0.3",
    "socket.io": "^4.7.4"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

### `public/css/style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 10px;
}
body {
    background: #eee;
    font-size: 1.6rem;
    font-family: "Lora", serif;
}
ul li {
    list-style: none;
}


.lg-h-font {
    font-size: 3.2rem;
}
.h-font {
    font-size: 1.9rem;
}
.p-font {
    font-size: 1.4rem;
}
.s-font {
    font-size: 1rem;
}


.main-container {
    height: 100vh;
    display: flex;
}


.caller-list-heading {
    margin: 1rem 1.5rem;
}
.caller-list-wrapper {
    flex-basis: 30rem;
    border-right: 1px solid black;
    height: 100%;
    background: white;
}
.caller-list > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #eee;
    margin: .5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.6rem;
}
.call-btn {
    border: none;
    background: transparent;
    color: black;
}


.video-call-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.video-streams {
    display: flex;
    gap: 2rem;
}
.local-video,
.remote-video {
    flex: 1;
    width: 50rem;
    min-height: 40rem;
    max-height: 50rem;
    background: black;
    overflow: hidden;
}

.local-video video,
.remote-video video {
    width: 100%;
    height: 100%;
}

.call {
    border: none;
    outline: none;
    width: 5rem;
    height: 5rem;
    background: white;
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    margin: 2rem 0; 
    cursor: pointer;
}

.d-none {
    display: none;
}

.username-input {
    margin: 2rem 0;
}
.username-input input {
    width: 30rem;
    height: 4rem;
    padding: 5px;
    outline: none;
    border: none;
    box-shadow: inset 0 0 15px 15px rgba(0, 0, 0, 0.2);
    font-family: 'Lora', sans-serif;
    font-weight: 500;
}
.username-input input::placeholder {
    font-family: "Lora", serif;
}
.username-input button {
    height: 4rem;
    outline: none;
    border: none;
    background: darkgreen;
    color: white;
    padding: 0 1rem;
    font-family: "Lora", serif;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
}

.video-controls {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}
.video-controls button {
    padding: 1rem 2rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}




.local-video, .remote-video {
    position: relative; 
    width: 100%;
    height: 100%;
    background: black;
}

#localVideo {
    width: 100%;
    height: 100%;
}
#prediction-box {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
}
#predictionText {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);  
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border-radius: 8px;
    width: 80%;
    text-align: center;
}


#canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; 
}
```

### `public/js/main.js`

```js
const createUserBtn = document.getElementById("create-user");
const username = document.getElementById("username");
const allusersHtml = document.getElementById("allusers");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const endCallBtn = document.getElementById("end-call-btn");
const muteBtn = document.getElementById("mute-audio-btn");
const videoToggleBtn = document.getElementById("toggle-video-btn");
const shareScreenBtn = document.getElementById("share-screen-btn");
const stopScreenShareBtn = document.getElementById("stop-screen-share-btn");
let screenStream = null;
let localStream = null;
let isScreenSharing = false;
let isMuted = false;
let isVideoOff = false;
let caller = [];
let dataChannel = null;
let screenShareTrack = null;
const socket = io();
async function startMyVideo(retrying = false) {
    try {
        if (localStream) {
            localStream.getTracks().forEach(t => t.stop());
            localStream = null;
        }
        localStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },  
            audio: true
        });
        localVideo.srcObject = localStream;
        localVideo.muted = true;          
        if (isMuted)    localStream.getAudioTracks().forEach(t => { t.enabled = false; });
        if (isVideoOff) localStream.getVideoTracks().forEach(t => { t.enabled = false; });
        localStream.getTracks().forEach(track => {
            track.onended = () => {
                if (track.kind === "video" && !isScreenSharing) {
                    showCameraError("Camera disconnected — reconnecting…");
                    setTimeout(() => startMyVideo(), 2000);
                }
            };
        });
        hideCameraError();
        if (typeof PeerConnection !== "undefined") {
            const pc = PeerConnection.getInstance();
            if (pc && pc.connectionState !== "closed" && pc.connectionState !== "new") {
                localStream.getTracks().forEach(newTrack => {
                    const sender = pc.getSenders().find(
                        s => s.track && s.track.kind === newTrack.kind
                    );
                    if (sender) sender.replaceTrack(newTrack);
                    else pc.addTrack(newTrack, localStream);
                });
            }
        }
    } catch (err) {
        if (err.name === "NotReadableError" && !retrying) {
            showCameraError("Camera busy — retrying in 3 s…");
            setTimeout(() => startMyVideo(true), 3000);
        } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
            showCameraError(
                "Camera/mic permission denied. Please allow access in your browser settings, then tap Join again."
            );
        } else if (err.name === "NotFoundError") {
            showCameraError("No camera found on this device.");
        } else if (err.name === "OverconstrainedError" && !retrying) {
            showCameraError("Camera constraints unsupported — trying fallback…");
            try {
                localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                localVideo.srcObject = localStream;
                localVideo.muted = true;
                hideCameraError();
            } catch (e2) {
                showCameraError("Could not access camera: " + e2.message);
            }
        } else {
            showCameraError("Camera error: " + err.message);
        }
    }
}
function showCameraError(msg) {
    let b = document.getElementById("cam-err-banner");
    if (!b) {
        b = document.createElement("div");
        b.id = "cam-err-banner";
        b.style.cssText =
            "position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);" +
            "background:#7f1d1d;color:#fff;padding:.6rem 1.2rem;border-radius:8px;" +
            "font-size:.85rem;z-index:9999;max-width:90vw;text-align:center;" +
            "box-shadow:0 4px 12px rgba(0,0,0,.35);";
        document.body.appendChild(b);
    }
    b.textContent = msg;
    b.style.display = "block";
}
function hideCameraError() {
    const b = document.getElementById("cam-err-banner");
    if (b) b.style.display = "none";
}
const PeerConnection = (function () {
    let pc;
    const create = () => {
        pc = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun1.l.google.com:19302" }
            ]
        });
        if (localStream) {
            localStream.getTracks().forEach(t => pc.addTrack(t, localStream));
        }
        dataChannel = pc.createDataChannel("captionChannel");
        setupDataChannelHandlers(dataChannel);
        pc.ondatachannel = (e) => {
            dataChannel = e.channel;
            setupDataChannelHandlers(dataChannel);
        };
        pc.ontrack = (e) => { remoteVideo.srcObject = e.streams[0]; };
        pc.onicecandidate = (e) => {
            if (e.candidate) socket.emit("icecandidate", e.candidate);
        };
        pc.onconnectionstatechange = () => {
            if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
                endCall();
            }
        };
        return pc;
    };
    return {
        getInstance: () => {
            if (!pc || pc.connectionState === "closed") pc = create();
            return pc;
        },
        reset: () => { pc = null; }
    };
})();
function setupDataChannelHandlers(channel) {
    channel.onmessage = (e) => {
        try {
            const { caption } = JSON.parse(e.data);
            const el = document.getElementById("remoteCaptionText");
            if (el && caption !== undefined) el.innerText = `Remote: ${caption}`;
        } catch (_) {
            const el = document.getElementById("remoteCaptionText");
            if (el) el.innerText = `Remote: ${e.data}`;
        }
    };
}
socket.on("caption-update", (data) => {
    if (!data) return;
    if (data.from && username.value && data.from === username.value) return;
    const el = document.getElementById("remoteCaptionText");
    if (el) el.innerText = `${data.from || "Remote"}: ${data.caption || ""}`;
});
createUserBtn.addEventListener("click", async () => {
    const name = username.value.trim();
    if (!name) return;
    createUserBtn.disabled = true;
    createUserBtn.textContent = "Joining…";
    await startMyVideo();
    socket.emit("join-user", name);
    const sec = document.querySelector(".username-section");
    if (sec) sec.style.display = "none";
});
endCallBtn.addEventListener("click", () => {
    socket.emit("call-ended", caller);
    endCall();
});
socket.on("joined", (allusers) => {
    allusersHtml.innerHTML = "";
    for (const user in allusers) {
        const li = document.createElement("li");
        li.textContent = `${user}${user === username.value ? " (You)" : ""}`;
        if (user !== username.value) {
            const button = document.createElement("button");
            button.classList.add("call-btn");
            button.title = `Call ${user}`;
            button.addEventListener("click", () => startCall(user));
            const img = document.createElement("img");
            img.setAttribute("src", "/images/phone.png");
            img.setAttribute("alt", "Call");
            button.appendChild(img);
            li.appendChild(button);
        }
        allusersHtml.appendChild(li);
    }
});
socket.on("offer", async ({ from, to, offer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", { from, to, answer: pc.localDescription });
    caller = [from, to];
    endCallBtn.style.display = "flex";
});
socket.on("answer", async ({ from, to, answer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(answer);
    caller = [from, to];
    endCallBtn.style.display = "flex";
});
socket.on("icecandidate", async (candidate) => {
    const pc = PeerConnection.getInstance();
    try { await pc.addIceCandidate(new RTCIceCandidate(candidate)); }
    catch (e) { console.warn("ICE error:", e); }
});
socket.on("call-ended", () => endCall());
const startCall = async (user) => {
    const pc = PeerConnection.getInstance();
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit("offer", { from: username.value, to: user, offer: pc.localDescription });
    endCallBtn.style.display = "flex";
};
const endCall = () => {
    const pc = PeerConnection.getInstance();
    if (pc) pc.close();
    caller = [];
    endCallBtn.style.display = "none";
    remoteVideo.srcObject = null;
    PeerConnection.reset();
};
muteBtn.addEventListener("click", () => {
    if (!localStream) return;
    isMuted = !isMuted;
    localStream.getAudioTracks().forEach(t => { t.enabled = !isMuted; });
    muteBtn.textContent = isMuted ? "Unmute" : "Mute";
});
videoToggleBtn.addEventListener("click", () => {
    if (!localStream) return;
    isVideoOff = !isVideoOff;
    localStream.getVideoTracks().forEach(t => { t.enabled = !isVideoOff; });
    videoToggleBtn.textContent = isVideoOff ? "Video On" : "Video Off";
});
shareScreenBtn.addEventListener("click", () => {
    if (isScreenSharing) stopScreenSharing();
    else startScreenSharing();
});
stopScreenShareBtn.addEventListener("click", stopScreenSharing);
const startScreenSharing = async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenShareTrack = screenStream.getVideoTracks()[0];
        localVideo.srcObject = screenStream;
        const pc = PeerConnection.getInstance();
        const sender = pc.getSenders().find(s => s.track && s.track.kind === "video");
        if (sender) sender.replaceTrack(screenShareTrack);
        screenShareTrack.onended = stopScreenSharing;
        isScreenSharing = true;
        shareScreenBtn.textContent = "Stop Share";
    } catch (e) {
    }
};
const stopScreenSharing = () => {
    if (screenStream) { screenStream.getTracks().forEach(t => t.stop()); screenStream = null; }
    if (localStream) {
        localVideo.srcObject = localStream;
        const pc = PeerConnection.getInstance();
        if (pc && pc.connectionState !== "closed") {
            const sender = pc.getSenders().find(s => s.track === screenShareTrack);
            if (sender && localStream.getVideoTracks()[0]) {
                sender.replaceTrack(localStream.getVideoTracks()[0]);
            }
        }
    }
    screenShareTrack = null;
    isScreenSharing = false;
    shareScreenBtn.textContent = "Share Screen";
};
window.addEventListener("beforeunload", () => {
    if (username.value) socket.emit("leave-user", username.value);
    if (localStream) localStream.getTracks().forEach(t => t.stop());
});
```

### `public/js/screenmain.js`

```js
const createUserBtn = document.getElementById("create-user");
const username = document.getElementById("username");
const allusersHtml = document.getElementById("allusers");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const endCallBtn = document.getElementById("end-call-btn");
const muteBtn = document.getElementById("mute-audio-btn");
const videoToggleBtn = document.getElementById("toggle-video-btn");
const shareScreenBtn = document.getElementById("share-screen-btn");  
const stopScreenShareBtn = document.getElementById("stop-screen-share-btn"); 
let screenStream = null;  
let localStream = null;  
let peerConnection = null;  
let isScreenSharing = false;  
let caller = [];  

const socket = io();

const PeerConnection = (function() {
    let peerConnection;

    const createPeerConnection = () => {
        const config = {
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        };
        peerConnection = new RTCPeerConnection(config);

        if (localStream) {
            localStream.getTracks().forEach(track => {
                peerConnection.addTrack(track, localStream);
            });
        }

        peerConnection.ontrack = function(event) {
            remoteVideo.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = function(event) {
            if (event.candidate) {
                socket.emit("icecandidate", event.candidate);
            }
        };

        return peerConnection;
    };

    return {
        getInstance: () => {
            if (!peerConnection || peerConnection.connectionState === "closed") {
                peerConnection = createPeerConnection();
            }
            return peerConnection;
        },
        reset: () => {
            peerConnection = null;
        }
    };
})();

createUserBtn.addEventListener("click", () => {
    if (username.value !== "") {
        const usernameContainer = document.querySelector(".username-input");
        socket.emit("join-user", username.value);
        usernameContainer.style.display = 'none';
    }
});

endCallBtn.addEventListener("click", () => {
    socket.emit("call-ended", caller);
    endCall();
});

socket.on("joined", (allusers) => {
    allusersHtml.innerHTML = "";
    for (const user in allusers) {
        const li = document.createElement("li");
        li.textContent = `${user} ${user === username.value ? "(You)" : ""}`;

        if (user !== username.value) {
            const button = document.createElement("button");
            button.classList.add("call-btn");
            button.addEventListener("click", () => startCall(user));
            const img = document.createElement("img");
            img.setAttribute("src", "/images/phone.png");
            img.setAttribute("width", 20);
            button.appendChild(img);
            li.appendChild(button);
        }

        allusersHtml.appendChild(li);
    }
});

socket.on("offer", async ({ from, to, offer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", { from, to, answer: pc.localDescription });

    caller = [from, to];
    endCallBtn.style.display = "block"; 
});

socket.on("answer", async ({ from, to, answer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(answer);

    caller = [from, to];
    endCallBtn.style.display = "block"; 
});

socket.on("icecandidate", async (candidate) => {
    const pc = PeerConnection.getInstance();
    await pc.addIceCandidate(new RTCIceCandidate(candidate));
});

socket.on("call-ended", () => {
    endCall();
});

const startCall = async (user) => {
    const pc = PeerConnection.getInstance();
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit("offer", { from: username.value, to: user, offer: pc.localDescription });

    endCallBtn.style.display = "block"; 
};

const endCall = () => {
    const pc = PeerConnection.getInstance();
    if (pc) {
        pc.close();
    }

    caller = [];
    endCallBtn.style.display = "none"; 
    PeerConnection.reset();
};

async function startMyVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
    }
}

muteBtn.addEventListener("click", () => {
    if (localStream) {
        const audioTrack = localStream.getAudioTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
        muteBtn.textContent = audioTrack.enabled ? "Mute" : "Unmute";
    }
});

videoToggleBtn.addEventListener("click", () => {
    if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        videoTrack.enabled = !videoTrack.enabled;
        videoToggleBtn.textContent = videoTrack.enabled ? "Video Off" : "Video On";
    }
});

startMyVideo();

const convertToBase64 = (canvas) => {
    if (canvas && canvas.toDataURL) {
        return canvas.toDataURL('image/jpeg');
    }
    return null;
};

const processVideoFrame = () => {
    if (localVideo.videoWidth === 0 || localVideo.videoHeight === 0) {
        return;  
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = localVideo.videoWidth;
    canvas.height = localVideo.videoHeight;

    ctx.drawImage(localVideo, 0, 0, canvas.width, canvas.height);

    const base64Image = convertToBase64(canvas);

    if (base64Image) {
        console.log("Sending base64 image to server:", base64Image); 
        detectHandGestures(base64Image);  
    } else {
    }
};

const detectHandGestures = async (image) => {
    const formData = new FormData();

    const base64Image = convertToBase64(image);
    formData.append("frame", base64Image); 

    console.log("Sending base64 image to server:", base64Image);  

    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        const predictedGesture = data.prediction || 'No Gesture';
        displayGesture(predictedGesture);
    } else {
    }
};

const displayGesture = (gesture) => {
    const ctx = localVideo.getContext('2d');  
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(gesture, 10, 50);  
};

setInterval(processVideoFrame, 100); 



const startScreenSharing = async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        localVideo.srcObject = screenStream;

        const pc = PeerConnection.getInstance();

        localStream.getTracks().forEach(track => {
            if (track.kind === "video") {
                const sender = pc.getSenders().find(s => s.track.kind === "video");
                if (sender) {
                    sender.replaceTrack(screenStream.getVideoTracks()[0]);
                }
            }
        });

        screenShareTrack = screenStream.getVideoTracks()[0];  
        screenStream.getTracks().forEach(track => {
            pc.addTrack(track, screenStream);
        });

        screenStream.getTracks().forEach(track => {
            track.onended = () => {
                stopScreenSharing();  
            };
        });

        isScreenSharing = true;
    } catch (error) {
    }
};

const stopScreenSharing = () => {
    if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop());
    }

    localVideo.srcObject = localStream;

    const pc = PeerConnection.getInstance();

    const senders = pc.getSenders();
    senders.forEach(sender => {
        if (sender.track === screenShareTrack) {
            sender.replaceTrack(localStream.getVideoTracks()[0]);  
        }
    });

    localStream.getTracks().forEach(track => {
        if (track.kind === "video" && track !== screenShareTrack) {
            pc.addTrack(track, localStream);
        }
    });

    isScreenSharing = false;
};

shareScreenBtn.addEventListener("click", () => {
    if (isScreenSharing) {
        stopScreenSharing();  
    } else {
        startScreenSharing();  
    }
});

stopScreenShareBtn.addEventListener("click", () => {
    stopScreenSharing();  
});

async function startMyVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
    }
}
```

### `public/js/socket.io.js`

> [skipped — file exceeds 100kb limit]

### `server/app.py`

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import numpy as np
import cv2
import mediapipe as mp
import pickle
import os
app = Flask(__name__)
CORS(app)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, '..', 'models', 'model.pkl')
try:
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
except Exception as e:
    model = None
mp_hands = mp.solutions.hands
hands_detector = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=2,
    min_detection_confidence=0.5
)
@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    try:
        if 'frame' not in request.form:
            return jsonify({'error': 'No frame in request'}), 400
        image_data = request.form['frame']
        if not image_data:
            return jsonify({'error': 'Received empty image data'}), 400
        if ',' in image_data:
            image_data = image_data.split(',', 1)[1]
        image_bytes = base64.b64decode(image_data)
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return jsonify({'error': 'Failed to decode image'}), 400
        max_dim = 640
        h, w = img.shape[:2]
        if max(h, w) > max_dim:
            scale = max_dim / max(h, w)
            img = cv2.resize(img, (int(w * scale), int(h * scale)))
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        results = hands_detector.process(img_rgb)
        if not results.multi_hand_landmarks:
            return jsonify({'prediction': ''})
        data = []
        for hand_landmarks in results.multi_hand_landmarks:
            for point in mp_hands.HandLandmark:
                landmark = hand_landmarks.landmark[point]
                data.extend([landmark.x, landmark.y, landmark.z])
        if len(data) != model.n_features_in_:
            return jsonify({'error': 'Incorrect input size for model'})
        prediction = model.predict([data])[0]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
if __name__ == '__main__':
    app.run(debug=False, threaded=False)
```

### `server.js`

```js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app = express();
const server = createServer(app);
const io = new Server(server);
const allusers = {};
const socketToUser = {};
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.get("/",      (req, res) => res.sendFile(join(__dirname, "app/home.html")));
app.get("/page1", (req, res) => res.sendFile(join(__dirname, "app/index.html")));
app.get("/about", (req, res) => res.sendFile(join(__dirname, "app/about.html")));
app.get("/page2", (req, res) => res.sendFile(join(__dirname, "app/videoUpload.html")));
app.get("/page3", (req, res) => res.sendFile(join(__dirname, "app/page3.html")));
io.on("connection", (socket) => {
    socket.on("join-user", (username) => {
        if (allusers[username]) {
            const oldId = allusers[username].id;
            delete socketToUser[oldId];
        }
        allusers[username] = { username, id: socket.id };
        socketToUser[socket.id] = username;
        io.emit("joined", allusers);
    });
    socket.on("leave-user", (username) => {
        removeUser(username, socket.id);
        io.emit("joined", allusers);
    });
    socket.on("offer", ({ from, to, offer }) => {
        if (allusers[to]) {
            io.to(allusers[to].id).emit("offer", { from, to, offer });
        }
    });
    socket.on("answer", ({ from, to, answer }) => {
        if (allusers[from]) {
            io.to(allusers[from].id).emit("answer", { from, to, answer });
        }
    });
    socket.on("end-call", ({ from, to }) => {
        if (allusers[to]) {
            io.to(allusers[to].id).emit("end-call", { from, to });
        }
    });
    socket.on("call-ended", (caller) => {
        const [from, to] = caller;
        if (allusers[from]) io.to(allusers[from].id).emit("call-ended", caller);
        if (allusers[to])   io.to(allusers[to].id).emit("call-ended", caller);
    });
    socket.on("icecandidate", (candidate) => {
        socket.broadcast.emit("icecandidate", candidate);
    });
    socket.on("caption-update", (data) => {
        socket.broadcast.emit("caption-update", data);
    });
    socket.on("caption-source-change", (data) => {
        socket.broadcast.emit("caption-source-change", data);
    });
    socket.on("disconnect", () => {
        const username = socketToUser[socket.id];
        if (username) {
            removeUser(username, socket.id);
            io.emit("joined", allusers);   
        }
    });
});
function removeUser(username, socketId) {
    if (allusers[username] && allusers[username].id === socketId) {
        delete allusers[username];
    }
    delete socketToUser[socketId];
}
server.listen(9000, () => {
});
```

---

*End of context. You now have full visibility into this project.*
