<script lang="ts">
  import { locale } from '$lib/i18n';

  // Language options with Spanish first
  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' }
  ];

  /**
   * Change the application locale
   */
  function changeLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="flex space-x-2">
  {#each languages as { code, name }}
    <button
      class={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 shadow-sm ${
        $locale === code 
          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
          : 'bg-gradient-to-r from-zinc-800 to-zinc-700 text-gray-300 hover:from-zinc-700 hover:to-zinc-600'
      }`}
      on:click={() => changeLocale(code)}
      aria-label="Switch language to {name}"
    >
      {name}
    </button>
  {/each}
</div>