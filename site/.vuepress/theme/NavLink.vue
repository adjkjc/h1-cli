<template>
  <router-link
    class="nav-link"
    :to="link"
    v-bind:class="item.class"
    v-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    v-bind:class="linkClass"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <i v-if="!!item.icon" v-bind:class="item.icon"></i>
    {{ item.text }}
    <OutboundLink v-if="!!item.skipOutgoingLink"/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from './util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },
    linkClass () {
        return Object.assign({}, {'nav-link': true, 'external': true, }, this.item.class);
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
