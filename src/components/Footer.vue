<template>
    <footer class="rodape ">
        <p>
            <b>Livraria WDA ©</b> -<a href="https://github.com/LucasSous" target="_blank">
                Desenvolvido por Lucas Sousa.</a
            >
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style>
.rodape {
    background-color: rgb(240, 240, 240);
    border-top: rgb(90, 90, 90) solid 1px;
    padding: 0;
}
.rodape p {
    position: relative;
    top: 8px;
    text-align: center;
    padding: 10px;
    color: rgb(90, 90, 90);
}

.rodape p a {
    text-decoration: none;
    color: rgb(90, 90, 90);
}
</style>
