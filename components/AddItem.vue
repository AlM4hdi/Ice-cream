<template>
    <div class="main">
        <div class="container">
            <v-card elevation="8">
                <v-card-item>
                    <h3>
                        Add or Remove scoop <span class="scoop">({{ cart.length }})</span>
                    </h3>
                    <div>
                        <ul>
                            <li v-for="item, index in items" :key="index">
                                <span>
                                    <span>{{ item.name }}</span> <sub class="price">({{ item.price }})</sub>
                                </span>
                                <span>
                                    <v-btn @click="addtoCart(item)" rounded="lg">
                                        +
                                    </v-btn>
                                    <v-btn @click="removeFromCart(item)">
                                        -
                                    </v-btn>
                                </span>
                            </li>
                        </ul>
                        <div>
                            <b>Total: {{ price }} </b>
                        </div>
                        <v-btn elevation="8" color="green" rounded-xs block @click="submit">Submit</v-btn>
                    </div>
                </v-card-item>

            </v-card>

        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    cart: {
        type: Array,
        required: false
    }
})
const { items } = toRefs(props)
const { cart } = toRefs(props)
const emit = defineEmits(['addorRemoveCart'])
const price = computed(() => {
    return cart.value.reduce((a, b) => a + b.price, 0)
})

const addtoCart = (item) => {
    if (cart.value.length < 5) {
        let obj = {
            type: 'add',
            item: item
        }
        emit('addorRemoveCart', obj)
    }
}
const removeFromCart = (item) => {
    
    if (cart.value.length > 0) {
        const isAlreadyInCart = cart.value.find((cartItem) => cartItem.name === item.name)
        if(isAlreadyInCart){
            let obj = {
                type: 'remove',
                item: item
            }
            emit('addorRemoveCart', obj)
        } else {return}
    }
}

const submit = () => {
    let obj = {
        type: 'submit',
        item: price.value
    }
    emit('addorRemoveCart', obj)
}
</script>

<style scoped>
.container {
    width: 70%;
    margin: auto;
}

h3 {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
}

.price {
    color: gray;
    font-size: 14px;
}

.scoop {
    color: gray;
}

ul li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    /* margin-bottom: 10px; */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
}

b {
    font-size: 20px;
    margin-top: 20px;
    display: block;
    text-align: center;
    margin-bottom: 20px;
}

</style>