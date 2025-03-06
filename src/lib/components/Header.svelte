<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<header class="bg-zinc-900 text-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href={path('/')} class="text-xl font-bold text-red-500">
        <span class="text-2xl">KNOCK OUT</span>
        <span class="text-lg ml-1 text-white">MDE</span>
      </a>
    </div>
    
    <nav class="hidden md:flex space-x-6">
      <a href={path('/')} class="text-white hover:text-red-400 transition-colors">{$_('nav.home')}</a>
      <a href={path('/about/')} class="text-white hover:text-red-400 transition-colors">{$_('nav.about')}</a>
      <a href={path('/collections/')} class="text-white hover:text-red-400 transition-colors">{$_('nav.collections')}</a>
      <a href={path('/custom/')} class="text-white hover:text-red-400 transition-colors">{$_('nav.custom')}</a>
      <a href={path('/contact/')} class="text-white hover:text-red-400 transition-colors">{$_('nav.contact')}</a>
    </nav>
    
    <LanguageSwitcher />
  </div>
</header>