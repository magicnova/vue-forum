<template>
    <span :title="timestamp | formatDate">
        {{ timestamp | diffDate}}
    </span>
</template>
<script>
import moment from 'moment'
export default {
	props: {
		timestamp: {
			required: true,
			type: Number
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

