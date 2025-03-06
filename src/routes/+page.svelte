<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('app.title')} - {$_('nav.home')}</title>
  <meta name="description" content={$_('app.description')} />
</svelte:head>

<section class="py-12">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4 text-blue-600">{$_('home.welcome')}</h1>
    <p class="text-xl text-gray-600 mb-8">{$_('home.description')}</p>
    
    <div class="flex justify-center space-x-4">
      <a href="/about" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
        {$_('buttons.learnMore')}
      </a>
      <a href="https://github.com/knockoutmde/knockoutmde" target="_blank" rel="noreferrer" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition duration-300">
        {$_('buttons.getStarted')}
      </a>
    </div>
  </div>
</section>