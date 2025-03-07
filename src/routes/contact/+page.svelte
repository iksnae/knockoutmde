<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
</script>

<svelte:head>
  <title>{pageTitle('contact')}</title>
  <meta name="description" content={$_('contact.description')} />
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">{$_('contact.title')}</h1>
    <p class="text-xl text-gray-300 mb-8">{$_('contact.description')}</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6 text-zinc-900">{$_('contact.title')}</h2>
        
        <div class="space-y-6 text-gray-700">
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">{$_('contact.visit')}</h3>
            <p>
              {$_('contact.address.line1')}<br>
              {$_('contact.address.line2')}<br>
              {$_('contact.address.line3')}
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">{$_('contact.connect')}</h3>
            <p>{$_('contact.email')}</p>
            <p>{$_('contact.phone')}</p>
            <p>{$_('contact.instagram')}</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">{$_('contact.hours.title')}</h3>
            <p>{$_('contact.hours.weekdays')}</p>
            <p>{$_('contact.hours.saturday')}</p>
            <p>{$_('contact.hours.sunday')}</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold mb-6 text-zinc-900">{$_('contact.title')}</h2>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{$_('contact.form.name')}</label>
            <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{$_('contact.form.email')}</label>
            <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">{$_('contact.form.subject')}</label>
            <select id="subject" name="subject" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              <option value="custom">{$_('buttons.customize')}</option>
              <option value="order">{$_('buttons.getStarted')}</option>
              <option value="appointment">{$_('buttons.contact')}</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{$_('contact.form.message')}</label>
            <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
          </div>
          
          <div>
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              {$_('contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-zinc-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold mb-6 text-zinc-900">{$_('contact.visit')}</h2>
    <p class="text-gray-700 mb-8">
      {$_('contact.description')}
    </p>
    
    <div class="bg-gray-300 h-80 w-full rounded-lg">
      <!-- Map placeholder - would be replaced with actual map in production -->
      <div class="flex items-center justify-center h-full">
        <p class="text-gray-600 font-medium">{$_('app.loading')}</p>
      </div>
    </div>
  </div>
</section>
