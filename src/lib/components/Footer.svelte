<script lang="ts">
  import { t } from '$lib/i18n';
  import { path } from '$lib/utils/path';
</script>

<footer class="relative bg-gradient-to-b from-zinc-800 to-knockout-dark text-white mt-auto">
  <!-- Radial Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-radial from-red-500/5 to-transparent pointer-events-none"></div>
  
  <div class="container mx-auto px-4 py-12 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">
          <span class="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">KNOCK OUT</span>
          <span class="text-white">MDE</span>
        </h3>
        <p class="text-gray-300">
          {$t('footer.description')}
        </p>
        
        <!-- Social Icons -->
        <div class="flex space-x-4 mt-6">
          <a href="#" class="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center transition-transform hover:scale-110 duration-300 hover:shadow-red-500/10 hover:shadow-lg">
            <span class="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center transition-transform hover:scale-110 duration-300 hover:shadow-red-500/10 hover:shadow-lg">
            <span class="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center transition-transform hover:scale-110 duration-300 hover:shadow-red-500/10 hover:shadow-lg">
            <span class="sr-only">WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">{$t('footer.connect')}</h3>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-center gap-2 hover:text-red-400 transition-colors">
            <div class="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
            {$t('footer.instagram')}
          </li>
          <li class="flex items-center gap-2 hover:text-red-400 transition-colors">
            <div class="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
            {$t('footer.email')}
          </li>
          <li class="flex items-center gap-2 hover:text-red-400 transition-colors">
            <div class="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
            {$t('footer.whatsapp')}
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">{$t('footer.visitUs')}</h3>
        <div class="text-gray-300 space-y-2">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Calle 10 #30-50
          </p>
          <p class="ml-6">El Poblado, Medellín</p>
          <p class="ml-6">Colombia</p>
        </div>
      </div>
    </div>
    
    <div class="mt-10 pt-8 text-center text-gray-400 relative">
      <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
      <p>© {new Date().getFullYear()} Knock Out MDE. {$t('footer.allRights')}</p>
    </div>
  </div>
</footer>
