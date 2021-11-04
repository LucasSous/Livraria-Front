<template>
    <div id="alugueis">
        <v-app id="inspire">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark elevation-4">
                <nav class="navbar navbar-expand-lg col-11 m-auto">
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
                                    <router-link class="nav-link" to="/" aria-current="page" href="#">
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
                                    <router-link class="nav-link" to="/editoras"
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
                                <li class="nav-item ">
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
                                    <router-link class="nav-link active" to="/alugueis" href="#"
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
            <v-col cols="11" style="margin: auto; flex: 1; ">
                <v-data-table
                    :headers="headers"
                    :items="alugueis"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-5"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="#212529">
                            <v-toolbar-title style="color: white">Lista de Alugueis</v-toolbar-title>

                            <v-divider class="mx-4" inset vertical></v-divider>

                            <v-text-field
                                dark
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="#198754"
                                        dark
                                        @click="reseteForm()"
                                        class="mb-2"
                                        style="margin-top: 9px;"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-plus-lg icone"
                                            style="margin-right: 5px; margin-bottom: 0px"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
                                            />
                                        </svg>
                                        Novo Aluguel
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-form ref="form" v-model="valid" lazy-validation>
                                                <v-select
                                                    v-if="editedIndex == -1"
                                                    v-model="editedItem.usuario_id"
                                                    :rules="usuarioRules"
                                                    :items="usuarios"
                                                    item-text="nome"
                                                    item-value="id"
                                                    append-icon="mdi-account"
                                                    label="Usuario*"
                                                    return-object
                                                    required
                                                    color="#198754"
                                                ></v-select>

                                                <v-select
                                                    v-if="editedIndex == -1"
                                                    v-model="editedItem.livro_id"
                                                    :rules="livroRules"
                                                    :items="livros"
                                                    item-text="nome"
                                                    item-value="id"
                                                    label="Livro*"
                                                    append-icon="mdi-book"
                                                    return-object
                                                    required
                                                    color="#198754"
                                                ></v-select>

                                                <v-menu
                                                    v-if="editedIndex == -1"
                                                    ref="menu1"
                                                    v-model="menu1"
                                                    :close-on-content-click="false"
                                                    :nudge-right="40"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="editedItem.data_aluguel"
                                                            :rules="data_aluguelRules"
                                                            label="Data de aluguel*"
                                                            required
                                                            id="aluguel"
                                                            append-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            @blur="date = parseDate(editedItem.data_aluguel)"
                                                            v-on="on"
                                                            color="#198754"
                                                        ></v-text-field>
                                                    </template>

                                                    <v-date-picker
                                                        :max="nowDate"
                                                        :min="nowDate"
                                                        v-model="date"
                                                        @input="menu1 = false"
                                                        color="#198754"
                                                    ></v-date-picker>
                                                </v-menu>

                                                <v-menu
                                                    v-if="editedIndex == -1"
                                                    v-model="menu2"
                                                    :close-on-content-click="false"
                                                    :nudge-right="40"
                                                    transition="scale-transition"
                                                    offset-y
                                                    max-width="290px"
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="editedItem.data_previsao"
                                                            :rules="data_previsaoRules"
                                                            label="Data de previsão*"
                                                            required
                                                            append-icon="mdi-calendar"
                                                            readonly
                                                            id="previsao"
                                                            v-bind="attrs"
                                                            @blur="date1 = parseDate(editedItem.data_previsao)"
                                                            v-on="on"
                                                            color="#198754"
                                                        ></v-text-field>
                                                    </template>

                                                    <v-date-picker
                                                        v-model="date1"
                                                        :min="nowDate"
                                                        @input="menu2 = false"
                                                        color="#198754"
                                                    ></v-date-picker>
                                                </v-menu>
                                                <v-menu
                                                    v-if="editedIndex != -1"
                                                    v-model="menu3"
                                                    :close-on-content-click="false"
                                                    :nudge-right="40"
                                                    transition="scale-transition"
                                                    offset-y
                                                    max-width="290px"
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="editedItem.data_devolucao"
                                                            :rules="data_devolucaoRules"
                                                            label="Data de devolução*"
                                                            required
                                                            id="devolucao"
                                                            append-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            @blur="date2 = parseDate(editedItem.data_devolucao)"
                                                            v-on="on"
                                                            color="#198754"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                        v-model="date2"
                                                        @input="menu3 = false"
                                                        color="#198754"
                                                    ></v-date-picker>
                                                </v-menu>
                                            </v-form>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="red" text @click="close">
                                            Cancelar
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="reset">
                                            Resetar
                                        </v-btn>
                                        <v-btn color="#198754" text @click="save" :disabled="!valid">
                                            {{ saveEdit }}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip outlined v-if="item.data_devolucao == null" color="primary">
                            Não devolvido
                        </v-chip>
                        <v-chip
                            outlined
                            v-else-if="item.data_devolucao.valueOf() > item.data_previsao.valueOf()"
                            color="red"
                            dark
                        >
                            Com atraso
                        </v-chip>
                        <v-chip outlined v-else color="#198754" dark>
                            No prazo
                        </v-chip>
                    </template>

                    <template v-slot:[`item.acoes`]="{ item }">
                        <v-tooltip v-if="item.data_devolucao != null" top color="red">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mr-2" color="red" @click="deleteItem(item)" v-bind="attrs" v-on="on">
                                    mdi-delete
                                </v-icon>
                            </template>
                            <span>Deletar</span>
                        </v-tooltip>
                        <v-tooltip v-else top color="primary">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mr-2" color="primary" @click="editItem(item)" v-bind="attrs" v-on="on">
                                    mdi-book-check
                                </v-icon>
                            </template>
                            <span>Devolver</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-col>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Livro from '../services/livros';
