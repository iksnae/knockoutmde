<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('app.title')} - {$_('nav.about')}</title>
  <meta name="description" content={$_('about.description')} />
</svelte:head>

<section class="py-12">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-blue-600">{$_('about.title')}</h1>
    <p class="text-lg text-gray-700 mb-6">{$_('about.description')}</p>
    
    <div class="bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Tech Stack:</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>SvelteKit 2</li>
        <li>Svelte 5</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>svelte-i18n for localization</li>
      </ul>
    </div>
  </div>
</section>