<template>
    <div class="col-full">
        <h1>Not Found</h1>
        <p>Opps, we couldn't find what you are looking for. Why don't you
            <router-link :to="{name: 'Home'}">
                go home instead?
            </router-link>
        </p>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
	font-size: 5.25em;
}

p {
	font-size: 2.125em;
	font-weight: 100;
}

div {
	text-align: center;
}
</style>

