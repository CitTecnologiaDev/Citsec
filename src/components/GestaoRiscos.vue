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

<div style="display: table;
    margin: 0 auto; padding-top: 20px"> 
  <div class="risk-matrix-box">
	<p class="likelihoodText">Probabilidade</p>
	<div class="responsive-table">
	<p class="impactText">Impacto</p>
	<table class="table table-bordered table-responsive text-center">
	<tbody>
		<tr>
			<td></td>
			<td class="td-top-header">Menor</td>
			<td class="td-top-header">Moderado</td>
			<td class="td-top-header">Alto</td>
			<td class="td-top-header">Crítico</td>
		</tr>
		<tr>
			<td class="td-left-header">76-100%</td>
			<td class="td-yellow">0</td>
			<td class="td-red">0</td>
			<td class="td-red">0</td>
			<td class="td-red">0</td></tr>
		<tr>
			<td class="td-left-header">51-75%</td>
			<td class="td-yellow">0</td>
			<td class="td-yellow">0</td>
			<td class="td-yellow">0</td>
			<td class="td-red">0</td>
		</tr>
		<tr>
			<td class="td-left-header">26-50%</td>
			<td class="td-green">0</td>
			<td class="td-green">0</td>
			<td class="td-yellow">0</td>
			<td class="td-yellow">0</td>
		</tr>
		<tr>
			<td class="td-left-header" riskmatrix-bind="text: likelyhoodRange">0-25%</td>
			<td class="td-green">0</td>
			<td class="td-green">0</td>
			<td class="td-green">0</td>
			<td class="td-green">0</td>
		</tr>
	</tbody>
	</table>
</div>
  </div>
</div>


    <div style="width: 90%; height: 90%; padding-left: 20px; padding-top: 20px; display: table;
    margin: 0 auto; padding-bottom: 20px">
    <!-- <DataTable :value="sales" responsiveLayout="scroll">
            <ColumnGroup type="header">
                     
            
                <Column header="Risco" :rowspan="1" />
                <Column header="Medida" :rowspan="1" />
                    
              
               
                
                    <Column header="Efeito sobre o risco" :colspan="2" />
                    <Column header="Risco residual" :colspan="3" />
                    <Column header="P"/>
                    <Column header="I"/>
                    <Column header="Nível (P x I)"/>
                
                    <Column header="Medida(s) Aprovada(s)"/>
                
            </ColumnGroup>
            <Column field="product" />
            <Column field="lastYearSale">
                <template #body="slotProps">
                    {{slotProps.data.lastYearSale}}%
                </template>
            </Column>
            <Column field="thisYearSale">
                <template #body="slotProps">
                    {{slotProps.data.thisYearSale}}%
                </template>
            </Column>
            <Column field="lastYearProfit">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.lastYearProfit)}}
                </template>
            </Column>
            <Column field="thisYearProfit">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.thisYearProfit)}}
                </template>
            </Column>
            <ColumnGroup type="footer">
                <Row>
                    <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                    <Column :footer="lastYearTotal" />
                    <Column :footer="thisYearTotal" />
                </Row>
            </ColumnGroup>
        </DataTable> -->

        <DataTable :value="risk" showGridlines responsiveLayout="scroll">
            <template #header>
                Tabela de gestão de riscos
                
            </template>

            <Column field="risco" header="Risco" />
            <Column field="medida" header="Medida" />
            <Column field="efeito" header="Efeito sobre o risco" />
            <Column field="riscoR" header="Risco residual" />
            <Column field="medidaA" header="Medida(s) aprovada(s)" />
            
        </DataTable>

    </div>

  
    </div>
</template>

<script>
import RiskService from '../service/RiskService';

export default {
    data() {
        return {
        
            home: {icon: 'pi pi-home', to: '/dashboard'},
            items: [
                {label: 'Gestão de Riscos'},
            ],
            risk: null,
             
        }
        
    },
    riskService: null,
    created() {
       this.riskService = new RiskService();
    },
    mounted() {
        this.riskService.getRisksSmall().then(data => this.risk = data);
        
    },
    methods: {
       
    },
    computed: {
       
    },
    
}
</script>