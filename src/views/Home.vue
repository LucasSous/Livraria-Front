<template>
    <div id="home">
        <v-app id="inspire">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark elevation-4">
                <nav class="navbar navbar-expand-lg col-11 m-auto flex">
                    <img src="../assets/logo_wda5.png" />
                    <div class="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link class="nav-link active" to="/" aria-current="page" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-house-fill icone-menu"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                            /></svg
                                        >Início</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/usuarios" href="#"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-person-fill icone-menu"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            /></svg
                                        >Usuários</router-link
                                    >
                                </li>

                                <li class="nav-item">
                                    <router-link class="nav-link " to="/editoras"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-bookmark-fill icone-menu"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
                                            /></svg
                                        >Editoras</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/livros" href="#"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-book-fill icone-menu"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                                            /></svg
                                        >Livros</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/alugueis" href="#"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-bookmark-plus-fill icone-menu"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
                                            /></svg
                                        >Alugueis</router-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>

            <v-col cols="11" style="margin: auto; flex: 1;">
                <v-row>
                    <v-col cols="3">
                        <v-tooltip bottom color="#212529">
                            <template v-slot:activator="{ on, attrs }">
                                <v-card
                                    router-link
                                    to="/usuarios"
                                    class="hover"
                                    color="#212529"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <div class="d-flex flex-row carde">
                                        <v-icon color="#c9c9c9" style="font-size: 30px; margin-left: 20px"
                                            >mdi-account-group</v-icon
                                        >
                                        <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                        <span class="p">{{ totalUsuarios() }}</span>
                                    </div>
                                </v-card>
                            </template>
                            <span>Total de usuários</span>
                        </v-tooltip>
                    </v-col>

                    <v-col cols="3">
                        <v-tooltip bottom color="#212529">
                            <template v-slot:activator="{ on, attrs }">
                                <v-card
                                    router-link
                                    to="/editoras"
                                    class="hover"
                                    color="#212529"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <div class="d-flex flex-row carde">
                                        <v-icon color="#c9c9c9" style="font-size: 30px; margin-left: 20px"
                                            >mdi-bookmark</v-icon
                                        >
                                        <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                        <span class="p">{{ totalEditoras() }}</span>
                                    </div>
                                </v-card>
                            </template>
                            <span> Total de editoras</span>
                        </v-tooltip>
                    </v-col>

                    <v-col cols="3">
                        <v-tooltip bottom color="#212529">
                            <template v-slot:activator="{ on, attrs }">
                                <v-card
                                    router-link
                                    to="/livros"
                                    class="hover"
                                    color="#212529"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <div class="d-flex flex-row carde">
                                        <v-icon color="#c9c9c9" style="font-size: 30px; margin-left: 20px"
                                            >mdi-bookshelf</v-icon
                                        >
                                        <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                        <span class="p">{{ totalLivros() }}</span>
                                    </div>
                                </v-card>
                            </template>
                            <span> Total de livros</span>
                        </v-tooltip>
                    </v-col>

                    <v-col cols="3">
                        <v-tooltip bottom color="#212529">
                            <template v-slot:activator="{ on, attrs }">
                                <v-card
                                    router-link
                                    to="/alugueis"
                                    class="hover"
                                    color="#212529"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <div class="d-flex flex-row carde">
                                        <v-icon color="#c9c9c9" style="font-size: 30px; margin-left: 20px"
                                            >mdi-calendar-clock</v-icon
                                        >
                                        <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                        <span class="p">{{ totalAlugueis() }}</span>
                                    </div>
                                </v-card>
                            </template>

                            <span> Total de aluguéis</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <div class="blocos">
                    <v-card class="mt-5 elevation-5" style="width: 49%">
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-account</v-icon
                            >Último usuário cadastrado
                        </h5>
                        <div class="flex" v-for="(usuario, index) in ultimoUsuario" :key="index">
                            <h6 class="h6" style="width: 43%;">
                                Nome: <span class="corSpan">{{ usuario.nome }}</span>
                            </h6>
                            <h6 class="h6">
                                E-mail: <span class="corSpan">{{ usuario.email }}</span>
                            </h6>
                        </div>
                        <v-divider class="h6 mt-5"></v-divider>
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-book</v-icon>Último
                            livro cadastrado
                        </h5>
                        <div class="flex" v-for="(livro, index) in ultimoLivro" :key="index">
                            <h6 class="h6" style="width: 43%;">
                                Nome: <span class="corSpan">{{ livro.nome }}</span>
                            </h6>
                            <h6 class="h6">
                                Autor: <span class="corSpan">{{ livro.autor }}</span>
                            </h6>
                        </div>
                        <v-divider class="h6 mt-5"></v-divider>
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-bookmark</v-icon
                            >Última editora cadastrada
                        </h5>
                        <div class="flex" v-for="(editora, index) in ultimaEditora" :key="'A' + index">
                            <h6 class="h6" style="width: 43%;">
                                Nome: <span class="corSpan">{{ editora.nome }}</span>
                            </h6>
                            <h6 class="h6">
                                Cidade: <span class="corSpan">{{ editora.cidade }}</span>
                            </h6>
                        </div>
                    </v-card>
                    <v-card class="mt-5 elevation-5" style="width: 49%">
                        <div>
                            <h5 class="h5">
                                <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px"
                                    >mdi-calendar-clock</v-icon
                                >Últimos aluguéis cadastrados
                            </h5>
                            <div class="flex" v-for="(aluguel, index) in ultimoAluguel" :key="'B' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome do usuário: <span class="corSpan">{{ aluguel.usuario_id.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    Livro alugado: <span class="corSpan">{{ aluguel.livro_id.nome }}</span>
                                </h6>
                            </div>

                            <div class="flex" v-for="(aluguel, index) in ultimoAluguel" :key="'C' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Data de aluguel: <span class="corSpan">{{ aluguel.data_aluguel }}</span>
                                </h6>
                                <h6 class="h6" v-if="aluguel.data_devolucao == null">
                                    Data de Devolução: <span class="corSpan">Não devolvido</span>
                                </h6>
                                <div v-else-if="aluguel.data_devolucao > aluguel.data_previsao">
                                    <v-tooltip bottom color="#DB2D2D">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #DB2D2D" v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>Em atraso</span>
                                    </v-tooltip>
                                </div>
                                <div v-else>
                                    <v-tooltip bottom color="#198754">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #198754 " v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>No prazo</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </div>
                        <v-divider class="h6 mt-5"></v-divider>
                        <div class="mt-5">
                            <div class="flex" v-for="(aluguel, index) in penultimoAluguel" :key="'B' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome do usuário: <span class="corSpan">{{ aluguel.usuario_id.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    Livro alugado: <span class="corSpan">{{ aluguel.livro_id.nome }}</span>
                                </h6>
                            </div>

                            <div class="flex" v-for="(aluguel, index) in penultimoAluguel" :key="'C' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Data de aluguel: <span class="corSpan">{{ aluguel.data_aluguel }}</span>
                                </h6>
                                <h6 class="h6" v-if="aluguel.data_devolucao == null">
                                    Data de Devolução: <span class="corSpan">Não devolvido</span>
                                </h6>
                                <div v-else-if="aluguel.data_devolucao > aluguel.data_previsao">
                                    <v-tooltip bottom color="#DB2D2D">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #DB2D2D" v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>Em atraso</span>
                                    </v-tooltip>
                                </div>
                                <div v-else>
                                    <v-tooltip bottom color="#198754">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #198754 " v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>No prazo</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </div>
                        <v-divider class="h6 mt-5"></v-divider>
                        <div class="mt-5 mb-10">
                            <div class="flex" v-for="(aluguel, index) in antepenultimoAluguel" :key="'B' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome do usuário: <span class="corSpan">{{ aluguel.usuario_id.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    Livro alugado: <span class="corSpan">{{ aluguel.livro_id.nome }}</span>
                                </h6>
                            </div>

                            <div class="flex" v-for="(aluguel, index) in antepenultimoAluguel" :key="'C' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Data de aluguel: <span class="corSpan">{{ aluguel.data_aluguel }}</span>
                                </h6>
                                <h6 class="h6" v-if="aluguel.data_devolucao == null">
                                    Data de Devolução: <span class="corSpan">Não devolvido</span>
                                </h6>
                                <div v-else-if="aluguel.data_devolucao > aluguel.data_previsao">
                                    <v-tooltip bottom color="#DB2D2D">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #DB2D2D" v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>Em atraso</span>
                                    </v-tooltip>
                                </div>
                                <div v-else>
                                    <v-tooltip bottom color="#198754">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h6 class="h6" style="color: #198754 " v-bind="attrs" v-on="on">
                                                Data de Devolução: {{ aluguel.data_devolucao }}
                                            </h6>
                                        </template>
                                        <span>No prazo</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </div>

                <v-card class="elevation-5">
                    <div class="grafico">
                        <h5 class="h5 mt-5" style="text-align: center">Gráfico - Resumo de aluguéis</h5>
                        <apexchart
                            v-if="!loading"
                            type="donut"
                            width="500"
                            :options="chartOptions"
                            :series="series"
                        ></apexchart>
                    </div>
                </v-card>
            </v-col>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Livro from '../services/livros';
