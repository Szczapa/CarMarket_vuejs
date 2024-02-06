
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="mx-auto max-w-screen-2Xl p-4 md:p-6 2xl:p-10">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col justify-center">
          <h2 class="font-bold"> ERREUR 404</h2>
          <p> La page que vous cherchez est introuvable.</p>
          <p> Notre technicien travaille dessus. En attendant, retournez à l'accueil. </p>
          <router-link to="/"><p class="text-blue-700">Retour à l'accueil</p></router-link>
        </div>
        <div class="px-7.5 py-6">
          <img class="rounded" src="../assets/ferret.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>