import { createApp } from 'vue'
import Listing from './pages/Listing.vue'
import Navbar from './components/Navbar.vue'

import './assets/main.css'

createApp(Listing).mount('#listing')
createApp(Navbar).mount('#navbar')