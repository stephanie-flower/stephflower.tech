<script setup lang="ts">
  import '98.css';
  import Sep from './Sep.vue';
</script>

<template>

    <div>
        <fieldset>
            <div class="toolbar">
                <div class="sep-wrap"><Sep /></div>
                <div class="optn"> <u>F</u>ile </div> 
                <div class="optn"> <u>E</u>dit </div> 
                <div class="optn"> <u>V</u>iew </div> 
                <div class="optn"> <u>G</u>o </div> 
                <div class="optn"> F<u>a</u>vorites </div> 
                <div class="optn"> <u>H</u>elp </div> 
            </div>
        </fieldset>
    </div>

</template>

<style scoped>

    .toolbar {
        display: flex;
        flex-direction: row;
        border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
        height: 18px;
    }

    .optn {
        padding-left: 5px;
        padding-right: 5px;
        margin: 0px;
    }

    fieldset {
        padding: 2px;
    }

    .sep-wrap {
        margin-right: 6px;
    }

</style>