<template>
  <div>
    <div>
        App body: {{ $req.t('hello') }}
    </div>
    <a class="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center  uppercase font-bold" href="#lang" ref="btnDropdownRef" v-on:click="toggleDropdown($event)" style="
        width: 6em;
        background: white;
        border: 1px solid #1e293b;
        border-radius: 3px;">
        {{ lang }}
    </a>
    <div ref="popoverDropdownRef" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg" v-bind:class="{hidden: !dropdownPopoverShow, block: dropdownPopoverShow,}">
      <router-link @click="toFr" :to="{name: this.$route.name, params:{lang: 'fr'}}" class="text-sm- py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" style="background-color: transparent !important; color: #1e293b;">
        Français
      </router-link>
      <router-link @click="toEn" :to="{name: this.$route.name, params:{lang: 'en'}}" class="text-sm- py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" style="background-color: transparent !important; color: #1e293b;">
        English
      </router-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "LangDropdown",
  data() {
    return {
      dropdownPopoverShow: false,
      lang: localStorage.language||'EN'
    };
  },
  methods: {
      toggleDropdown: function (event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
          this.dropdownPopoverShow = false;
        } else {
          this.dropdownPopoverShow = true;
          createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
            placement: "top-end",
          });
        }
      },
      reloadPage() {
          window.location.reload();
      },
      toFr () {
          localStorage.setItem('language', 'fr')
          sessionStorage.lang = localStorage.language
          this.lang = (localStorage.language === 'en') ? 'EN' : 'FR'
          this.$route.push({name: this.$route.name, params:{lang: 'fr'}})
          window.location.reload();
      },
      toEn () {
          localStorage.setItem('language', 'en')
          sessionStorage.lang = localStorage.language
          this.lang = (localStorage.language === 'en') ? 'EN' : 'FR'
          this.$route.push({name: this.$route.name, params:{lang: 'en'}})
          window.location.reload();
      }
    },
    mounted() {
        this.lang = (localStorage.language === 'en') ? 'EN' : 'FR'
    }
};
</script>
