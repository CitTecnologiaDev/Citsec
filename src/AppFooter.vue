<template>
	<div class="layout-footer">
		<img alt="Logo" :src="footerImage()" height="200" class="mr-2" />
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		methods: {
			footerImage() {
				return 'layout/images/citsec.png';
			}
		},
		computed: {
			darkTheme() {
				return 'layout/images/citsec.png';
			}
		}
	}
</script>