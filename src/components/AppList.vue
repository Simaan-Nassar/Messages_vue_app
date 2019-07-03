<template>
  <v-layout fill-height>
    <v-flex fill-height>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        v-model="search_str"
        ></v-text-field>
        <v-list>
          <template v-for="item in filteredList" >
            <v-list-tile
              :key="item.index"
              :class="{unread:!item.read, read:item.read, unselected:!item.selected, selected:item.selected}"
              @click="select(item)"
            >
              <v-list-tile-content>
                <v-list-tile-title >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </template>
        </v-list>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        search_str: '',
      }
    },

    props: {
        items: {
            type: Array,
            required: true
        },
    },

    computed: {
      filteredList() {
        return this.items.filter(item => {
          return item.title.toLowerCase().includes(this.search_str.toLowerCase())
        });
      }
    },
    methods: {
      select(item) {
        this.$emit('select',item);
      }
    }
  }
</script>

<style>
  .read {
    color: gray
  }

  .unread {
    color: blue
  }

  .unselected {
    background-color: whitesmoke
  }

  .selected {
    background-color: lightskyblue
  }

</style>


