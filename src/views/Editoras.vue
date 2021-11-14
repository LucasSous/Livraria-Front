<template>
    <div id="editoras">
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
                                    <router-link class="nav-link " to="/" aria-current="page" href="#">
                                        <v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-home</v-icon
                                        >Início</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link " to="/usuarios" href="#"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-account-multiple</v-icon
                                        >Usuários</router-link
                                    >
                                </li>

                                <li class="nav-item">
                                    <router-link class="nav-link active" to="/editoras"
                                        ><v-icon
                                            style="color:white; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-bookshelf</v-icon
                                        >Editoras</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link " to="/livros" href="#"
                                        ><v-icon
                                            style="color:#838383; margin-top: -3px; margin-right: 4px; font-size: 20px"
                                            >mdi-book-multiple</v-icon
                                        >Livros</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link " to="/alugueis" href="#"
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
                <v-data-table
                    :headers="headers"
                    :items="editoras"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-5"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="#212529">
                            <v-toolbar-title style="color: white">Lista de Editoras</v-toolbar-title>

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
                                        @click="reseteForm()"
                                        dark
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
                                        Nova Editora
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-form ref="form" v-model="valid" lazy-validation>
                                                <v-text-field
                                                    v-model="editedItem.nome"
                                                    :rules="nameRules"
                                                    append-icon="mdi-bookshelf"
                                                    :counter="30"
                                                    label="Nome*"
                                                    required
                                                    color="#198754"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="editedItem.cidade"
                                                    :rules="cidadeRules"
                                                    :counter="20"
                                                    append-icon="mdi-city"
                                                    label="Cidade*"
                                                    required
                                                    color="#198754"
                                                ></v-text-field>
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
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Você deseja deletar esta editora?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">Sim</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.acoes`]="{ item }">
                        <v-tooltip top color="#198754">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mr-2" color="#198754" @click="editItem(item)" v-bind="attrs" v-on="on">
                                    mdi-pencil
                                </v-icon>
                            </template>
                            <span>Alterar</span>
                        </v-tooltip>
                        <v-tooltip top color="red">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mr-2" color="red" @click="deleteItem(item)" v-bind="attrs" v-on="on">
                                    mdi-delete
                                </v-icon>
                            </template>
                            <span>Deletar</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-col>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Editora from '../services/editoras';
import Footer from '../components/Footer.vue';

export default {
    name: 'Editoras',

    components: {
        Footer
    },

    data() {
        return {
            editora: {
                id: '',
                nome: '',
                cidade: ''
            },
            editoras: [],

            valid: true,

            nameRules: [
                v => !!v || 'Campo nome é obrigatório!',
                v => (v && v.length <= 30) || 'O nome deve ter no máximo 30 caractéres! ',
                v => (v && v.length >= 3) || 'O nome deve ter no mínimo 3 caractéres! ',
                v => /^[A-Za-z ]+$/.test(v) || 'Nome inválido!'
            ],
            cidadeRules: [
                v => !!v || 'Campo cidade é obrigatório!',
                v => (v && v.length <= 20) || 'A cidade deve ter no máximo 30 caractéres! ',
                v => (v && v.length >= 3) || 'A cidade deve ter no mínimo 3 caractéres! ',
                v => /^[A-Za-z ]+$/.test(v) || 'Cidade inválida!'
            ],

            dialog: false,
            dialogDelete: false,
            search: '',
            headers: [
                { text: 'Cód.', value: 'id' },
                { text: 'Nome', value: 'nome' },
                { text: 'Cidade', value: 'cidade' },
                { text: 'Ações', value: 'acoes', sortable: false }
            ],
            editedIndex: -1,
            editedItem: {
                id: 0,
                nome: '',
                cidade: ''
            }
        };
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nova Editora' : 'Editar Editora';
        },
        saveEdit() {
            return this.editedIndex === -1 ? 'Salvar' : 'Editar';
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        }
    },

    mounted() {
        this.listar();
    },

    methods: {
        listar() {
            Editora.listar().then(resposta => {
                this.editoras = resposta.data;
            });
        },

        atualizarform() {
            this.editora = {};
            this.v$.$reset();
        },

        editItem(item) {
            this.editedIndex = this.editoras.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.editoras.indexOf(item);
            this.editedItem = Object.assign({}, item);

            this.$swal({
                title: 'Tem certeza?',
                text: 'Esta editora será deletada permanentemente!',
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
                        nome: this.editedItem.nome,
                        cidade: this.editedItem.cidade
                    };
                    Editora.deletar(del)
                        .then(resposta => {
                            this.$swal({
                                title: 'Deleteda!',
                                text: 'Editora deletada com sucesso.',
                                icon: 'success',
                                confirmButtonColor: '#198754',
                                confirmButtonText: 'Ok'
                            });

                            if (resposta != null) {
                                this.listar();
                            }
                        })
                        .catch(resposta => {
                            if (resposta) {
                                var erro = resposta.response.data.error;
                                this.$swal({
                                    icon: 'error',
                                    text: erro,
                                    confirmButtonColor: '#198754',
                                    confirmButtonText: 'Ok'
                                });
                            }
                        });
                }
                this.editedIndex = -1;
            });
        },

        deleteItemConfirm() {
            this.editoras.splice(this.editedIndex, 1);
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
            this.editedIndex = -1;
        },

        reset() {
            this.$refs.form.reset();
        },

        save() {
            if (this.$refs.form.validate()) {
                if (this.editedIndex > -1) {
                    var edit = {
                        id: this.editedItem.id,
                        nome: this.editedItem.nome,
                        cidade: this.editedItem.cidade
                    };
                    Editora.alterar(edit).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Editora alterada com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                    this.reset();
                } else {
                    var save = {
                        nome: this.editedItem.nome,
                        cidade: this.editedItem.cidade
                    };
                    Editora.salvar(save).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Editora salva com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                    this.reset();
                }
            }
        },

        reseteForm() {
            this.editedItem = {
                id: 0,
                nome: '',
                cidade: ''
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
