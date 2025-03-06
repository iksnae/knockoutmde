<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
</script>

<footer class="bg-zinc-900 text-white mt-auto">
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4 text-red-500">KNOCK OUT <span class="text-white">MDE</span></h3>
        <p class="text-gray-300">
          {$_('footer.description')}
        </p>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4 text-gray-200">{$_('footer.connect')}</h3>
        <ul class="space-y-2 text-gray-300">
          <li>{$_('footer.instagram')}</li>
          <li>{$_('footer.email')}</li>
          <li>{$_('footer.whatsapp')}</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4 text-gray-200">{$_('footer.visitUs')}</h3>
        <p class="text-gray-300">
          Calle 10 #30-50<br>
          El Poblado, Medellín<br>
          Colombia
        </p>
      </div>
    </div>
    
    <div class="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Knock Out MDE. {$_('footer.allRights')}</p>
    </div>
  </div>
</footer>
