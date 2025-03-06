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
      class="px-2 py-1 text-sm rounded {$locale === code ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}"
      on:click={() => changeLocale(code)}
      aria-label="Switch language to {name}"
    >
      {name}
    </button>
  {/each}
</div>