<template>
  <ul class="sidebar-menu">
    <li class="header">Navigation</li>
    <li>
      <router-link class="nav-item nav-link" to="/">
        <i class="fa fa-institution"></i> <span>Dashboard</span>
        <span class="pull-right-container">
          <small class="badge badge-pill pull-right bg-green">New</small>
        </span>
      </router-link>
    </li>
    <li>
      <router-link class="nav-item nav-link" to="/form">
        <i class="fa fa-file-text-o"></i> <span>Form</span>
        <span class="pull-right-container"></span>
      </router-link>
    </li>
    <li>
      <router-link class="nav-item nav-link" to="/about">
        <i class="fa fa-info"></i> <span>About</span>
        <span class="pull-right-container"></span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavigationMenu"
};
</script>
