<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
</script>

<svelte:head>
  <title>{pageTitle('custom')}</title>
  <meta name="description" content={$_('custom.description')} />
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">{$_('custom.title')}</h1>
    <p class="text-xl text-gray-300 mb-8">{$_('custom.description')}</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center text-zinc-900">{$_('custom.process')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-2xl font-semibold mb-4 text-red-600">{$_('custom.consultation.title')}</h3>
        <p class="text-gray-700 mb-6">
          {$_('custom.consultation.description')}
        </p>
        
        <h3 class="text-2xl font-semibold mb-4 text-red-600">{$_('custom.design.title')}</h3>
        <p class="text-gray-700">
          {$_('custom.design.description')}
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-semibold mb-4 text-red-600">{$_('custom.crafting.title')}</h3>
        <p class="text-gray-700 mb-6">
          {$_('custom.crafting.description')}
        </p>
        
        <h3 class="text-2xl font-semibold mb-4 text-red-600">{$_('custom.delivery.title')}</h3>
        <p class="text-gray-700">
          {$_('custom.delivery.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-10 text-zinc-900">{$_('custom.title')}</h2>
    <p class="text-lg text-gray-600 mb-12">
      {$_('custom.description')}
    </p>
    
    <a href={path('/contact/')} class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
      {$_('custom.cta')}
    </a>
  </div>
</section>
