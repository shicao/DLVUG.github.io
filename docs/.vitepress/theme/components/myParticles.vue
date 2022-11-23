<script setup lang="ts">
import CustomParticles from "./Particles.vue"
</script>

<template>

    <main>
        <ClientOnly>
            <CustomParticles />
        </ClientOnly>
    </main>
</template>