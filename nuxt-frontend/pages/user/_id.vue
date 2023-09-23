<template>
	<div v-if="userInfo">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Profile</h1>
					</div>
				</div>
			</div>
		</section>
		<section class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-3">
						<div class="card card-primary card-outline">
							<div class="card-body box-profile">
								<div class="text-center">
									<img class="profile-user-img img-fluid img-circle" src="/dist/img/user4-128x128.jpg"
										alt="User profile picture">
								</div>
								<h3 class="profile-username text-center">{{ userInfo.first_name + " " + userInfo.last_name }}</h3>
								<p class="text-muted text-center">Software Engineer</p>
								<ul class="list-group list-group-unbordered mb-3">
									<li class="list-group-item">
										<b>Id</b> <a class="float-right">{{ userInfo.id }}</a>
									</li>
									<li class="list-group-item">
										<b>Email</b> <a class="float-right">{{ userInfo.email }}</a>
									</li>
									<li class="list-group-item">
										<b>Birth Date</b> <a class="float-right">{{ birthDate }}</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
  
<script>
export default {
	middleware: 'auth',
	data() {
		return {
			userInfo: null,
		}
	},
	mounted() {
		this.getUserInfo();
	},
	computed: {
		birthDate: function () {
			var d = new Date(this.userInfo.birth_date)
			return d.toDateString()
		},
	},
	methods: {
		async getUserInfo() {
			try {
        const response = await this.$axios.get(`user/${this.$route.params.id}`);
				this.userInfo = response.data.data;
      }
      catch (e) {
				console.log(e)
        this.$toast.error(e.response.data.message);
      }
		},
	}
}
</script>
  
  