<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, isLocaleLoaded } from '$lib/i18n';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Initialize browser-specific locale settings on client-side
  onMount(() => {
    // Set locale based on browser language if available
    if (typeof window !== 'undefined' && navigator) {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        locale.set('es');
      } else {
        // Default to English for all other languages
        locale.set('en');
      }
    }
    
    // Mark locale as loaded after browser-specific settings
    isLocaleLoaded.set(true);
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
  <div class="flex items-center justify-center min-h-screen">
    <!-- Simple loading indicator -->
    <div class="animate-pulse text-xl">Loading...</div>
  </div>
{/if}