<script lang="ts">
  import { t } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
  import { onMount } from 'svelte';
  
  // State for animations
  let isVisible = false;
  
  onMount(() => {
    // Trigger animations after component mounts
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>{pageTitle('home')}</title>
  <meta name="description" content={$t('app.description')} />
</svelte:head>

<!-- Hero Section with Gradient Background -->
<section class="relative py-24 md:py-32 text-white overflow-hidden">
  <!-- Gradient Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-knockout-dark via-zinc-800 to-knockout-dark"></div>
  
  <!-- Radial Overlay -->
  <div class="absolute inset-0 bg-gradient-radial from-red-500/10 to-transparent"></div>
  
  <!-- Content -->
  <div class="max-w-5xl mx-auto text-center px-4 relative z-10">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-700 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <span class="inline-block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">KNOCK OUT</span> 
      <span class="inline-block bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">MDE</span>
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto transform transition-all duration-700 delay-100 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      {$t('home.description')}
    </p>
    
    <div class="flex flex-col sm:flex-row justify-center gap-4 transform transition-all duration-700 delay-200 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <a href={path('/about/')} class="relative overflow-hidden group bg-gradient-to-br from-red-600 to-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-red-600/20">
        <span class="relative z-10">{$t('buttons.learnMore')}</span>
        <span class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
      <a href={path('/collections/')} class="relative overflow-hidden group bg-gradient-to-br from-zinc-700 to-zinc-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-zinc-600/20">
        <span class="relative z-10">{$t('buttons.getStarted')}</span>
        <span class="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
    </div>
  </div>
  
  <!-- Decorative Elements -->
  <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-red-500/20 to-red-500/5 rounded-full blur-3xl"></div>
  <div class="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-red-500/5 rounded-full blur-3xl"></div>
</section>

<!-- Collections Section -->
<section class="py-16 md:py-24 bg-gradient-to-b from-knockout-light to-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-knockout-dark">
      <span class="relative inline-block">
        {$t('collections.featured')}
        <span class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400"></span>
      </span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Collection Card 1 -->
      <div class="bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
        <div class="relative h-64 overflow-hidden">
          <img src="D24FE6AF-B7B0-4E77-8DD9-C5E27B31F260.png" alt="Championship Collection" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 relative">
          <h3 class="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">{$t('collections.championship.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.championship.description')}</p>
          <a href={path('/collections/championship/')} class="inline-block font-medium relative">
            <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">{$t('collections.championship.viewCollection')} →</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      <!-- Collection Card 2 -->
      <div class="bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
        <div class="relative h-64 overflow-hidden">
          <img src="FEC4D3D6-8EAA-4D1D-BAFD-76B6B882D726.png" alt="Urban Collection" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 relative">
          <h3 class="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">{$t('collections.urban.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.urban.description')}</p>
          <a href={path('/collections/urban/')} class="inline-block font-medium relative">
            <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">{$t('collections.urban.viewCollection')} →</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      <!-- Collection Card 3 -->
      <div class="bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
        <div class="relative h-64 overflow-hidden">
          <img src="1B39A125-C80A-4A86-A134-8EA589D6212E.png" alt="Custom Collection" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 relative">
          <h3 class="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">{$t('collections.custom.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.custom.description')}</p>
          <a href={path('/collections/custom/')} class="inline-block font-medium relative">
            <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">{$t('collections.custom.viewCollection')} →</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Champions Section -->
<section class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Trusted by Champions</h2>
    
    <div class="flex flex-wrap justify-center gap-8 md:gap-16">
      <div class="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg flex items-center justify-center text-gray-400 transform transition-transform hover:scale-110 duration-300"></div>
      <div class="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg flex items-center justify-center text-gray-400 transform transition-transform hover:scale-110 duration-300"></div>
      <div class="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg flex items-center justify-center text-gray-400 transform transition-transform hover:scale-110 duration-300"></div>
      <div class="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg flex items-center justify-center text-gray-400 transform transition-transform hover:scale-110 duration-300"></div>
    </div>
  </div>
</section>
