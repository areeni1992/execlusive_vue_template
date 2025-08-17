<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="contact-view max-w-7xl mx-auto py-40">
    <bread-crumbs>
      <span class="text-black">Contact Us</span>
    </bread-crumbs>
    <div class="grid grid-cols-4 gap-6 mt-10">
      <aside class="space-y-4 shadow-lg rounded p-10">
        <h1 class="text-2xl flex"><span class="mr-5"><img src="/images/icons/icons-phone.png" alt=""></span>Call To Us</h1>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <br />
        <h1 class="text-2xl flex"><span class="mr-5"><img src="/images/icons/icons-mail.png" alt=""></span>Write To Us</h1>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </aside>
      <div class="content col-span-3 bg-white p-15 shadow-lg rounded">
        <div>
            <form action="">
                <div class="flex">
                    <input type="text" placeholder="Your Name" class="bg-gray-200 rounded h-12 w-75 pl-4" />
                    <input type="text" placeholder="Your Email" class="bg-gray-200 rounded h-12 w-75 mx-5 pl-4" />
                    <input type="text" placeholder="Your Phone" class="bg-gray-200 rounded h-12 w-75 pl-4" />
                </div>
                <textarea name="message" id="message" placeholder="Your Message" class="w-full h-75 mt-5 p-5 bg-gray-200"></textarea>
                <button type="submit" class="bg-red-500 text-white px-10 py-4 rounded mt-5 hover:bg-red-600 transition duration-300 cursor-pointer">Send Message</button>
            </form>

        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
