<template>
  <nav>
    <ul class="navbar">
      <li class="navbar__item">
        <a href="/"
          ><svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 150 800 800" width="48">
            <path
              d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"
            />
          </svg>
          Home</a
        >
      </li>
      <li class="navbar__item">
        <a href="/pages/listing.html">
          <svg version="1.1" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" width="28">
            <path
              d="m179.3 0.503c-102.75 10.779-178.89 95.69-178.89 199.5 0 179.68 217.66 268.36 342.98 139.73 106.35-109.15 56.371-292.78-90.649-333.08-19.784-5.422-53.5-8.248-73.446-6.155m48.047 18.616c78.131 12.148 140.07 73.256 153.11 151.05 1.147 6.847 1.711 6.169-6.314 7.583-24.585 4.331-99.88 12.627-101.09 11.138-0.097-0.119-0.801-2.151-1.564-4.514-21.838-67.681-121.12-67.681-142.96 0-0.763 2.363-1.471 4.399-1.573 4.523-0.803 0.978-71.11-6.071-81.151-8.136-2.878-0.591-2.621-4.31 1.371-19.884 17.142-66.868 76.12-115.16 144.63-118.42 13.244-0.631 16.797-2.468 16.797-8.683 0-8.808-7.792-10.668-31.796-7.59-75.053 9.626-136.56 68.47-149.42 142.95l-1.351 7.823-3.25-0.067c-4.312-0.09-4.33-0.127-3.226-6.718 16.436-98.093 110.17-166.23 207.8-151.05m-14.063 132.93c35.554 7.889 54.884 49.435 38.293 82.302-21.213 42.023-81.935 42.023-103.15 0-21.952-43.487 17.002-92.92 64.855-82.302m-23.723 15.595c-25.692 6.218-38.774 34.932-27.047 59.367 14.757 30.752 60.221 30.752 74.978 0 15.663-32.638-12.786-67.874-47.931-59.367m20.181 18.199c8.459 3.742 14.48 12.87 14.48 21.953 0 23.006-27.063 33.513-42.395 16.459-17.147-19.071 4.451-48.791 27.915-38.412m-150.25 14.484c15.4 1.911 42.273 4.501 57.896 5.58l7.617 0.527v3.82 3.82l-4.102-0.403c-2.255-0.222-10.781-0.938-18.945-1.592-24.408-1.956-48.031-4.818-72.07-8.732l-12.695-2.066v-3.628-3.628l13.197 2.164c7.259 1.19 20.354 3.052 29.102 4.138m323.33-2.791v3.788l-10.352 1.695c-25.016 4.096-54.069 7.595-78.32 9.434-6.016 0.456-12.784 1.029-15.039 1.274l-4.102 0.446v-3.963c0-3.659 0.143-3.962 1.871-3.962 15.916 0 99.923-9.862 105.75-12.414 0.108-0.047 0.196 1.619 0.196 3.702m-350.61 23.931c23.496 3.814 62.786 8.112 86.683 9.481l9.118 0.522 2.489 5.944c25.68 61.302 114.18 61.096 139.2-0.325l2.38-5.841h3.859c8.868 0 63.452-5.314 77.256-7.522l2.999-0.479-0.453 3.024c-10.795 71.93-79.515 131.54-151.64 131.54-10.617 0-15.472 5.614-11.5 13.296 2.236 4.324 11.71 5.14 30.843 2.657 75.853-9.841 137.58-69.749 149.64-145.24 1.464-9.16 0.819-8.097 5.276-8.707l3.617-0.496-0.42 3.031c-8.586 61.982-44.718 113.17-99.404 140.82-112.56 56.92-246.28-14.444-263.67-140.72-0.487-3.541-1.517-3.467 13.731-0.992"
              fill-rule="evenodd"
            />
          </svg>
          Pokémons</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar-component'
}
</script>

<style scoped>
nav {
  background-color: var(--red-default);
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  z-index: 999;
}

nav .navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

nav .navbar__item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  fill: #fbdf33;
  color: #fbdf33;
}

nav .navbar__item:last-child a {
  align-items: center;
}

/* ------------------- DESKTOP --------------------- */
@media (min-width: 960px) {
  nav {
    width: 600px;
    padding: 20px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    border-radius: 40px;
    -webkit-box-shadow: 2px 6px 10px -1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 6px 10px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 6px 10px -1px rgba(0, 0, 0, 0.4);
  }
}
</style>
