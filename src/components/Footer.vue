<template>
  <footer class="bg-black">
    <div class="grid grid-cols-5 text-white max-w-auto p-10 mx-35 text-left">
      <div class="space-y-5 p-5">
        <h2 class="font-bold text-3xl">Execlusive</h2>
        <ul class="space-y-5 mt-1">
          <li class="font-bold">Subscribe</li>
          <li>
            <form>
              <label for="email">Get 10% off your first order</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="border border-gray-300 rounded px-2 py-2 my-3"
              />
            </form>
          </li>
        </ul>
      </div>
      <div class="p-5">
        <h2 class="text-2xl py-2">Suppurt</h2>
        <ul class="text-gray-300 space-y-5 mt-1">
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer">exclusive@gmail.com</li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer">+880 123 456 789</li>
        </ul>
      </div>
      <div class="p-5">
        <h2 class="text-2xl pt-2">Account</h2>
        <ul class="space-y-5 mt-1 text-gray-300">
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">My Account</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Login / Register</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Cart</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Wishlist</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Shop</a></li>
        </ul>
      </div>
      <div class="p-5">
        <h2 class="text-2xl pt-2">Quick Link</h2>
        <ul class="space-y-5 mt-1 text-gray-300">
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Privacy Policy</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Terms Of Use</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">FAQ</a></li>
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="p-5">
        <h2 class="text-2xl pt-2">Download App</h2>
        <ul class="space-y-5 mt-1 text-gray-300">
          <li class="hover:text-amber-700 hover:border-b-amber-700 cursor-pointer"><p class="text-sm">Save $3 with App New User Only</p>
              <div class="app-icons grid grid-cols-4 gap-3 mt-2">
                  <img src="/images/icons/Qr-Code.png" alt="" class="col-span-2 row-span-2 w-full" />
                  <img src="/images/icons/appstore.png" alt="App Store" class="col-span-2 w-full h-full" />
                  <img src="/images/icons/google-play-store.png" alt="Play Store" class="col-span-2 w-full h-full" />
              </div>
          </li>
          <li>
            <ul class="flex space-x-5 justify-left gap-2">
              <li><a href="#">
                  <img src="/images/icons/Icon-Facebook.png" alt="">
              </a></li>
              <li><a href="#">
                  <img src="/images/icons/twitter.png" alt="">
              </a></li>
              <li><a href="#">
                  <img src="/images/icons/instagram.png" alt="">
              </a></li>
              <li><a href="#">
                  <img src="/images/icons/linkedind.png" alt="">
              </a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="subfooter">
      <p class="text-center text-gray-400 text-sm py-5">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </div>
  </footer>
</template>
