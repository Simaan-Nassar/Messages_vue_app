<template>
  <v-layout row justify-center>
    <v-dialog v-model="show_newitem_dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add Item</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field ref="item_name" label="Item name" v-model="value" @keyup.enter="add"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
           <big class="err">{{ err_msg }}</big>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.prevent="close">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.prevent="add">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
  export default {
    props: {
        show_newitem_dialog: {
            type: Boolean,
            required: true
        }
    },
    data : function() {
        return {
            value: '',
            err_msg: ''
        }
    },
    methods: {
        add: function() {
            if (this.value.trim()){
                this.$emit('additem',this.value);
                this.value = ''
            }else {
                this.err_msg = "Please enter non empty item name";
            }
            
        },
        close: function(){
            this.value = '';
            this.$emit('closedialog');
            this.err_msg = ''
        }
    },
    watch: {
        value: function(){
            if(this.value.trim()){
                this.err_msg = ''
            }
        },
        show_newitem_dialog: function(){
            this.$refs.item_name.focus();
        }
    },
    
  }
</script>

<style scoped>
.err {
    color: red;
    background-color: white;
}
</style>
