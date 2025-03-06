<script lang="ts">
  import { t } from '$lib/i18n';
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
      <a href="/" class="text-white hover:text-red-400 transition-colors">{$t ? $t('nav.home') : 'Home'}</a>
      <a href="/about" class="text-white hover:text-red-400 transition-colors">{$t ? $t('nav.about') : 'About'}</a>
      <a href="/collections" class="text-white hover:text-red-400 transition-colors">{$t ? $t('nav.collections') : 'Collections'}</a>
      <a href="/custom" class="text-white hover:text-red-400 transition-colors">{$t ? $t('nav.custom') : 'Custom Designs'}</a>
      <a href="/contact" class="text-white hover:text-red-400 transition-colors">{$t ? $t('nav.contact') : 'Contact'}</a>
    </nav>
    
    <LanguageSwitcher />
  </div>
</header>