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
                                        <v-icon
                                            style="color:white; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-home</v-icon
                                        >Início</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/usuarios" href="#"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-account-multiple</v-icon
                                        >Usuários</router-link
                                    >
                                </li>

                                <li class="nav-item">
                                    <router-link class="nav-link " to="/editoras"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-bookshelf</v-icon
                                        >Editoras</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/livros" href="#"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-book-multiple</v-icon
                                        >Livros</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/alugueis" href="#"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-calendar-clock</v-icon
                                        >Aluguéis</router-link
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
                        <v-card router-link to="/usuarios" class="hover" color="#212529" dark>
                            <div class="d-flex flex-row carde " style="border-left: solid 7px #0077FF;">
                                <span class="p" style="margin-left: 20px">Usuários</span>
                                <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                <span class="p">{{ totalUsuarios() }}</span>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col cols="3">
                        <v-card router-link to="/editoras" class="hover" color="#212529" dark>
                            <div class="d-flex flex-row carde" style="border-left: solid 7px #32b4ff;">
                                <span class="p" style="margin-left: 20px">Editoras</span>
                                <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                <span class="p">{{ totalEditoras() }}</span>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col cols="3">
                        <v-card router-link to="/livros" class="hover" color="#212529" dark>
                            <div class="d-flex flex-row carde" style="border-left: solid 7px #DB2D2D;">
                                <span class="p" style="margin-left: 20px">Livros</span>
                                <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                <span class="p">{{ totalLivros() }}</span>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col cols="3">
                        <v-card router-link to="/alugueis" class="hover" color="#212529" dark>
                            <div class="d-flex flex-row carde" style="border-left: solid 7px #198754;">
                                <span class="p" style="margin-left: 20px">Aluguéis</span>
                                <v-icon color="#c9c9c9" style="font-size: 20px;">mdi-arrow-right</v-icon>
                                <span class="p">{{ totalAlugueis() }}</span>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="blocos">
                    <v-card class="mt-5 elevation-5" style="width: 49%">
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-account</v-icon
                            >Último usuário cadastrado
                        </h5>
                        <div v-if="usuarios != 0">
                            <div class="flex" v-for="(usuario, index) in ultimoUsuario" :key="index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome: <span class="corSpan">{{ usuario.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    E-mail: <span class="corSpan">{{ usuario.email }}</span>
                                </h6>
                            </div>
                        </div>
                        <div v-if="usuarios == 0" style="padding: 0px 20px 0px 20px;">
                            <v-alert border="right" colored-border type="error" elevation="2">
                                Nenhum cadastro de usuário encontrado!
                            </v-alert>
                        </div>

                        <v-divider class="h6 mt-5"></v-divider>
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-book</v-icon>Último
                            livro cadastrado
                        </h5>
                        <div v-if="livros != 0">
                            <div class="flex" v-for="(livro, index) in ultimoLivro" :key="index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome: <span class="corSpan">{{ livro.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    Autor: <span class="corSpan">{{ livro.autor }}</span>
                                </h6>
                            </div>
                        </div>
                        <div v-if="livros == 0" style="padding: 0px 20px 0px 20px;">
                            <v-alert border="right" colored-border type="error" elevation="2">
                                Nenhum cadastro de livro encontrado!
                            </v-alert>
                        </div>
                        <v-divider class="h6 mt-5"></v-divider>
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px">mdi-bookshelf</v-icon
                            >Última editora cadastrada
                        </h5>
                        <div v-if="editoras != 0">
                            <div class="flex mb-5" v-for="(editora, index) in ultimaEditora" :key="'A' + index">
                                <h6 class="h6" style="width: 43%;">
                                    Nome: <span class="corSpan">{{ editora.nome }}</span>
                                </h6>
                                <h6 class="h6">
                                    Cidade: <span class="corSpan">{{ editora.cidade }}</span>
                                </h6>
                            </div>
                        </div>
                        <div v-if="editoras == 0" style="padding: 0px 20px 0px 20px;">
                            <v-alert border="right" colored-border type="error" elevation="2">
                                Nenhum cadastro de livro encontrado!
                            </v-alert>
                        </div>
                    </v-card>
                    <v-card class="mt-5 elevation-5" style="width: 49%">
                        <h5 class="h5">
                            <v-icon style="color:#525050; margin-top: -3px; margin-right: 4px"
                                >mdi-calendar-clock</v-icon
                            >Últimos aluguéis cadastrados
                        </h5>
                        <div v-if="ultimoAluguel != 0">
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

                        <div class="mt-5" v-if="penultimoAluguel != 0">
                            <v-divider class="h6 mt-5"></v-divider>
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

                        <div class="mt-5 mb-10" v-if="antepenultimoAluguel != 0">
                            <v-divider class="h6 mt-5"></v-divider>
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
                        <div v-if="alugueis == 0" style="padding: 20px;">
                            <v-alert border="right" colored-border type="error" elevation="2">
                                Nenhum cadastro de aluguel encontrado!
                            </v-alert>
                        </div>
                    </v-card>
                </div>
                <div class="blocos mt-5">
                    <v-card class="elevation-5" v-if="alugueis != 0" style="width: 49%">
                        <div class="grafico">
                            <h5 class="h5 mt-5" style="text-align: center">Gráfico - Resumo de aluguéis</h5>
                            <apexchart
                                v-if="!loading"
                                type="donut"
                                width="450"
                                :options="chartOptions"
                                :series="series"
                            ></apexchart>
                        </div>
                    </v-card>
                    <v-card class="elevation-5" v-if="livrosMaisAlugados != 0" style="width: 49%">
                        <div class="grafico2">
                            <h5 class="h5 mt-5" style="text-align: center">Gráfico - Livros mais alugados</h5>
                            <apexchart
                                v-if="!atualizaGrafico"
                                type="bar"
                                width="450"
                                :options="chartOptions2"
                                :series="series2"
                            ></apexchart>
                        </div>
                    </v-card>
                </div>
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
        livrosMaisAlugados: [],
        series: [0, 0, 0],
        chartOptions: {
            labels: ['Não devolvido', 'Em atraso', 'No prazo'],
            colors: ['#0077FF', '#DB2D2D', '#198754'],
            chart: {
                type: 'donut',
                height: '400',
                width: '550'
            }
        },
        series2: [
            {
                data: [0, 0, 0]
            }
        ],
        chartOptions2: {
            chart: {
                type: 'donut',
                width: '550',
                toolbar: {
                    show: false
                }
            },

            colors: ['#198754'],

            labels: ['', '', '']
        },

        loading: true,
        atualizaGrafico: true
    }),

    computed: {},

    mounted() {
        this.getLivros();
        this.getUsuarios();
        this.getEditoras();
        this.maisAlugados();
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

        maisAlugados() {
            Livro.maisAlugados().then(resposta => {
                this.livrosMaisAlugados = resposta.data;

                if (this.livrosMaisAlugados[0] != null) {
                    this.series2[0].data[0] = this.livrosMaisAlugados[0].totalalugado;
                    this.chartOptions2.labels[0] = this.livrosMaisAlugados[0].nome;
                }
                if (this.livrosMaisAlugados[1] != null) {
                    this.series2[0].data[1] = this.livrosMaisAlugados[1].totalalugado;
                    this.chartOptions2.labels[1] = this.livrosMaisAlugados[1].nome;
                }
                if (this.livrosMaisAlugados[2] != null) {
                    this.series2[0].data[2] = this.livrosMaisAlugados[2].totalalugado;
                    this.chartOptions2.labels[2] = this.livrosMaisAlugados[2].nome;
                }
                this.atualizaGrafico = false;
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
                if (ultAluguel != null) {
                    this.ultimoAluguel = [ultAluguel];
                }

                if (penultimo != null) {
                    this.penultimoAluguel = [penultimo];
                }
                if (antepenultimo != null) {
                    this.antepenultimoAluguel = [antepenultimo];
                }

                this.alugueis.forEach(aluguel => {
                    if (aluguel.data_devolucao == null) {
                        this.series[0]++;
                    } else if (aluguel.data_devolucao > aluguel.data_previsao) {
                        this.series[1]++;
                    } else {
                        this.series[2]++;
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
    font-size: 25px;
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

.grafico2 {
    margin: 0 auto;
    width: 450px;
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
