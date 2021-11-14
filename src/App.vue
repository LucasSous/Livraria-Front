<template>
    <div id="app">
        <router-view />

        <div class="topo">
            <a href="#app"><v-icon style="color: #fff; font-size: 30px">mdi-arrow-up</v-icon></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',

    components: {}
};
</script>

<style>
.topo {
    background: #198754;
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.topo a {
    text-decoration: none;
    display: inline-block;
    padding: 16px;
}

.topo :hover {
    background-color: #157548;
    border-radius: 50%;
}
</style>
