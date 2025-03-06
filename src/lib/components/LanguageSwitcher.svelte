<script lang="ts">
  import { locale } from '$lib/i18n';

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' },
    { code: 'fr', name: 'FR' }
  ];

  function changeLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="flex space-x-2">
  {#each languages as { code, name }}
    <button
      class="px-2 py-1 text-sm rounded {$locale === code ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}"
      on:click={() => changeLocale(code)}
    >
      {name}
    </button>
  {/each}
</div>