<template>
   <div style="width: 100%; padding: 10px; height: 100%">
      <div class="card">
         <div style="display: inline-block">
                <h5>DPO</h5>
            </div>
            <div style="display: inline-block; float: right">
                <Button type="button" icon="pi pi-plus" @click="toggle" style="height: 30px;"/>
                <Menu ref="menu" :model="submenu" :popup="true" />
            </div>
        <DataTable :value="process" removableSort responsiveLayout="scroll">
          <Column field="name" header="Nome" :sortable="true"></Column>
          <Column field="contact" header="Contato" :sortable="true"></Column>
          <Column field="function" header="Função" :sortable="true"></Column>
          <Column field="department" header="Departamento" :sortable="true"></Column>
          <Column header="Ações">
          <template #body="">
                        <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px;"/>
                        <Menu ref="menu" :model="submenu" :popup="true" />
          </template>

          
          </Column>
        
          <!-- <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px"/>
          <Menu ref="menu" :model="submenu" :popup="true" /> -->
        
          
        </DataTable>
      </div>
    </div>

     <div style="width: 100%; padding: 10px; height: 100%">
      <div class="card">
         <div style="display: inline-block">
                <h5>Comitê</h5>
            </div>
            <div style="display: inline-block; float: right">
                <Button type="button" icon="pi pi-plus" @click="toggle" style="height: 30px;"/>
                <Menu ref="menu" :model="submenu" :popup="true" />
            </div>
        <DataTable :value="process" removableSort responsiveLayout="scroll">
          <Column field="name" header="Nome" :sortable="true"></Column>
          <Column field="contact" header="Contato" :sortable="true"></Column>
          <Column field="function" header="Função" :sortable="true"></Column>
          <Column field="department" header="Departamento" :sortable="true"></Column>
          <Column header="Ações">
          <template #body="">
                        <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px;"/>
                        <Menu ref="menu" :model="submenu" :popup="true" />
          </template>

          
          </Column>
        
          <!-- <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px"/>
          <Menu ref="menu" :model="submenu" :popup="true" /> -->
        
          
        </DataTable>
      </div>
    </div>

   
</template>
<script>
import CountryService from "../service/CountryService";
import NodeService from "../service/NodeService";
import ProcessService from "../service/ProcessService";

export default {
  data() {
    return {
      areas: [
        { name: "Financeiro", code: "FN" },
        { name: "Administrativo", code: "ADM" },
        { name: "Jurídico", code: "JD" },
        { name: "Marketing", code: "MKT" },
        { name: "Informática", code: "TI" },
        { name: "Departamento Pessoal", code: "RH" },
        { name: "Setor Fiscal", code: "SF" },
      ],
      grupos: [
        { name: "Dados sensíveis", code: "DS" },
        { name: "Dados públicos", code: "PD" },
        { name: "Dados anonimizados", code: "DA" },
        { name: "Dados pessoais", code: "DP" },
      ],
      unidades: [
        { name: "Matriz", code: "MAT" },
        { name: "Filial 1", code: "F1" },
        { name: "Filial 2", code: "F2" },
      ],
      situacoes: [
        { name: "GAPs identificados", code: "GI" },
        { name: "GAPs não identificados", code: "GN" },
        { name: "GAPs corrigidos", code: "GC" },
      ],
      selectSituacao: null,
      selectUnidade: null,
      selectGrupo: null,
      selectArea: null,
      floatValue: null,
      autoValue: null,
      selectedAutoValue: null,
      autoFilteredValue: [],
      calendarValue: null,
      inputNumberValue: null,
      chipsValue: null,
      sliderValue: 50,
      ratingValue: null,
      colorValue: "1976D2",
      radioValue: null,
      checkboxValue: [],
      switchValue: false,
      processes: null,
      listboxValues: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      listboxValue: null,
      dropdownValues: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      dropdownValue: null,
      multiselectValue: null,
      multiselectValues: [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
      ],
      toggleValue: false,
      selectButtonValues1: [
        { name: "Option 1", code: "O1" },
        { name: "Option 2", code: "O2" },
        { name: "Option 3", code: "O3" },
      ],
      selectButtonValue1: null,
      selectButtonValues2: [
        { name: "Option 1", code: "O1" },
        { name: "Option 2", code: "O2" },
        { name: "Option 3", code: "O3" },
      ],
      selectButtonValue2: null,
      inputGroupValue: false,
      knobValue: 20,
      treeSelectNodes: null,
       customerService: null,
      selectedNode: null,
      customers: null,
            selectedCustomer1: null,
            selectedCustomer2: null,
            filters1: {},
            filters2: {},
            loading: true,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ],
    }
  },
  processService: null,
  countryService: null,
  nodeService: null,
  created() {
    this.countryService = new CountryService();
    this.nodeService = new NodeService();
    this.processService = new ProcessService();

  },
  mounted() {
    this.countryService.getCountries().then((data) => (this.autoValue = data));
    this.nodeService
      .getTreeNodes()
      .then((data) => (this.treeSelectNodes = data));
  
  },
  methods: {
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.autoFilteredValue = [...this.autoValue];
        } else {
          this.autoFilteredValue = this.autoValue.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
  },
};
</script>
