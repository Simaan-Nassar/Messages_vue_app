<template>
<v-container>
<v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      width="150"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon size="50px" v-html="item.icon" @click="action(item.action_name)"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      
        <v-spacer></v-spacer>

        <v-badge left>
        <span slot="badge" v-if="unread_count > 0">{{ unread_count }}</span>
        <v-icon
            large
            color="grey lighten-1"
        >
            mail
        </v-icon>
        </v-badge>
        <span v-if="count > 0"> {{ count }}</span>

    </v-toolbar>
    </v-container>
</template>

<script>

export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    unread_count: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      drawer: true,
      items: [{
          icon: 'add',
          title: 'Add',
          action_name: 'open_new_item_dialog'
        },
        {
          icon: 'delete',
          title: 'Delete',
          action_name: 'remove_item'
        }
      ],
      miniVariant: false,
      title: 'Messages'
     }
   },
   methods: {
       action: function(action_type){
            this.$emit(action_type);
       }
   }
  }

</script>
