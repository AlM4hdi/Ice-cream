<template>
    <div class="container">

        <div class="left">
            <AddItem :cart="cart" :items="items" @addor-remove-cart="addtoCart" />

        </div>
        <div class="right">
            <IceCream :icecream="cart" />

        </div>
    </div>
</template>

<script setup>
const items = ref([
    { id: 1, name: 'Vanilla', price: 100 },
    { id: 2, name: 'Chocolate', price: 120 },
    { id: 3, name: 'Strawberry', price: 90 },
    { id: 4, name: 'Orange', price: 70 },
])
const cart = ref([])

const addtoCart = (item) => {
    if (item.type === 'add') {
        cart.value.push(item.item)
    } else if(item.type === 'submit') {
        alert('Your total price is ' + item.item)
        cart.value = []
    }
    else {
        let position = cart.value.findIndex(variant => variant.id === item.item.id);

        cart.value.splice(position, 1);
    }

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
}

.left {
    margin-left: 50px;
    flex-grow: 1;
}

.right {
    flex-grow: 2;
}
@media screen and (max-width: 600px) {
    .container {
        flex-direction: column-reverse;
        width: 100vw;

    }
    .left {
        margin-left: 0px;
        width: 100%;
    }
    .right {
        margin-left: 0px;

    }

}
</style>