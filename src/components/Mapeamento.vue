<template>
  <!-- <div class="grid p-fluid"> -->
  <div
    style="
      position: center;
      width: 100%;
      height: 730px;
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
    <span
      class="p-float-label"
      style="
        width: 750px;
        height: 33px;
        left: 15px;
        padding-top: 20px;
        <!-- background: #f32; -->
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
    </span> 
    <span
      class="p-float-label"
      style="
        width: 750px;
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

    <!-- <div style="display: inline-block; width: 500px; background: #aef">
          <InputText class="p-inputtext-lg"
              type="text"
              placeholder="Descrição do processo"
              style="width: 400px; height: 220px"
            />
    </div> -->


    <div style="width: 100%; padding-top: 20px; height: 400px">
      <div
        style="
          width: 100%;
          height: 40px;
          left: 15px;
          padding-left: 10px;
          display: inline-block;
        "
      >
        <span class="p-input-icon-right">
          <InputText
            type="text"
            v-model="value2"
            placeholder="Nome do processo"
            style="width: 535px; height: 33px; left: 54px; top: 5px"
          />
        </span>

      </div>

      <div style="width: 45%; height: 200px; float: right; padding-right: 30px; padding-top: 15px; padding-left: 30px">
          <Textarea v-model="value" :autoResize="true" rows="5" cols="20" 
              placeholder="Descrição do processo"
              style="width: 100%; height: 166px; margin-right: 15px;"
            />
      </div>

      <div
        style="
          width: 100%;
          height: 40px;
          left: 15px;
          padding: 10px;
          
        "
      >
        <span style="padding-right: 15px">
          <InputText
            type="text"
            v-model="value2"
            placeholder="Papel da empresa no processo"
            style="width: 260px; height: 33px; left: 54px; top: 5px"
          />
        </span>

        
          <Dropdown
          v-model="selectGrupo"
            :options="grupos"
            optionLabel="name"
            placeholder="Grupo do processo"
            style="width: 260px; height: 33px; top: 5px;"
          />
       

      </div>

      <div
        style="
          
          width: 100%;
          height: 40px;
          left: 15px;     
          padding: 10px;
         
        "
      >

        <span style="padding-right: 15px">
          <InputText
            type="text"
            v-model="value2"
            placeholder="Ativos organizacionais"
            style="width: 260px; height: 33px; left: 54px; top: 5px"
          />
        </span>

       
          <Dropdown
            v-model="selectUnidade"
            :options="unidades"
            optionLabel="name"
            placeholder="Unidade responsável"
            style="width: 260px; height: 33px; top: 5px;"
          />
        

      </div>

      <div
        style="
        
          width: 100%;
          height: 40px;
          left: 15px;
          padding-top: 15px;
          padding-left: 10px;  
        "
      >

      <span style="padding-right: 15px">
          <InputText
            type="text"
            v-model="value2"
            placeholder="Responsável"
            style="width: 260px; height: 33px; left: 54px; top: 10px"
          />
      </span> 

        
          <InputText
            type="text"
            v-model="value2"
            placeholder="Contato"
            style="width: 260px; height: 33px; left: 54px; top: 5px; padding-left: 15px"
          />
        

      </div>

      <div
        style="
         
          width: 100%;
          height: 40px;
          left: 15px;
          padding: 10px;
          
        "
      >

         
          <Dropdown
            v-model="selectArea"
            :options="areas"
            optionLabel="name"
            placeholder="Área responsável"
            style="width: 260px; height: 33px; top: 5px;"
          />
          

      </div> 


    </div>

     <!-- <div style="width: 750px; background: #abc; padding-top: 20px; height: 500px; display: inline-block">
      <div
        style="
          width: 700px;
          height: 40px;
          left: 15px;
          padding-left: 10px;
          background: #FEC;
        "
      > -->
        
          <!-- <InputText
            type="text"
            v-model="value2"
            placeholder="Descrição do processo"
            
          /> -->
        

      <!-- </div> -->
    <!-- </div> -->

  

<!--     
    <div style="width: 250px; background: #aef; display: inline-block">

        
            <InputText class="p-inputtext-lg"
            type="text"
            placeholder="Descrição do processo"
            style="width: 200px; height: 220px; top: 5px"
            />
            
       

    </div> -->

    <div style="width: 100%; height: 100px; padding-right: 20px; padding-top: 30px">
    
      
        <Button
          label="Salvar processo"
          style="float: right; width: 220px; height: 32px;"
        />
      
      
        <Button
          label="Cancelar"
          style="float: right; width: 220px; height: 32px; background-color: white; margin-right: 15px; color: #2196F3" @click="$router.push('app/input')"
        />
     
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
      selectedNode: null,
    };
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
    this.processService.getProcessSmall().then((data) => (this.process = data));
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
