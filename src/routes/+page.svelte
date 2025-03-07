<script lang="ts">
  import { t } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
</script>

<svelte:head>
  <title>{pageTitle('home')}</title>
  <meta name="description" content={$t('app.description')} />
</svelte:head>

<section class="relative py-16 md:py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
  <div class="max-w-5xl mx-auto text-center px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      <span class="text-red-500">KNOCK OUT</span> 
      <span class="text-white">MDE</span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-300 mb-10">
      {$t('home.description')}
    </p>
    
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href={path('/about/')} class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
        {$t('buttons.learnMore')}
      </a>
      <a href={path('/collections/')} class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
        {$t('buttons.getStarted')}
      </a>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12 text-zinc-900">{$t('collections.featured')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Collection Card 1 -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300"></div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$t('collections.championship.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.championship.description')}</p>
          <a href={path('/collections/championship/')} class="text-red-600 hover:text-red-800 font-medium">{$t('collections.championship.viewCollection')} →</a>
        </div>
      </div>
      
      <!-- Collection Card 2 -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300"></div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$t('collections.urban.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.urban.description')}</p>
          <a href={path('/collections/urban/')} class="text-red-600 hover:text-red-800 font-medium">{$t('collections.urban.viewCollection')} →</a>
        </div>
      </div>
      
      <!-- Collection Card 3 -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300"></div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$t('collections.custom.title')}</h3>
          <p class="text-gray-600 mb-4">{$t('collections.custom.description')}</p>
          <a href={path('/collections/custom/')} class="text-red-600 hover:text-red-800 font-medium">{$t('collections.custom.viewCollection')} →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-100">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-10 text-zinc-900">Trusted by Champions</h2>
    
    <div class="flex flex-wrap justify-center gap-8 md:gap-16">
      <div class="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div class="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div class="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div class="w-24 h-24 bg-gray-300 rounded-full"></div>
    </div>
  </div>
</section>
