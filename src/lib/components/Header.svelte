<script lang="ts">
  import { t } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import { onMount } from 'svelte';

  // State for mobile menu
  let isMobileMenuOpen = false;
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
  
  // Handle navigation item click
  function handleNavClick(event) {
    // Stop propagation to prevent conflicts
    event.stopPropagation();
    // Close the menu
    closeMobileMenu();
  }

  // Close mobile menu when clicking outside or resizing to desktop
  onMount(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerButton = document.getElementById('hamburger-button');
      
      if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          hamburgerButton && !hamburgerButton.contains(event.target)) {
        closeMobileMenu();
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is md breakpoint in Tailwind
        closeMobileMenu();
      }
    };
    
    // Use capture phase to ensure our handler runs first
    document.addEventListener('click', handleClickOutside, true);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<header class="bg-zinc-900 text-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href={path('/')} class="text-xl font-bold text-red-500">
        <span class="text-2xl">KNOCK OUT</span>
        <span class="text-lg ml-1 text-white">MDE</span>
      </a>
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-6">
      <a href={path('/')} class="text-white hover:text-red-400 transition-colors">{$t('nav.home')}</a>
      <a href={path('/about/')} class="text-white hover:text-red-400 transition-colors">{$t('nav.about')}</a>
      <a href={path('/collections/')} class="text-white hover:text-red-400 transition-colors">{$t('nav.collections')}</a>
      <a href={path('/custom/')} class="text-white hover:text-red-400 transition-colors">{$t('nav.custom')}</a>
      <a href={path('/contact/')} class="text-white hover:text-red-400 transition-colors">{$t('nav.contact')}</a>
    </nav>
    
    <!-- Mobile Hamburger Button -->
    <button 
      id="hamburger-button"
      class="md:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mr-2"
      on:click|stopPropagation={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      <span class="bg-white block w-5 h-0.5 mb-1.5 {isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}"></span>
      <span class="bg-white block w-5 h-0.5 mb-1.5 {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
      <span class="bg-white block w-5 h-0.5 {isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}"></span>
    </button>
    
    <LanguageSwitcher />
  </div>
  
  <!-- Mobile Menu Dropdown -->
  {#if isMobileMenuOpen}
    <div 
      id="mobile-menu"
      class="md:hidden absolute top-16 right-0 left-0 z-50 bg-zinc-800 shadow-lg"
    >
      <div class="p-4 flex flex-col space-y-3">
        <a 
          href={path('/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click|preventDefault|stopPropagation={handleNavClick}
        >
          {$t('nav.home')}
        </a>
        <a 
          href={path('/about/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click|preventDefault|stopPropagation={handleNavClick}
        >
          {$t('nav.about')}
        </a>
        <a 
          href={path('/collections/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click|preventDefault|stopPropagation={handleNavClick}
        >
          {$t('nav.collections')}
        </a>
        <a 
          href={path('/custom/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click|preventDefault|stopPropagation={handleNavClick}
        >
          {$t('nav.custom')}
        </a>
        <a 
          href={path('/contact/')} 
          class="text-white hover:text-red-400 transition-colors py-2"
          on:click|preventDefault|stopPropagation={handleNavClick}
        >
          {$t('nav.contact')}
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  /* Transition animations for menu toggle */
  span {
    transition: all 0.3s ease-in-out;
  }
</style>
