<template>
  <table class="table">
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Máximo</th>
        <th>Mínimo</th>
        <th>Variação</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quote, index) in quotes" :key="index">
        <td>{{ index }}</td>
        <td>{{ quote.name }}</td>
        <td>{{ quote.high }}</td>
        <td>{{ quote.low }}</td>
        <td>
          <span
            class="label label-rounded text-small"
            :class="{
              'label-error': quote.pctChange < 0,
              'label-success': quote.pctChange > 0,
            }"
            >{{ quote.pctChange }}%</span
          >
        </td>
        <td>
          <a
            v-if="!listenQuotes.includes(index)"
            @click="$emit('listen', index)"
            data-tooltip="Seguir"
            class="btn btn-primary btn-sm tooltip tooltip-left"
            ><i class="icon icon-plus"></i
          ></a>
          <a
            v-else
            data-tooltip="Deixar de seguir"
            class="btn btn-error btn-sm tooltip tooltip-left"
            @click="$emit('unlisten', index)"
          >
            <i class="icon icon-minus"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Object,
      required: true,
    },
    listenQuotes: {
      type: Array,
      required: true,
    },
  },
  emits: ['listen', 'unlisten']
};
</script>
