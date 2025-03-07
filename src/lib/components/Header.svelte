<script lang="ts">
  import { t } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import { onMount, effect } from 'svelte';
  import { goto } from '$app/navigation';

  // State for mobile menu and header scroll
  let isMobileMenuOpen = false;
  let scrolled = false;
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
  
  // Handle navigation item click
  function handleNavClick(event, href) {
    // Prevent default navigation
    event.preventDefault();
    // Stop propagation to prevent conflicts
    event.stopPropagation();
    // Close the menu first
    closeMobileMenu();
    
    // Try to use SvelteKit navigation, fallback to regular navigation
    try {
      // Wait a tiny bit to ensure the menu is closed visually first
      setTimeout(() => {
        // If goto is available (SvelteKit), use it
        if (typeof goto === 'function') {
          goto(href);
        } else {
          // Fallback to regular navigation
          window.location.href = href;
        }
      }, 50);
    } catch (e) {
      // If any error, just use regular navigation
      window.location.href = href;
    }
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
    
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    
    // Use capture phase to ensure our handler runs first
    document.addEventListener('click', handleClickOutside, true);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header class={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-knockout-dark via-zinc-800 to-knockout-dark shadow-lg py-2' : 'bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm py-4'}`}>
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href={path('/')} class="font-bold">
        <span class="text-2xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">KNOCK OUT</span>
        <span class="text-lg ml-1 text-white">MDE</span>
      </a>
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-6">
      <a href={path('/')} class="text-white hover:text-red-400 transition-colors relative group">
        {$t('nav.home')}
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href={path('/about/')} class="text-white hover:text-red-400 transition-colors relative group">
        {$t('nav.about')}
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href={path('/collections/')} class="text-white hover:text-red-400 transition-colors relative group">
        {$t('nav.collections')}
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href={path('/custom/')} class="text-white hover:text-red-400 transition-colors relative group">
        {$t('nav.custom')}
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href={path('/contact/')} class="text-white hover:text-red-400 transition-colors relative group">
        {$t('nav.contact')}
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
      </a>
    </nav>
    
    <!-- Mobile Hamburger Button -->
    <div class="flex items-center space-x-4">
      <button 
        id="hamburger-button"
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        on:click|stopPropagation={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span class="bg-white block w-5 h-0.5 mb-1.5 transition-transform duration-300 ease-in-out {isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}"></span>
        <span class="bg-white block w-5 h-0.5 mb-1.5 transition-opacity duration-300 ease-in-out {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="bg-white block w-5 h-0.5 transition-transform duration-300 ease-in-out {isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}"></span>
      </button>
      
      <LanguageSwitcher />
    </div>
  </div>
  
  <!-- Mobile Menu Dropdown -->
  {#if isMobileMenuOpen}
    <div 
      id="mobile-menu"
      class="md:hidden absolute top-16 right-0 left-0 z-50 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-lg"
      transition:slide={{ duration: 300 }}
    >
      <div class="p-4 flex flex-col space-y-3">
        <a 
          href={path('/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click={(e) => handleNavClick(e, path('/'))}
        >
          {$t('nav.home')}
        </a>
        <a 
          href={path('/about/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click={(e) => handleNavClick(e, path('/about/'))}
        >
          {$t('nav.about')}
        </a>
        <a 
          href={path('/collections/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click={(e) => handleNavClick(e, path('/collections/'))}
        >
          {$t('nav.collections')}
        </a>
        <a 
          href={path('/custom/')} 
          class="text-white hover:text-red-400 transition-colors py-2 border-b border-zinc-700"
          on:click={(e) => handleNavClick(e, path('/custom/'))}
        >
          {$t('nav.custom')}
        </a>
        <a 
          href={path('/contact/')} 
          class="text-white hover:text-red-400 transition-colors py-2"
          on:click={(e) => handleNavClick(e, path('/contact/'))}
        >
          {$t('nav.contact')}
        </a>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer to prevent content from being hidden behind fixed header -->
<div class="h-16 md:h-20"></div>

<style>
  /* Transition animations */
  :global(.slide-enter), :global(.slide-leave-to) {
    transform: translateY(-100%);
    opacity: 0;
  }
  :global(.slide-enter-to), :global(.slide-leave) {
    transform: translateY(0);
    opacity: 1;
  }
  :global(.slide-enter-active), :global(.slide-leave-active) {
    transition: all 0.3s ease-in-out;
  }
</style>
