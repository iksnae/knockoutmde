<script lang="ts">
  import { _ } from '$lib/i18n';
  import { path } from '$lib/utils/path';
</script>

<svelte:head>
  <title>Knock Out MDE - {$_('nav.contact')}</title>
</svelte:head>

<section class="py-12 bg-zinc-900 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    <p class="text-xl text-gray-300 mb-8">Get in touch with Knock Out MDE for custom design inquiries, appointments, or general questions.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6 text-zinc-900">Contact Information</h2>
        
        <div class="space-y-6 text-gray-700">
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">Studio Address</h3>
            <p>
              Calle 10 #30-50<br>
              El Poblado, Medellín<br>
              Colombia
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">Contact</h3>
            <p>Email: contact@knockoutmde.com</p>
            <p>Phone: +57 300 123 4567</p>
            <p>WhatsApp: +57 300 123 4567</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-red-600">Social Media</h3>
            <p>Instagram: @knockoutmde</p>
            <p>Facebook: /knockoutmde</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold mb-6 text-zinc-900">Send Us a Message</h2>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select id="subject" name="subject" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              <option value="custom">Custom Design Inquiry</option>
              <option value="order">Order Information</option>
              <option value="appointment">Schedule an Appointment</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
          </div>
          
          <div>
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-zinc-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold mb-6 text-zinc-900">Visit Our Studio</h2>
    <p class="text-gray-700 mb-8">
      We invite you to visit our design studio in El Poblado, Medellín. Experience our craftsmanship firsthand and 
      discuss your custom design ideas with our team of experts.
    </p>
    
    <div class="bg-gray-300 h-80 w-full rounded-lg">
      <!-- Map placeholder - would be replaced with actual map in production -->
      <div class="flex items-center justify-center h-full">
        <p class="text-gray-600 font-medium">Interactive Map Coming Soon</p>
      </div>
    </div>
  </div>
</section>