import Usuario from '../services/usuarios';
import Aluguel from '../services/alugueis';
import Footer from '../components/Footer.vue';

export default {
    name: 'Alugueis',

    components: {
        Footer
    },

    data() {
        return {
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
            alugueis: [],
            usuarios: [],
            livros: [],

            valid: true,

            usuarioRules: [v => (v && v.nome != null) || 'Selecione um Usuário!'],
            livroRules: [v => (v && v.nome != null) || 'Selecione um livro!'],
            data_aluguelRules: [v => !!v || 'Campo data de aluguel é obrigatório!'],
            data_previsaoRules: [
                v => !!v || 'Campo data de previsao é obrigatório!',
                v => (v && v >= this.editedItem.data_aluguel) || 'Data de previsão não pode ser menor que a de aluguel!'
            ],
            data_devolucaoRules: [
                v => !!v || 'Campo data de previsao é obrigatório!',
                v =>
                    (v && v >= this.editedItem.data_aluguel) || 'Data de devolução não pode ser menor que a de aluguel!'
            ],

            dialog: false,
            dialogDelete: false,
            search: '',
            headers: [
                { text: 'Cód.', value: 'id' },
                { text: 'Usuário', value: 'usuario_id.nome' },
                { text: 'Livro', value: 'livro_id.nome' },
                { text: 'Data de aluguel', value: 'data_aluguel' },
                { text: 'Data de previsão', value: 'data_previsao' },
                { text: 'Data de devoluçao', value: 'data_devolucao' },
                { text: 'Status', value: 'status', sortable: false },
                { text: 'Ações', value: 'acoes', sortable: false }
            ],
            editedIndex: -1,
            editedItem: {
                id: '',
                livro_id: {
                    id: '',
                    nome: null,
                    editora: {
                        id: '',
                        nome: '',
                        cidade: ''
                    }
                },
                usuario_id: {
                    id: '',
                    nome: null,
                    endereco: '',
                    cidade: '',
                    email: ''
                },

                data_aluguel: '',
                data_previsao: '',
                data_devolucao: ''
            },

            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            menu1: false,
            menu2: false,
            menu3: false,

            nowDate: new Date().toISOString().slice(0, 10)
        };
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Novo Aluguel' : 'Devolver Livro';
        },
        saveEdit() {
            return this.editedIndex === -1 ? 'Salvar' : 'Devolver';
        },
        computedDateFormatted() {
            return this.formatDate(this.date);
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },

        date(val) {
            this.editedItem.data_aluguel = this.formatDate(this.date);
        },
        date1(val) {
            this.editedItem.data_previsao = this.formatDate(this.date1);
        },
        date2(val) {
            this.editedItem.data_devolucao = this.formatDate(this.date2);
        }
    },

    mounted() {
        this.listar();
        this.getUsuarios();
        this.getLivros();
    },

    methods: {
        listar() {
            Aluguel.listar().then(resposta => {
                this.alugueis = resposta.data;
            });
        },

        getUsuarios() {
            Usuario.listar().then(resposta => {
                this.usuarios = resposta.data;
            });
        },

        getLivros() {
            Livro.listar().then(resposta => {
                this.livros = resposta.data;
            });
        },

        editItem(item) {
            this.editedIndex = this.alugueis.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
            this.$refs.form.resetValidation();
        },

        deleteItem(item) {
            this.editedIndex = this.alugueis.indexOf(item);
            this.editedItem = Object.assign({}, item);

            this.$swal({
                title: 'Tem certeza?',
                text: 'Este aluguel será deletado permanentemente!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#198754',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar!',
                cancelButtonText: 'Cancelar'
            }).then(result => {
                if (result.isConfirmed) {
                    var del = {
                        id: this.editedItem.id,
                        usuario_id: this.editedItem.usuario_id,
                        livro_id: this.editedItem.livro_id,
                        data_aluguel: this.editedItem.data_aluguel,
                        data_previsao: this.editedItem.data_previsao,
                        data_devolucao: this.editedItem.data_devolucao
                    };
                    Aluguel.deletar(del).then(resposta => {
                        this.$swal({
                            title: 'Deletedo!',
                            text: 'Aluguel deletado com sucesso.',
                            icon: 'success',
                            confirmButtonColor: '#198754',
                            confirmButtonText: 'Ok'
                        });

                        if (resposta != null) {
                            this.listar();
                        }
                    });
                }
            });
            this.editedIndex = -1;
        },

        close() {
            this.dialog = false;

            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
            this.$refs.form.resetValidation();
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        reset() {
            this.$refs.form.reset();
        },

        save() {
            if (this.$refs.form.validate()) {
                if (this.editedIndex > -1) {
                    var edit = {
                        id: this.editedItem.id,
                        usuario_id: this.editedItem.usuario_id,
                        livro_id: this.editedItem.livro_id,
                        data_aluguel: this.editedItem.data_aluguel,
                        data_previsao: this.editedItem.data_previsao,
                        data_devolucao: this.editedItem.data_devolucao
                    };
                    Aluguel.alterar(edit).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Aluguel alterado com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                } else {
                    var save = {
                        usuario_id: this.editedItem.usuario_id,
                        livro_id: this.editedItem.livro_id,
                        data_aluguel: this.editedItem.data_aluguel,
                        data_previsao: this.editedItem.data_previsao,
                        data_devolucao: this.editedItem.data_devolucao
                    };
                    Aluguel.salvar(save).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Aluguel salvo com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                }
            }
        },

        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${year}-${month}-${day}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        },
        reseteForm() {
            this.editedItem = {
                id: '',
                livro_id: {
                    id: '',
                    nome: null,
                    editora: {
                        id: '',
                        nome: '',
                        cidade: ''
                    }
                },
                usuario_id: {
                    id: '',
                    nome: null,
                    endereco: '',
                    cidade: '',
                    email: ''
                },

                data_aluguel: '',
                data_previsao: '',
                data_devolucao: ''
            };
            this.reset();
        }
    }
};
</script>

<style>
html,
body {
    height: 100%;
}

#editoras {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.conteudo {
    flex-grow: 1;
}

.icone-menu {
    margin-top: -5px;
    margin-right: 3px;
}

.navbar {
    padding: 5px;
}
</style>
