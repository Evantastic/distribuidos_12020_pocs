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
                            <v-list-item-content>Magpsf: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.magpsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Sigmapsf: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.sigmapsf }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Magpsf Corregido: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.magpsf_corr }}</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Sigmapsf Corregido: </v-list-item-content>
                            <v-list-item-content class="align-end">{{ planet.sigmapsf_corr }}</v-list-item-content>
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

                    <v-row>
                        <v-col>
                            <v-card-title>Magpsf</v-card-title>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Promedio: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_prom }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mínimo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_min }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Máximo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_max }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mediana: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_med }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Desviación estandar: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_std }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Delta: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_delta }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                            <v-card-title>Sigmapsf</v-card-title>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Promedio: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_prom }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mínimo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_min }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Máximo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_max }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mediana: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_max }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Desviación estandar: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_max }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Delta: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_max }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                        </v-col>
                        <v-col>
                            <v-card-title>Magpsf Corregido</v-card-title>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Promedio: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_promCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mínimo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_minCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Máximo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_maxCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mediana: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_medCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Desviación estandar: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_stdCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Delta: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.magpsf_deltaCorr }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                            <v-card-title>Sigmapsf Corregido</v-card-title>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Promedio: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_promCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mínimo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_minCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Máximo: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_maxCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Mediana: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_maxCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Desviación estandar: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_maxCorr }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Delta: </v-list-item-content>
                                        <v-list-item-content class="align-end">{{ planet.sigmapsf_maxCorr }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
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