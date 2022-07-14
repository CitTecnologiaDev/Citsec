<template>

<div
    style="
      position: center;
      width: 100%;
      height: 100%;
      left: 25px;
      top: 34px;
      background: #ffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
    "
  >


        <div style="width: 100%; padding: 20px; height: 100%">
            <DataTable :value="laws" stripedRows responsiveLayout="scroll">
                <Column field="name" header="Nome"></Column>
                <Column field="law" header="Referência Lei"></Column>
                <Column field="description" header="Descrição técnica"></Column>
            </DataTable>
        </div>
</div>

</template>

<script>
import LawService from '../service/LawService';

export default {
    data() {
        return {
            laws: null
        }
    },
    lawService: null,
    created() {
        this.lawService = new LawService();
    },
    mounted() {
        this.lawService.getLawsSmall().then(data => this.laws = data);
    }
}
</script>                