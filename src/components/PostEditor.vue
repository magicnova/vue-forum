<template>
    <form @submit.prevent="addPostChild">
        <!-- :v-on:submit -->
        <div class="form-group">
            <!-- <textarea name="" id="" cols="30" rows="10" class="form-input" :value="newPostText" @input="newPostText=$event.target.value"></textarea> -->
            <textarea name="" id="" cols="30" rows="10" class="form-input" v-model="newPostText"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn-blue">Submit post</button>
        </div>
    </form>
</template>
<script>
export default {
	props: {
		threadId: {
			required: true
		}
	},
	data() {
		return {
			newPostText: ''
		}
	},
	methods: {
		addPostChild() {
			const postId = 'greatPost' + Math.random()
			const post = {
				text: this.newPostText,
				publishedAt: Math.floor(Date.now() / 1000),
				threadId: this.threadId,
				userId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2',
				'.key': postId
			}
			this.newPostText = ''

			this.$emit('save-post-event', { post })
		}
	}
}
</script>
