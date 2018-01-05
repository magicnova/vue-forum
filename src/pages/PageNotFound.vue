<template>
    <div class="col-full" :class="$style.centered">
        <h1 :class="$style.headingLarge">Not Found</h1>
        <p :class="$style.textLarge">Opps, we couldn't find what you are looking for. Why don't you
            <router-link :to="{name: 'Home'}">
                go home instead?
            </router-link>
        </p>
    </div>
</template>

<script>
export default {}
</script>

<style module>
.headingLarge {
	font-size: 5.25em;
}

.textLarge {
	font-size: 2.125em;
	font-weight: 100;
}

-.centered {
	text-align: center;
}
</style>

