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
                <Column header="Ações">
                    <template #body="">
                        <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px;"/>
                        <Menu ref="menu" :model="submenu" :popup="true" />
                    </template>
                </Column>
            </DataTable>
        </div>

    <div style="width: 100%; height: 100px; padding: 30px">
      <span>
        <Button
          label="Adicionar"
          style="float: right; width: 220px; height: 32px; padding-right: 29px"
        />
        
      </span>
    </div>

</div>

</template>

<script>
import LawService from '../service/LawService';

export default {
    data() {
        return {
            laws: null,
            submenu: [
            {
                label: 'Opções',
                items: [
                {label: 'Editar'},
                {label: 'Excluir'}]
                
			},
            ],
        }
    },
    lawService: null,
    created() {
        this.lawService = new LawService();
    },
    mounted() {
        this.lawService.getLawsSmall().then(data => this.laws = data);
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
    },
}
</script>                