<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
  import { pageTitle, metaDescription } from '$lib/utils/metadata';
</script>

<svelte:head>
  <title>{pageTitle('about')}</title>
  <meta name="description" content={$_('about.description')} />
</svelte:head>

<section class="py-12 bg-zinc-100">
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8 text-zinc-900">
      {$_('about.title')}
    </h1>
    <p class="text-lg text-gray-700 mb-8">
      {$_('about.description')}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-red-600">
          {$_('about.craft')}
        </h2>
        <p class="text-gray-700">
          {$_('about.craftText')}
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-red-600">
          {$_('about.heritage')}
        </h2>
        <p class="text-gray-700">
          {$_('about.heritageText')}
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-10 text-center text-zinc-900">{$_('custom.process')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center">
        <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-red-100 text-red-600 rounded-full text-2xl font-bold">1</div>
        <h3 class="text-xl font-semibold mb-2">{$_('custom.consultation.title')}</h3>
        <p class="text-gray-600">{$_('custom.consultation.description')}</p>
      </div>
      
      <div class="text-center">
        <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-red-100 text-red-600 rounded-full text-2xl font-bold">2</div>
        <h3 class="text-xl font-semibold mb-2">{$_('custom.design.title')}</h3>
        <p class="text-gray-600">{$_('custom.design.description')}</p>
      </div>
      
      <div class="text-center">
        <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-red-100 text-red-600 rounded-full text-2xl font-bold">3</div>
        <h3 class="text-xl font-semibold mb-2">{$_('custom.crafting.title')}</h3>
        <p class="text-gray-600">{$_('custom.crafting.description')}</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-8">Meet the Team</h2>
    <p class="text-xl text-gray-300 mb-12">Our talented team combines years of experience in boxing apparel design with a passion for Colombian craftsmanship.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div class="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
        <h3 class="text-xl font-semibold">Carlos Mendez</h3>
        <p class="text-gray-400">Founder & Lead Designer</p>
      </div>
      
      <div>
        <div class="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
        <h3 class="text-xl font-semibold">Maria Sanchez</h3>
        <p class="text-gray-400">Head of Production</p>
      </div>
      
      <div>
        <div class="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
        <h3 class="text-xl font-semibold">Juan Ortiz</h3>
        <p class="text-gray-400">Master Tailor</p>
      </div>
      
      <div>
        <div class="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
        <h3 class="text-xl font-semibold">Lucia Restrepo</h3>
        <p class="text-gray-400">Embroidery Specialist</p>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-red-600 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">{$_('collections.customTitle')}</h2>
    <p class="text-xl mb-8">{$_('collections.customDescription')}</p>
    <a href={path('/contact/')} class="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
      {$_('buttons.contact')}
    </a>
  </div>
</section>
