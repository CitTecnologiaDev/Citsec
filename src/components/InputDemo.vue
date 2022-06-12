<template>
  <!-- <div class="grid p-fluid"> -->
  <div
    style="
      position: center;
      width: 100%;
      height: 100%;
      left: 25px;
      top: 34px;
      padding-top: 20px;
      background: #ffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
    "
  >
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:100"
      rel="stylesheet"
    />
    <!-- <span
      class="p-float-label"
      style="
        width: 850px;
        height: 33px;
        left: 15px;
        padding-top: 20px;
      "
    >
      <p
        style="
          font-family: 'Montserrat', sans-serif;
          color: #000000;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
        "
      >
        Home / Page 01 / Page 02 / Page 03
      </p>
    </span> -->
    <span
      class="p-float-label"
      style="
        width: 850px;
        height: 40px;
        left: 15px;
        padding-top: 10px;
        
        
        <!-- background: #bc3; -->
      "
    >
      <p
        style="
          font-family: 'Montserrat', sans-serif;
          color: #000000;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          padding-top: 10px;
        "
      >
        Mapeamento de processos, dados e registro de atividades
      </p>
    </span>
    <div
      style="
        display: inline-block;
        width: 100%;
        height: 70px;
        left: 15px;
        padding: 10px;
        <!-- background: #af2; -->
      "
    >
      <span class="p-input-icon-right">
        <InputText
          type="text"
          v-model="value2"
          placeholder="Buscar"
          style="width: 313px; height: 33px; left: 54px; top: 5px"
        />
        <i class="pi pi-search" />
      </span>

      <span>
        <Dropdown
          v-model="selectArea"
          :options="areas"
          optionLabel="name"
          placeholder="Áreas"
          style="width: 313px; height: 33px; left: 16px; top: 5px"
        />
      </span>

      <span style="padding-left: 20px">
        <Dropdown
          v-model="selectGrupo"
          :options="grupos"
          optionLabel="name"
          placeholder="Grupos"
          style="width: 313px; height: 33px; left: 16px; top: 5px"
        />
      </span>
    </div>

    <div
      style="
        display: inline-block;
        width: 100%;
        height: 70px;
        left: 15px;
        padding-top: 0px;
        padding-left: 10px;
        <!-- background: #abc; -->
      "
    >
      <span>
        <Dropdown
          v-model="selectUnidade"
          :options="unidades"
          optionLabel="name"
          placeholder="Unidades"
          style="width: 313px; height: 33px; top: 5px"
        />
      </span>

      <span style="padding-left: 15px">
        <Dropdown
          v-model="selectSituacao"
          :options="situacoes"
          optionLabel="name"
          placeholder="Situação"
          style="width: 313px; height: 33px; top: 5px"
        />
      </span>

      <a
        class="font-medium no-underline ml-2 text-right cursor-pointer"
        style="color: #3783c6; padding-left: 20px"
        >Limpar filtros</a
      >
    </div>

    <div style="width: 100%; padding: 10px; height: 100%">
      <div class="card">
        <DataTable :value="process" removableSort responsiveLayout="scroll">
          <Column field="id" header="ID" :sortable="true"></Column>
          <Column field="name" header="Nome" :sortable="true"></Column>
          <Column field="description" header="Descrição" :sortable="true"></Column>
          <Column field="area" header="Área" :sortable="true"></Column>
          <Column field="group" header="Grupo" :sortable="true"></Column>
          <Column field="unity" header="Unidade" :sortable="true"></Column>
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

    <!-- <div class="card">
            <h5>Removable Sort</h5>
            <DataTable :value="products" removableSort responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
    </div> -->

    <div style="width: 100%; height: 100px; padding: 30px">
      <span>
        <Button
          label="Novo Mapeamento"
          style="float: right; width: 220px; height: 32px; padding-right: 29px" @click="$router.push('app/mapeamento')"
        />
      </span>
    </div>
  </div>
</template>
<script>
import CountryService from "../service/CountryService";
import NodeService from "../service/NodeService";
import ProcessService from "../service/ProcessService";
import ProductService from "../service/ProductService";

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
      submenu: [
        {
					label: 'Finalidade/Base Legal',
				},
				{
					// label: 'Exportar',
          // formatos: [{label: 'PDF'},
          //           {label: 'Excel'}]
          label: 'Exportar',
          items: [{label: 'PDF', icon: 'pi pi-download'},
                {label: 'Excel', icon: 'pi pi-download'}]
				},
				{
          label: 'Opções',
					items: [{label: 'Revisões'},
                {label: 'Alterar situações'},
                {label: 'Excluir'}]
          
          // label: 'Revisões',
				},
				// {
        //   label: 'Alterar situações',
        // },
        // {
        //   label: 'Excluir',
        // },
      ],
      products: null,
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
      selectedNode: null,
    };
  },
  productService: null,
  processService: null,
  countryService: null,
  nodeService: null,
  created() {
    this.countryService = new CountryService();
    this.nodeService = new NodeService();
    this.processService = new ProcessService();
    this.productService = new ProductService();
  },
  mounted() {
    this.countryService.getCountries().then((data) => (this.autoValue = data));
    this.nodeService
      .getTreeNodes()
      .then((data) => (this.treeSelectNodes = data));
    this.processService.getProcessSmall().then((data) => (this.process = data));
    this.productService.getProductsSmall().then(data => this.products = data);
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
    formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
};
</script>
