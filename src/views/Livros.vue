<template>
    <div id="livros">
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
                                    <router-link class="nav-link active" to="/livros" href="#"
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
            <v-col cols="11" style="margin: auto; flex: 1">
                <v-data-table
                    :headers="headers"
                    :items="livros"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-5"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="#212529">
                            <v-toolbar-title style="color: white">Lista de Livros</v-toolbar-title>

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
                                        Novo Livro
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
                                                    :counter="30"
                                                    append-icon="mdi-book"
                                                    label="Nome*"
                                                    required
                                                    color="#198754"
                                                ></v-text-field>

                                                <v-select
                                                    v-model="editedItem.editora"
                                                    :rules="editoraRules"
                                                    :items="editoras"
                                                    item-text="nome"
                                                    item-value="id"
                                                    label="Editora*"
                                                    return-object
                                                    append-icon="mdi-bookmark"
                                                    required
                                                    color="#198754"
                                                ></v-select>

                                                <v-text-field
                                                    v-model="editedItem.autor"
                                                    :rules="autorRules"
                                                    :counter="20"
                                                    label="Autor*"
                                                    append-icon="mdi-account"
                                                    required
                                                    color="#198754"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="editedItem.lancamento"
                                                    :rules="lancamentoRules"
                                                    :counter="4"
                                                    label="Lancamento*"
                                                    append-icon="mdi-calendar"
                                                    required
                                                    color="#198754"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="editedItem.quantidade"
                                                    :rules="quantidadeRules"
                                                    append-icon="mdi-numeric"
                                                    label="Quantidade*"
                                                    type="number"
                                                    onkeypress="return event,charCode > 48"
                                                    min="1"
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
                                    <v-card-title class="text-h5">Você deseja deletar este livro?</v-card-title>
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
import Livro from '../services/livros';
import Editora from '../services/editoras';
import Footer from '../components/Footer.vue';

export default {
    name: 'Livros',

    components: {
        Footer
    },

    data() {
        return {
            livro: {
                id: '',
                nome: '',
                editora: {
                    id: '',
                    nome: '',
                    cidade: ''
                },
                autor: '',
                lancamento: '',
                quantidade: ''
            },
            livros: [],
            editoras: [],

            valid: true,
            ano: 0,

            nameRules: [
                v => !!v || 'Campo nome é obrigatório!',
                v => (v && v.length <= 30) || 'O nome deve ter no máximo 30 caractéres! ',
                v => (v && v.length >= 3) || 'O nome deve ter no mínimo 3 caractéres! '
            ],
            autorRules: [
                v => !!v || 'Campo autor é obrigatório!',
                v => (v && v.length <= 30) || 'O autor deve ter no máximo 30 caractéres! ',
                v => (v && v.length >= 3) || 'O autor deve ter no mínimo 3 caractéres! '
            ],
            lancamentoRules: [
                v => !!v || 'Campo lançamento é obrigatório! ',
                v => (v && v >= 1000) || 'O ano deve conter 4 digitos! ',
                v => (v && v <= this.ano) || 'O ano de lançamento não pode ser maior que o ano atual -- ' + this.ano
            ],

            quantidadeRules: [
                v => !!v || 'Campo quantidade é obrigatório!',
                v => (v && v >= 1) || 'A quantidade não pode ser menor que 1! ',
                v => (v && !isNaN(v)) || 'Informe um valor válido'
            ],
            editoraRules: [v => (v && v.nome != null) || 'Escolha uma editora'],

            dialog: false,
            dialogDelete: false,
            search: '',
            headers: [
                { text: 'Cód.', value: 'id' },
                { text: 'Nome', value: 'nome' },
                { text: 'Editora', value: 'editora.nome' },
                { text: 'Autor', value: 'autor' },
                { text: 'Lançamento', value: 'lancamento' },
                { text: 'Quantidade', value: 'quantidade' },
                { text: 'Ações', value: 'acoes', sortable: false }
            ],
            editedIndex: -1,
            editedItem: {
                id: '',
                nome: '',
                editora: {
                    id: '',
                    nome: null,
                    cidade: ''
                },
                autor: '',
                lancamento: '',
                quantidade: ''
            }
        };
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Novo Livro' : 'Editar Livro';
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
        this.getEditoras();
        this.validacaoAno();
    },

    methods: {
        validacaoAno() {
            var data = new Date();
            var anoo = data.getFullYear();

            this.ano = anoo;
        },
        listar() {
            Livro.listar().then(resposta => {
                this.livros = resposta.data;
            });
        },

        getEditoras() {
            Editora.listar().then(resposta => {
                this.editoras = resposta.data;
            });
        },

        editItem(item) {
            this.editedIndex = this.livros.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
            this.$refs.form.resetValidation();
        },

        deleteItem(item) {
            this.editedIndex = this.livros.indexOf(item);
            this.editedItem = Object.assign({}, item);

            this.$swal({
                title: 'Tem certeza?',
                text: 'Este livro será deletada permanentemente!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#198754',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar!',
                cancelButtonText: 'Cancelar!'
            }).then(result => {
                if (result.isConfirmed) {
                    var del = {
                        id: this.editedItem.id,
                        nome: this.editedItem.nome,
                        editora: this.editedItem.editora,
                        autor: this.editedItem.autor,
                        lancamento: this.editedItem.lancamento,
                        quantidade: this.editedItem.quantidade
                    };
                    Livro.deletar(del)
                        .then(resposta => {
                            this.$swal({
                                title: 'Deletedo!',
                                text: 'Livro deletado com sucesso.',
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
            });
            this.editedIndex = -1;
        },

        deleteItemConfirm() {
            this.livros.splice(this.editedIndex, 1);
            this.closeDelete();
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
                        nome: this.editedItem.nome,
                        editora: this.editedItem.editora,
                        autor: this.editedItem.autor,
                        lancamento: this.editedItem.lancamento,
                        quantidade: this.editedItem.quantidade
                    };
                    Livro.alterar(edit).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Livro alterado com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                } else {
                    var save = {
                        nome: this.editedItem.nome,
                        editora: this.editedItem.editora,
                        autor: this.editedItem.autor,
                        lancamento: this.editedItem.lancamento,
                        quantidade: this.editedItem.quantidade
                    };
                    Livro.salvar(save).then(resposta => {
                        if (resposta != null) {
                            Toast.fire('Livro salvo com sucesso!', '', 'success');
                            this.listar();
                            this.close();
                        }
                    });
                }
            }
        },
        reseteForm() {
            this.editedItem = {
                id: '',
                nome: '',
                editora: {
                    id: '',
                    nome: null,
                    cidade: ''
                },
                autor: '',
                lancamento: '',
                quantidade: ''
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
