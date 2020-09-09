<template>
    <v-container id="fondo">
        <Navbar/>
        <v-row>
            <v-col cols="6">
                <v-card  flat>
                    <v-card-title  id="tituloTarjeta">Imagenes</v-card-title>
                    <v-divider></v-divider>
                    <Picture/>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card flat >
                    <v-card-title id="tituloTarjeta">Información</v-card-title>
                    <v-divider></v-divider>
                    <v-list color="rgb(255,255,255)" dense>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Nombre: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.nombre }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Magpsf: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.magpsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Sigmapsf: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.sigmapsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Magpsf Corregido: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.magpsf_corr }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Sigmapsf Corregido: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.sigmapsf_corr }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-icon id="flecha">mdi-circle-medium</v-icon>
                            <v-list-item-content id="datoTarjeta" >Delta: </v-list-item-content>
                            <v-list-item-content id="datoTarjeta2" class="align-end ">{{ planet.delta }}</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card  >
                    <v-card-title  id="tituloTarjeta">Estadisticas</v-card-title>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>
                            <v-card-title  id="subtituloTarjeta" >Magpsf</v-card-title>
                                <Data :planet_data="magpsf" />
                            <v-divider></v-divider>
                            <v-card-title id="subtituloTarjeta" >Sigmapsf</v-card-title>
                                <Data :planet_data="sigmapsf" />
                        </v-col>
                        <v-col>
                            <v-card-title id="subtituloTarjeta" >Magpsf Corregido</v-card-title>
                                <Data :planet_data="magpsfCorr" />
                            <v-divider></v-divider>
                            <v-card-title id="subtituloTarjeta" >Sigmapsf Corregido</v-card-title>
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
    background-image: url("../assets/fondo1.png");
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
}


#tituloTarjeta{
    font-size: xx-large;
    background-color: #f86525;
    color: white;
}

#subtituloTarjeta{
    font-size: x-large;
    color:#f86525; 
}

#datoTarjeta{
    font-size: large;
}

#datoTarjeta2{
    font-size: large;
    font-weight: bold;
}
</style>