import Usuario from '../services/usuarios';
import Editora from '../services/editoras';
import Aluguel from '../services/alugueis';
import Footer from '../components/Footer.vue';

export default {
    name: 'Home',

    components: { Footer },

    data: () => ({
        aluguel: {
            id: '',
            livro_id: {
                id: '',
                nome: '',
                editora: {
                    id: '',
                    nome: '',
                    cidade: ''
                }
            },
            usuario_id: {
                id: '',
                nome: '',
                endereco: '',
                cidade: '',
                email: ''
            },
            data_aluguel: '',
            data_previsao: '',
            data_devolucao: ''
        },
        livros: [],
        usuarios: [],
        editoras: [],
        alugueis: [],
        ultimoLivro: [],
        ultimoUsuario: [],
        ultimaEditora: [],
        ultimoAluguel: [],
        penultimoAluguel: [],
        antepenultimoAluguel: [],
        series: [0, 0, 0],
        chartOptions: {
            labels: ['Não devolvido', 'Em atraso', 'No prazo'],
            colors: ['#0077FF', '#DB2D2D', '#198754'],
            chart: {
                type: 'donut',
                height: '400',
                width: '550',
                color: 'red'
            }
        },
        loading: true
    }),

    mounted() {
        this.getLivros();
        this.getUsuarios();
        this.getEditoras();
        this.livrosRepetidos();
    },

    created() {
        this.getAlugueis();
    },

    methods: {
        getLivros() {
            Livro.listar().then(resposta => {
                this.livros = resposta.data;
                var ultimoLivro = this.livros[this.livros.length - 1];
                this.ultimoLivro = [ultimoLivro];
            });
        },

        livrosRepetidos() {
            Livro.listar().then(res => {
                this.livros = res.data;
                var array = this.livros;
            });
        },

        getUsuarios() {
            Usuario.listar().then(resposta => {
                this.usuarios = resposta.data;
                var ultimoUsuario = this.usuarios[this.usuarios.length - 1];
                this.ultimoUsuario = [ultimoUsuario];
            });
        },

        getEditoras() {
            Editora.listar().then(resposta => {
                this.editoras = resposta.data;
                var ultimaEditora = this.editoras[this.editoras.length - 1];
                this.ultimaEditora = [ultimaEditora];
            });
        },

        getAlugueis() {
            Aluguel.listar().then(resposta => {
                this.alugueis = resposta.data;
                var ultAluguel = this.alugueis[this.alugueis.length - 1];
                var penultimo = this.alugueis[this.alugueis.length - 2];
                var antepenultimo = this.alugueis[this.alugueis.length - 3];
                this.ultimoAluguel = [ultAluguel];
                this.penultimoAluguel = [penultimo];
                this.antepenultimoAluguel = [antepenultimo];
                this.alugueis.forEach(aluguel => {
                    if (aluguel.data_devolucao <= aluguel.data_previsao) {
                        this.series[2]++;
                    }
                });
                this.alugueis.forEach(aluguel => {
                    if (aluguel.data_devolucao == null) {
                        this.series[0]++;
                    }
                });
                this.alugueis.forEach(aluguel => {
                    if (aluguel.data_devolucao > aluguel.data_previsao) {
                        this.series[1]++;
                    }
                });
                this.loading = false;
            });
        },

        totalLivros() {
            return this.livros.length;
        },

        totalUsuarios() {
            return this.usuarios.length;
        },

        totalEditoras() {
            return this.editoras.length;
        },

        totalAlugueis() {
            return this.alugueis.length;
        }
    }
};
</script>

<style>
.carde {
    justify-content: space-between;
    padding: 10px;
}
.flex {
    display: flex;
}

.blocos {
    display: flex;
    justify-content: space-between;
}

.p {
    font-size: 30px;
    margin-right: 20px;
    color: #c9c9c9;
}

.h6 {
    margin-left: 20px;
    margin-right: 20px;
    color: #525050;
}

.h5 {
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    color: #525050;
}

.grafico {
    margin: 0 auto;
    width: 370px;
}

#inspire {
    background-color: rgb(240, 240, 240);
}

.corSpan {
    color: rgb(138, 138, 138);
}

.vIcon {
    color: #525050;
}
</style>
