<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="" class="d-block">{{ userName }}</a>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-bars" />
              <p>
                Остальные задачи
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item" v-for="item in restEvents" :key="item.id">
                <a class="nav-link" @click="selectEvent(item, 'rest')">
                  <p>Задача {{ item.id }}</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fas fa-bars" />
              <p>
                Мои задачи
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item" v-for="item in myEvents" :key="item.id">
                <a class="nav-link" @click="selectEvent(item, 'mine')">
                  <p>Задача {{ item.id }}</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['allevents'],
  data() {
    return {
      firstName: this.$auth.user.data.first_name,
      lastName: this.$auth.user.data.last_name,
      userId: this.$auth.user.data.id,
    }
  },
  computed: {
    userName: function () {
      return this.firstName + ' ' + this.lastName
    },
    myEvents: function () {
      return this.allevents.filter(ev => ev.participants.some(u => u.id === this.userId));
    },
    restEvents: function () {
      return this.allevents.filter(ev => !ev.participants.some(u => u.id === this.userId));
    }
  },
  methods: {
    selectEvent(seceltedEvent, selectedType) {
      this.$emit('select-event', seceltedEvent, selectedType)
    }
  }
}
</script>