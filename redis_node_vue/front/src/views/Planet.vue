<template>
    <v-container id="fondo">
        <Navbar/>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Imagenes</v-card-title>
                    <v-divider></v-divider>
                    <Picture/>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Información</v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-item>
                            <v-list-item-content>Nombre: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.nombre }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Eje x: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.x }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Eje y: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.y }}</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Estadisticas</v-card-title>

                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-item>
                            <v-list-item-content>Promedio: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.promedio }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Error: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.error }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Desviación Estandar: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.desviacion }}</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Picture from '@/components/Picture.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
export default {
    name: 'Planet',
    components: {
        Navbar,
        Picture
    },
    data: () => ({
        idPlanet: '',
        planet: ''
    }),
    created () {
        this.idPlanet = this.$route.params.id;
        axios.get('http://localhost:3000/' + this.idPlanet).
        then(res => {
            this.planet = res.data;
        }).catch(
            e => {
                console.log(e.response);
            }
        );
    }
}
</script>

<style>
#fondo{
    background-image: url("../assets/galaxy.jpg");
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
}

#fondo:before {
	content:'';
	position: absolute;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.3);
}
</style>