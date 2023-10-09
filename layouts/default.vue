<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
            <v-img  src="/CodeVue-logo-removebg-preview.png" />
    </v-app-bar>


    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
    <v-bottom-navigation>
            <v-btn value="recent">
                <v-icon>mdi-history</v-icon>

                <span>Recent</span>
            </v-btn>

            <v-btn value="random">
                <span>copyright: 2023</span>
            </v-btn>
        </v-bottom-navigation>

  </v-layout>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>