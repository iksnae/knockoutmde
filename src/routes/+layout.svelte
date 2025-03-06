<script lang="ts">
  import { onMount } from 'svelte';
  import { startClient } from '$lib/i18n';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  onMount(() => {
    startClient();
  });
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="flex-grow container mx-auto px-4 py-8">
    <slot />
  </main>
  
  <Footer />
</div>