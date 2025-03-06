<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
</script>

<svelte:head>
  <title>{pageTitle('collections')}</title>
  <meta name="description" content={$_('collections.description')} />
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">{$_('collections.title')}</h1>
    <p class="text-xl text-gray-300 mb-8">{$_('collections.description')}</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12 text-zinc-900">{$_('collections.featured')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Championship Collection -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$_('collections.championship.title')}</h3>
          <p class="text-gray-600 mb-4">{$_('collections.championship.description')}</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">{$_('collections.championship.priceRange')}</span>
            <a href={path('/collections/championship/')} class="text-red-600 hover:text-red-800 font-medium">
              {$_('collections.championship.viewCollection')} →
            </a>
          </div>
        </div>
      </div>
      
      <!-- Urban Fighter Collection -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$_('collections.urban.title')}</h3>
          <p class="text-gray-600 mb-4">{$_('collections.urban.description')}</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">{$_('collections.urban.priceRange')}</span>
            <a href={path('/collections/urban/')} class="text-red-600 hover:text-red-800 font-medium">
              {$_('collections.urban.viewCollection')} →
            </a>
          </div>
        </div>
      </div>
      
      <!-- Custom Showcase -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{$_('collections.custom.title')}</h3>
          <p class="text-gray-600 mb-4">{$_('collections.custom.description')}</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">{$_('collections.custom.priceRange')}</span>
            <a href={path('/collections/custom/')} class="text-red-600 hover:text-red-800 font-medium">
              {$_('collections.custom.viewCollection')} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-100">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-10 text-zinc-900">{$_('collections.accessories')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Accessory Item 1 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">{$_('collections.accessories.gloves.title')}</h3>
          <p class="text-gray-600 text-sm mb-2">{$_('collections.accessories.gloves.description')}</p>
          <span class="text-red-600 font-semibold">{$_('collections.accessories.gloves.price')}</span>
        </div>
      </div>
      
      <!-- Accessory Item 2 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">{$_('collections.accessories.wraps.title')}</h3>
          <p class="text-gray-600 text-sm mb-2">{$_('collections.accessories.wraps.description')}</p>
          <span class="text-red-600 font-semibold">{$_('collections.accessories.wraps.price')}</span>
        </div>
      </div>
      
      <!-- Accessory Item 3 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">{$_('collections.accessories.shorts.title')}</h3>
          <p class="text-gray-600 text-sm mb-2">{$_('collections.accessories.shorts.description')}</p>
          <span class="text-red-600 font-semibold">{$_('collections.accessories.shorts.price')}</span>
        </div>
      </div>
      
      <!-- Accessory Item 4 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">{$_('collections.imagePlaceholder')}</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">{$_('collections.accessories.robes.title')}</h3>
          <p class="text-gray-600 text-sm mb-2">{$_('collections.accessories.robes.description')}</p>
          <span class="text-red-600 font-semibold">{$_('collections.accessories.robes.price')}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-red-600 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">{$_('collections.customTitle')}</h2>
    <p class="text-xl mb-8">{$_('collections.customDescription')}</p>
    <a href={path('/custom/')} class="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
      {$_('collections.customCta')}
    </a>
  </div>
</section>
