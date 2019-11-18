<template>
  <v-navigation-drawer
    :mini-variant.sync="miniVariant"
    clipped
    v-model="visability"
    mobile-break-point="1025"
    class="primary main-navigation"
    :style="{ marginTop: '52px'}"
    fixed
    dark
    app
  >
    <v-list dense>
      <template
        v-for="(item, i) in items"
        v-show="!item.hide"
      >
        <v-list-group
          v-if="item.children"
          :ref="'group_' + i"
          @input="onGroupInput({item: item, i: i, event: $event})"
          :value="groupValue(item)"
          :key="item.title"
          :append-icon="miniVariant ? '' : '$vuetify.icons.expand'"
        >
          <v-list-tile
            slot="activator"
            @click="toRoute(item)"
            exact
            exact-active-class="accent--text"
            :class="{ 'accent--text': !item.href ? isHaveActiveChild(item) : false }"
          >
            <v-list-tile-action>
              <span class="sidebar-icon" v-if="item.icon" v-html="item.icon"></span>
              <v-icon
                v-if="item.icon_material"
                size="20"
                :class="{ 'accent--text': !item.href ? isHaveActiveChild(item) : false }"
              >
                {{ item.icon_material }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, idx) in item.children"
            v-show="!child.hide"
            :to="child.to ? { name: child.to.name, params: child.to.params } : $route.path"
            :key="idx"
            exact
            exact-active-class="accent--text"
            :class="{ 'accent--text': child.to ? isHaveActiveChild(child) : false, 'pl-4': !miniVariant}"
          >
            <v-list-tile-action>
              <template v-if="child.icon">
                <v-icon size="7" v-if="isHaveActiveChild(child)">
                  {{ child.icon_active }}
                </v-icon>
                <v-icon size="7" v-else>
                  {{ child.icon }}
                </v-icon>
              </template>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="item.title"
          @click="toRoute(item)"
          exact
          exact-active-class="accent--text"
          :class="{ 'accent--text': !item.href ? isHaveActiveChild(item) : false }"
        >
          <v-list-tile-action>
            <span class="sidebar-icon" v-if="item.icon" v-html="item.icon"></span>
            <v-icon
              v-if="item.icon_material"
              size="20"
              :class="{ 'accent--text': !item.href ? isHaveActiveChild(item) : false }"
            >
              {{ item.icon_material }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import config from '~/utils/configs/aSideBar.js'
// import icons from '~/assets/img/icons/index.js'
// import { equals } from 'ramda'

export default {
  name: 'ASideBar',
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      miniVariant: true,
      visability: true
    }
  },
  beforeMount() {
    this.visability = !(window.innerWidth <= 1024)
  },
  methods: {
    onGroupInput({ item, i, event }) {
      // this.$refs['group_' + i][0].isActive = this.groupValue(item)
      this.$refs['group_' + i][0].isActive = event;
    },
    toRoute(item) {
      if (item.href) { window.location = item.href };
      if (item.to) {
        this.$router.push(!item.to.path ? { name: item.to.name, query: item.to.query } : item.to.path);
      }
    }
  },
  computed: {
    groupValue() {
      return function (item) {
        return this.isHaveActiveChild(item);
      }
    },
    items() {
      return config();
    },
    isHaveActiveChild() {
      return function (item) {
        const isContain = (objPath, objRoute) => {
          let state = true;
          for (const i in objPath) {
            if (objRoute[i]) {
              if (objRoute[i] !== objPath[i]) { state = false }
            }
          }
          return state
        }
        const checkRoute = (path) => {
          return path && this.$route.name === path.name &&
            (path.params ? isContain(path.params, this.$route.params) : true) &&
            (path.query ? isContain(path.query, this.$route.query) : true) &&
            (path.hash && this.$route.hash ? isContain(path.hash, this.$route.hash) : true)
        }
        if (item.to) {
          return checkRoute(item.to);
        }
        if (item.children) {
          return item.children.reduce((acc, it) => acc || checkRoute(it.to), false)
        }
        return false
      }
    }
  },
  watch: {
    value(val) {
      if (window.innerWidth > 1024) {
        this.miniVariant = val
        this.visability = true
      } else {
        this.miniVariant = false
        this.visability = val
      }
    },
    miniVariant(val) {
      if (window.innerWidth > 1024) {
        this.$emit('input', val)
      }
    },
    visability(val) {
      if (window.innerWidth <= 1024) {
        this.$emit('input', val)
      }
    }
  },
}
</script>

<style lang="scss" scoped>

  .sidebar-icon {
    width: 22px;
    height: 22px;
    color: $c--white;

    ::v-deep svg path {
      fill: white;
    }
  }

  .accent--text {
    color: $c--general-orange;

    .sidebar-icon {
      ::v-deep svg path {
        fill: orange;
      }
    }
  }

  .v-list__tile__title {
    font-size: 12px;
    text-transform: uppercase;
  }
  .v-list__tile__action{
    min-width: 44px;
  }
</style>
<style lang="scss">
  .main-navigation{
    .v-list__tile {
      padding-right: 0;
    }
  }
</style>
