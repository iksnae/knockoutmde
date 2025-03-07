<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, isLocaleLoaded, startClient, defaultLocale, t } from '$lib/i18n';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Initialize i18n on client-side
  onMount(() => {
    // Initialize i18n client-side features
    startClient();
  });
</script>

{#if $isLocaleLoaded}
  <div class="flex flex-col min-h-screen">
    <Header />
    
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <Footer />
  </div>
{:else}
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-knockout-dark via-zinc-800 to-knockout-dark text-white">
    <div class="text-xl animate-pulse">{$t('app.loading')}</div>
  </div>
{/if}
