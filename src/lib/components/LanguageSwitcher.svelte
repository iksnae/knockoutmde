<script lang="ts">
  import { locale } from '$lib/i18n';

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  function changeLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="flex space-x-2">
  {#each languages as { code, name }}
    <button
      class="px-2 py-1 text-sm rounded {$locale === code ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}"
      on:click={() => changeLocale(code)}
    >
      {name}
    </button>
  {/each}
</div>