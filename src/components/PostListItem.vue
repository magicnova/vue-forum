<template>
    <div>
        <div class="post">
            <div class="user-info">
                <a href="profile.html#profile-details" class="user-name">{{ user.name }}
                </a>
                <a href="profile.html#profile-details">
                    <img class="avatar-large" :src="user.avatar" alt="">
                </a>
                <p class="desktop-only text-small">{{userPostsCount}} posts</p>
            </div>

            <div class="post-content">
                <div>
                    {{ post.text }}
                </div>
            </div>
            <div class="post-date text-faded" :title="post.publishedAt | formatDate">
                {{ post.publishedAt | diffDate}}
            </div>
        </div>
    </div>
</template>
<script>
import sourceData from '@/data'
import moment from 'moment'
export default {
	props: {
		post: {
			required: true,
			type: Object
		}
	},
	computed: {
		user() {
			return sourceData.users[this.post.userId]
		},
		userPostsCount() {
			return Object.keys(this.user.posts).length
		}
	},
	filters: {
		formatDate(date) {
			return moment
				.unix(date)
				.locale('es')
				.format('MMMM Do YYYY, h:mm:ss a')
		},
		diffDate(date) {
			return moment.unix(date).fromNow()
		}
	}
}
</script>
