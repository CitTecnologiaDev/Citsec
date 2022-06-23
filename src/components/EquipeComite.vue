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

<!-- <div style="width: 100%; padding: 10px; height: 100%">
    <div class="card">
            <h5>Session Storage</h5>
            <DataTable :value="dpo" :paginator="true" :rows="10" v-model:filters="filters1"
                v-model:selection="selectedDpo1" selectionMode="single" dataKey="id" responsiveLayout="scroll">
                <template #header>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters1['global'].value" placeholder="Procure pelo nome" />
                    </span>
                </template>
                <Column field="name" header="Name" :sortable="true" style="width:25%">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters1['country.name']" class="p-column-filter"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
        </div>
</div> -->
   
</template>
<script>
import CountryService from "../service/CountryService";
import NodeService from "../service/NodeService";
import ProcessService from "../service/ProcessService";
import DpoService from "../service/DpoService";

export default {
  data() {
    return {
      dpo: null,
            selectedDpo1: null,
            selectedDpo2: null,
            filters1: {},
            filters2: {},
            loading: true,
            // representatives: [
            //     {name: "Deisiele Souza", image: 'amyelsner.png'}
            // ],
            // statuses: [
            //     'Disponível', 'Não disponível'
            // ],
      // dpoService: null,
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

    // this.dpoService = new DpoService();
    //     this.initFilters1();
    //     this.initFilters2();

  },
  mounted() {
    this.countryService.getCountries().then((data) => (this.autoValue = data));
    this.nodeService
      .getTreeNodes()
      .then((data) => (this.treeSelectNodes = data));

      //  this.dpoService.getCustomersMedium().then(data => this.dpo = data);
  
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

    //  initFilters1() {
    //         this.filters1 = {
    //             'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
    //         }
    //     },
    //     initFilters2() {
    //         this.filters2 = {
    //             'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
    //         }
    //     }



  },
};
</script>
