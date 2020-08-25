<template>
    <v-container id="fondo">
        <Navbar/>
        <v-row>
            <v-col cols="6">
                <v-card flat color="rgb(0, 0, 0, 0)">
                    <v-card-title  id="tituloTarjeta">Imagenes</v-card-title>
                    <v-divider></v-divider>
                    <Picture/>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card flat color="rgb(255, 255, 255, 0)">
                    <v-card-title id="tituloTarjeta">Información</v-card-title>
                    <v-divider></v-divider>
                    <v-list color="rgb(0, 0, 0, 0)" dense>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Nombre: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.nombre }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Magpsf: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.magpsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Sigmapsf: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.sigmapsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Magpsf Corregido: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.magpsf_corr }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Sigmapsf Corregido: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.sigmapsf_corr }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content id="datoTarjeta" class="white--text">Delta: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet.delta }}</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat color="rgb(0, 0, 0, 0)">
                    <v-card-title  id="tituloTarjeta">Estadisticas</v-card-title>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>
                            <v-card-title id="subtituloTarjeta" class="white--text">Magpsf</v-card-title>
                                <Data :planet_data="magpsf" />
                            <v-divider></v-divider>
                            <v-card-title id="subtituloTarjeta" class="white--text">Sigmapsf</v-card-title>
                                <Data :planet_data="sigmapsf" />
                        </v-col>
                        <v-col>
                            <v-card-title id="subtituloTarjeta" class="white--text">Magpsf Corregido</v-card-title>
                                <Data :planet_data="magpsfCorr" />
                            <v-divider></v-divider>
                            <v-card-title id="subtituloTarjeta" class="white--text">Sigmapsf Corregido</v-card-title>
                                <Data :planet_data="sigmapsfCorr" />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Picture from '@/components/Picture.vue';
import Navbar from '@/components/Navbar.vue';
import Data from '@/components/Data.vue';
import axios from 'axios';
export default {
    name: 'Planet',
    components: {
        Navbar,
        Picture,
        Data
    },
    data: () => ({
        idPlanet: '',
        planet: '',
        magpsf: '',
        magpsfCorr: '',
        sigmapsf: '',
        sigmapsfCorr: ''
    }),
    created () {
        this.idPlanet = this.$route.params.id;
        axios.get('http://localhost:3000/' + this.idPlanet).
        then(res => {
            this.planet = res.data;
            this.magpsf = {
                "value": res.data.magpsf,
                "max": res.data.magpsf_max,
                "min":res.data.magpsf_min,
                "med": res.data.magpsf_med,
                "std":res.data.magpsf_std,
                "prom":res.data.magpsf_prom
            };
            this.magpsfCorr = {
                "value": res.data.magpsf_corr,
                "max": res.data.magpsf_maxCorr,
                "min":res.data.magpsf_minCorr,
                "med": res.data.magpsf_medCorr,
                "std":res.data.magpsf_stdCorr,
                "prom":res.data.magpsf_promCorr
            };
            this.sigmapsf = {
                "value": res.data.sigmapsf,
                "max": res.data.sigmapsf_maxCorr,
                "min":res.data.sigmapsf_minCorr,
                "med": res.data.sigmapsf_medCorr,
                "std":res.data.sigmapsf_stdCorr,
                "prom":res.data.sigmapsf_promCorr
            };
            this.sigmapsfCorr = {
                "value": res.data.sigmapsf_corr,
                "max": res.data.sigmapsf_maxCorr,
                "min":res.data.sigmapsf_minCorr,
                "med": res.data.sigmapsf_medCorr,
                "std":res.data.sigmapsf_stdCorr,
                "prom":res.data.sigmapsf_promCorr
            };
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
    background-color: #3998b5;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
}


#tituloTarjeta{
    font-size: xx-large;
    background-color: aliceblue;
}

#subtituloTarjeta{
    font-size: x-large;
}

#datoTarjeta{
    font-size: large;
}
</style>