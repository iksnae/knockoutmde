<script>
  import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
  <h1 class="text-6xl font-bold text-red-600 mb-6">
    {$page.status}
  </h1>
  
  <p class="text-2xl text-zinc-800 mb-8 text-center">
    {$page.error?.message || "Sorry, we couldn't find what you're looking for."}
  </p>
  
  <a 
    href="/" 
    class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
  >
    Return to Home
  </a>
</div>
