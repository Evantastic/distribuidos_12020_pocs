<template>
    <v-list  color="rgb(0, 0, 0, 0)" dense>
        <v-list-item>
            <v-list-item-content id="datoTarjeta" class="white--text">Promedio: </v-list-item-content>
            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet_data.prom }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content id="datoTarjeta" class="white--text">Mínimo: </v-list-item-content>
            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet_data.min }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content id="datoTarjeta" class="white--text">Máximo: </v-list-item-content>
            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet_data.max }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content id="datoTarjeta" class="white--text">Mediana: </v-list-item-content>
            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet_data.med }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content id="datoTarjeta" class="white--text">Desviación estandar: </v-list-item-content>
            <v-list-item-content id="datoTarjeta" class="align-end white--text">{{ planet_data.std }}</v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'Data',
    props: {
        planet_data: Object
    }
}
</script>