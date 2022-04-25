<template>
  <div class="container grid-lg my-2 py-2">
    <div class="card mb-2" v-if="listenQuotes.length > 0">
      <div class="card-header">
        <div class="h4">Acompanhando</div>
      </div>
      <div class="card-body">
        <watch-list-quotes :listenQuotes="listenQuotes" @unlisten="onUnlisten"/>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="h4">Todas as moedas</div>
      </div>
      <div class="card-body">
        <list-quotes
          :quotes="quotes"
          :listenQuotes="listenQuotes"
          @listen="onListen"
          @unlisten="onUnlisten"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import api from '@/services/api';
import ListQuotes from '@/components/ListQuotes.vue';
import WatchListQuotes from '@/components/WatchListQuotes.vue';

export default {
  name: 'App',
  components: {
    ListQuotes,
    WatchListQuotes,
  },
  setup() {
    const data = reactive({
      quotes: {},
      listenQuotes: [],
    });

    onMounted(async () => {
      try {
        const response = await api.getAll();
        data.quotes = response.data;
      } catch (error) {
        console.log('Erro:' + error);
      }
    });

    function onListen(code){
      data.listenQuotes.push(code);
    }
    function onUnlisten(code){
      data.listenQuotes = data.listenQuotes.filter(index => index !== code);
    }

    return { ...toRefs(data), onListen, onUnlisten };
  },
};
</script>
