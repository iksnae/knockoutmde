<script lang="ts">
  import { _ } from 'svelte-i18n';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="text-xl font-bold text-blue-600">KnockoutMDE</a>
    </div>
    
    <nav class="hidden md:flex space-x-4">
      <a href="/" class="text-gray-700 hover:text-blue-600">{$_('nav.home')}</a>
      <a href="/about" class="text-gray-700 hover:text-blue-600">{$_('nav.about')}</a>
    </nav>
    
    <LanguageSwitcher />
  </div>
</header>