<template>
   <div class=" text-center">
        <Navigation />
        <div v-if="response.title">
            <div class=" flex justify-center">
                <Card class="w-full">
                  
                    <template #content>
                        <div class="  flex justify-center">
                            <img :src="response.images.webp.image_url" :alt="response.title" />
                        </div>
                        <h2 class=" font-bold">{{ response.title }}</h2>
                        <span class=" mr-6">Episodes: {{ response.episodes }}</span>
                        <span>Score: {{ response.score }}</span>
                        <div>
                            Genre: <span v-for="genre in response.genres">{{ genre.name }}, </span>
                        </div>
                        <div>
                            <span v-for="studio in response.studios" class="mr-4">{{ studio.name }} </span>
                            <span> {{ response.airing ? 'Currently Airing' : 'Finished' }}</span>
                        </div>
                    </template>
                </Card>
            </div>
            <div class=" w-full">
                <h3 class=" font-semibold">Synopsis</h3>
                <hr>
                <Card class=" min-w-full">
                    <template #content>
                        {{ response.synopsis }}
                    </template>
                </Card>
            </div>
            <div class=" h-48">
                <h3 class=" font-semibold">Episodes </h3>
                <hr>
                <button class=" px-5 py-3 mx-1 my-2 shadow-md rounded-md" v-for="ep in response.episodes"> {{ ep }}</button>
            </div>
           
        </div>
        <div v-else>
            <h1>loading...</h1>
        </div>
    </div>
</template>

<script setup>
const router = useRoute()
const response = ref([])
onBeforeMount(() => {
    getItem()
})
onMounted(() => {
    getItem()
})

const getItem = async () => {
    try {
        const { data, error } = await useFetch(`https://api.jikan.moe/v4/anime/${router.params.id}/full`)

        if (!error.value) {
            response.value = data.value.data
        }

    } catch (error) {
        console.log(error)
    }
}
</script>

<style lang="scss" scoped>

</style>