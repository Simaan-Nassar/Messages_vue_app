<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-text>Please choose an item from the list first</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="close_dialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
  export default {
    props: {
      dialog:{
          type: Boolean,
          required: true
      }  
    },
    methods: {
        close_dialog () {
            this.$emit('close_delete_alert')
        }
    }
  }
</script>