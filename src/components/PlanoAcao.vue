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
    <div>
      <Breadcrumb :home="home" :model="items" />
    </div>

    <div class="card" style="padding: 20px">
      <DataTable
        :value="plan"
        editMode="cell"
        @cell-edit-complete="onCellEditComplete"
        class="editable-cells-table"
        responsiveLayout="scroll"
      >
        <Column field="name" header="Tarefa" />
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
          style="width: 25%"
        >
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus/>
          </template>
        </Column>
        <Column header="Previsão">
          <template #editor="{ data, field }">
            <InputMask v-model="data[field]" mask="99/99/9999" slotChar="dd/mm/yyyy" style="width: 8rem"/>
          </template>
        </Column>
        <Column
          header="Status"
        >
          <template #body="">
            <SplitButton label="Pendente" :model="options" class="p-splitbutton p-component p-button-text p-button-warning mb-2">
              
            </SplitButton>
            <!-- <Button
              label="Planejado"
              class="p-button-raised p-button-rounded"
            />
            <Button
              label="Em andamento"
              class="p-button-raised p-button-rounded"
            />
            <Button label="Feito" class="p-button-raised p-button-rounded" />
            <Button label="Checkado" class="p-button-raised p-button-rounded" /> -->
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import PlanService from "../service/PlanService";
import ProcessService from "../service/ProcessService";

export default {
  data() {
    return {
      selectedColaborator: null,
      processes: null,
      colaborators: [
        { name: "Charles" },
        { name: "Igor" },
        { name: "Deise" },
        { name: "André" },
      ],
      home: { icon: "pi pi-home", to: "/dashboard" },
      items: [{ label: "Plano de ações" }],
      options: [{ label: "Pendente" }, { label: "Planejado" }, { label: "Em andamento" }, { label: "Feito" }, { label: "Checkado" }],
      plan: null,
      editingRows: [],
      columns: null,
    };
  },
  planService: null,
  processService: null,
  created() {
    this.planService = new PlanService();
    this.processService = new ProcessService();
    

    this.columns = [
      // {field: 'tarefa', header: 'Tarefa'},
      { field: "medida", header: "Medida Corretiva" },
      // { field: "previsao", header: "Previsão" },
      { field: "motivo", header: "Motivo" },
      {field: 'colaborador', header: 'Responsável'},
      { field: "area", header: "Área envolvida" },
      { field: "custo", header: "Custo" },
      // {field: 'status', header: 'Status'}
    ];
  },
  mounted() {
    this.planService.getPlansSmall().then((data) => (this.plan = data));
    this.processService.getProcessSmall().then((data) => (this.process = data));
  },
  methods: {
    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      switch (field) {
        default:
          if (newValue.trim().length > 0) data[field] = newValue;
          else event.preventDefault();
          break;
      }
    },
  },
  computed: {},
};
</script>
