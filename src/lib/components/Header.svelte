<script lang="ts">
  import { _ } from 'svelte-i18n';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<header class="bg-zinc-900 text-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="text-xl font-bold text-red-500">
        <span class="text-2xl">KNOCK OUT</span>
        <span class="text-lg ml-1 text-white">MDE</span>
      </a>
    </div>
    
    <nav class="hidden md:flex space-x-6">
      <a href="/" class="text-white hover:text-red-400 transition-colors">{$_('nav.home')}</a>
      <a href="/about" class="text-white hover:text-red-400 transition-colors">{$_('nav.about')}</a>
      <a href="/collections" class="text-white hover:text-red-400 transition-colors">{$_('nav.collections')}</a>
      <a href="/custom" class="text-white hover:text-red-400 transition-colors">{$_('nav.custom')}</a>
      <a href="/contact" class="text-white hover:text-red-400 transition-colors">{$_('nav.contact')}</a>
    </nav>
    
    <LanguageSwitcher />
  </div>
</header>