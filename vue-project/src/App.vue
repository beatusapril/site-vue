<script setup>
</script>

<template>
  <div class="container">
    <header class="header">

      <div class="wrapper">

        <nav class="menu">
          <RouterLink class="link" to="/">Home</RouterLink>
          <RouterLink class="link" to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView class="view" />
  </div>
</template>

<style global>
body {
  background-color: rgb(237, 242, 242);
}

.container li {
  list-style-type: none;
}

.container a {
  text-decoration: none;
}
</style>

<style scope>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: flex-end;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.link {
  display: block;
}

.menu .link {
  margin-right: 40px;
}
</style>
