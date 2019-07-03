<template>
  <v-app>
    <v-content>
      <app-tool-bar-navigation-drawer 
      :unread_count="unread_count" 
      :count="count" 
      @open_new_item_dialog="open_new_item_dialog"
      @remove_item="remote_item"
      ></app-tool-bar-navigation-drawer>
	    <app-list :items="items" @select="select"/>
    </v-content>
    <v-footer app>
      <span> Intel task - 2018</span>
    </v-footer>
    <add-item-dialog :show_newitem_dialog="show_newitem_dialog" @additem="add_item" @closedialog="close_newitem_dialog"></add-item-dialog>
    <simple-dialog :dialog="show_delete_alert" @close_delete_alert="show_delete_alert=false"></simple-dialog>  
  </v-app>
</template>

<script>
import AppToolBarNavigationDrawer from './components/AppToolBarNavigationDrawer.vue';
import AppList from './components/AppList.vue';
import AddItemDialog from './components/AddItemDialog.vue';
import SimpleDialog from './components/SimpleDialog.vue';


export default {
  name: 'App',
  components: {
    AppToolBarNavigationDrawer,
    AppList,
    AddItemDialog,
    SimpleDialog,
  },

  data () {
    return {
        items: [],
        index: 0,
        show_newitem_dialog: false,
        selected_item: null,
        unread_count: 0,
        show_delete_alert: false
    }
  },

  computed: {
    count: function(){
      return this.items.length;
    },
  },

   methods: {
    open_new_item_dialog: function(){
        this.show_newitem_dialog = true;
    },

    remote_item: function(){
      if (this.selected_item == null) {
        this.show_delete_alert = true;
      }else{
        var index = this.items.indexOf(this.selected_item);
        this.items.splice(index,1);
        this.selected_item = null;
      }
    },

    close_add_form: function(){
        this.show_newitem_dialog = true;
    },

    add_item: function(item_name) {
      var new_item = {
        title: item_name,
        read: false,
        selected: false,
        index: this.index,
      };
      this.index += 1;
      this.items.unshift(new_item);
      this.show_newitem_dialog = false;
      this.unread_count += 1;
    },

    close_newitem_dialog: function(){
      this.show_newitem_dialog = false;
    },

    select (item) {
        if(!item.read) {
          item.read = true;
          this.unread_count -= 1;
        }
        item.selected = true;
        if (this.selected_item == null) {
            this.selected_item = item
        }else {
            if (item.index != this.selected_item.index) {
              this.selected_item.selected = false;
              this.selected_item = item
            }
        }
    }
  }
}
</script>



<style>
  .chartwrapper {
    width: 100 px;
    max-height: 500px;
    height: 100 px;
    background-color: rgb(70, 147, 83);
  }
</style>

