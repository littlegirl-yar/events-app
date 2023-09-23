<template>
	<div class="wrapper" v-if="!loading">
		<NavBar />
		<SideBar :allevents="events" @select-event="selectEvent" />
		<div class="content-wrapper">
			<div class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1 class="m-0 text-dark mb-1">
								Название
							</h1>
							<p>{{ selectedEvent?.title }}</p>
							<h1 class="m-0 text-dark mb-1">
								Описание события
							</h1>
							<p>{{ selectedEvent?.description }}</p>
							<h1 class="m-0 text-dark mb-1">
								Дата
							</h1>
							<p>{{ Date(selectedEvent?.creation_date) }}</p>
							<h1 class="m-0 text-dark mb-1 mt-3">
								Участники
							</h1>
							<div v-for="user in selectedEvent.participants" :key="user.id">
								<NuxtLink :to="{ name: 'user-id', params: { id: user.id } }">{{ user.first_name + " " + user.last_name }}
								</NuxtLink>
							</div>
							<button @click="processEvent()" type="button" class="btn btn-block btn-primary btn-lg mt-3">{{
								selectedType === 'mine' ? 'Отказаться от участия' : 'Принять участие' }}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	data() {
		return {
			events: null,
			loading: true,
			selectedEvent: null,
			selectedType: null,
		}
	},
	mounted() {
		this.getEvents()
	},
	methods: {
		async getEvents() {
			try {
				const response = await this.$axios.get('events');
				this.events = response.data.data;
				this.selectedEvent = this.events[0]
				this.loading = false;
			}
			catch (e) {
				console.log(e)
        this.$toast.error(e.response.data.message);
			}
		},
		async processEvent() {
			try {
				var posturl = this.selectedType === 'mine' ? `events/${this.selectedEvent.id}/stop` : `events/${this.selectedEvent.id}/start`
				const response = await this.$axios.post(posturl);
				this.getEvents()
			}
			catch (e) {
				console.log(e)
        this.$toast.error(e.response.data.message);
			}
		},
		selectEvent(selectedEvent, selectedType) {
			this.selectedEvent = selectedEvent
			this.selectedType = selectedType
		},
	}
}
</script>

