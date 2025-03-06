<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
</script>

<svelte:head>
  <title>Knock Out MDE - {$_('nav.custom')}</title>
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">Custom Designs</h1>
    <p class="text-xl text-gray-300 mb-8">Elevate your presence in the ring with bespoke boxing apparel designed exclusively for you.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center text-zinc-900">Our Custom Design Process</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-2xl font-semibold mb-4 text-red-600">Personal Consultation</h3>
        <p class="text-gray-700 mb-6">
          We begin with an in-depth consultation to understand your unique style, preferences, and performance needs. 
          Whether you're looking for intimidating fight-night gear or standout training apparel, we'll capture your vision.
        </p>
        
        <h3 class="text-2xl font-semibold mb-4 text-red-600">Design Concept</h3>
        <p class="text-gray-700">
          Our designers will create detailed sketches and digital mockups of your custom design, incorporating your ideas,
          colors, and any special elements that represent your personal brand in the ring.
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-semibold mb-4 text-red-600">Craftsmanship</h3>
        <p class="text-gray-700 mb-6">
          Once the design is approved, our skilled artisans in Medellín handcraft your apparel using premium materials 
          and techniques that ensure both stunning aesthetics and functional performance.
        </p>
        
        <h3 class="text-2xl font-semibold mb-4 text-red-600">Delivery & Fitting</h3>
        <p class="text-gray-700">
          We provide your finished custom apparel with a personal fitting session to ensure everything is perfect. 
          We stand behind our craftsmanship and will make any necessary adjustments to guarantee your satisfaction.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-zinc-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-10 text-zinc-900">Request a Custom Design</h2>
    <p class="text-lg text-gray-600 mb-12">
      Ready to create your unique boxing apparel? Contact us to schedule a consultation or request more information.
    </p>
    
    <a href={path('/contact/')} class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
      Start Your Custom Design
    </a>
  </div>
</section>