<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, startClient } from '$lib/i18n';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Initialize i18n on client-side
  onMount(() => {
    startClient();
    
    // If the browser's preferred language is Spanish, set it
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      locale.set('es');
    } else {
      // Default to English for all other languages
      locale.set('en');
    }
  });
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="flex-grow container mx-auto px-4 py-8">
    <slot />
  </main>
  
  <Footer />
</div>