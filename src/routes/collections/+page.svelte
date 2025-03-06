<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('app.title')} - {$_('nav.collections')}</title>
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">Collections</h1>
    <p class="text-xl text-gray-300 mb-8">Explore our premium boxing apparel collections, showcasing the finest craftsmanship and design from Medellín, Colombia.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12 text-zinc-900">Featured Collections</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Championship Collection -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Championship Series</h3>
          <p class="text-gray-600 mb-4">Professional-grade apparel designed for champions. Featuring premium materials and bold designs for fighters who demand excellence.</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">$180 - $450</span>
            <a href="/collections/championship" class="text-red-600 hover:text-red-800 font-medium">View Collection →</a>
          </div>
        </div>
      </div>
      
      <!-- Urban Fighter Collection -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Urban Fighter</h3>
          <p class="text-gray-600 mb-4">Street-inspired designs with Colombian urban flair. Bold graphics and comfortable cuts make this collection perfect for training and streetwear.</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">$75 - $220</span>
            <a href="/collections/urban" class="text-red-600 hover:text-red-800 font-medium">View Collection →</a>
          </div>
        </div>
      </div>
      
      <!-- Custom Showcase -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div class="h-64 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Custom Showcase</h3>
          <p class="text-gray-600 mb-4">One-of-a-kind designs created for elite fighters. Get inspired by our previous custom creations for your own unique design.</p>
          <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">Custom Pricing</span>
            <a href="/collections/custom" class="text-red-600 hover:text-red-800 font-medium">View Collection →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-100">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-10 text-zinc-900">Accessories & Training Gear</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Accessory Item 1 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">Boxing Gloves</h3>
          <p class="text-gray-600 text-sm mb-2">Professional-grade gloves with custom designs</p>
          <span class="text-red-600 font-semibold">From $120</span>
        </div>
      </div>
      
      <!-- Accessory Item 2 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">Hand Wraps</h3>
          <p class="text-gray-600 text-sm mb-2">Premium cotton hand wraps with signature designs</p>
          <span class="text-red-600 font-semibold">From $25</span>
        </div>
      </div>
      
      <!-- Accessory Item 3 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">Training Shorts</h3>
          <p class="text-gray-600 text-sm mb-2">Lightweight, durable shorts for training sessions</p>
          <span class="text-red-600 font-semibold">From $60</span>
        </div>
      </div>
      
      <!-- Accessory Item 4 -->
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="h-48 bg-zinc-300 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-zinc-600">Image Coming Soon</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-1">Robes & Walkout Gear</h3>
          <p class="text-gray-600 text-sm mb-2">Make a statement before the fight even begins</p>
          <span class="text-red-600 font-semibold">From $150</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-red-600 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">Create Your Custom Design</h2>
    <p class="text-xl mb-8">Can't find exactly what you're looking for? Let us create something unique just for you.</p>
    <a href="/custom" class="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
      Custom Design Services
    </a>
  </div>
</section>