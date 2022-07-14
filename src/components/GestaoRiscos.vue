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

        <DataTable :value="products" showGridlines responsiveLayout="scroll">
            <template #header>
                Tabela de gestão de riscos
                
            </template>

            <Column field="name" header="Risco"></Column>
            <Column field="name" header="Medida"></Column>
            <Column field="name" header="Efeito sobre o risco"></Column>
             <Column field="name" header="Risco residual"></Column>
            <Column field="name" header="Medida(s) aprovada(s)"></Column>
            
        </DataTable>

    </div>

    <!-- <div class="responsive-table"><p class="impactText">Impact</p><table class="table table-bordered table-responsive text-center"><tbody><tr><td></td><td class="td-top-header">Minor</td><td class="td-top-header">Moderate</td><td class="td-top-header">Major</td><td class="td-top-header">Critical</td></tr><tr><td class="td-left-header">76-100%</td><td class="td-yellow">0</td><td class="td-red">0</td><td class="td-red">0</td><td class="td-red">0</td></tr><tr><td class="td-left-header">51-75%</td><td class="td-yellow">0</td><td class="td-yellow">0</td><td class="td-yellow">0</td><td class="td-red">0</td></tr><tr><td class="td-left-header">26-50%</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-yellow">0</td><td class="td-yellow">0</td></tr><tr><td class="td-left-header" riskmatrix-bind="text: likelyhoodRange">0-25%</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-green">0</td></tr></tbody></table></div> -->
    
    <!-- <div class="risk-matrix-box"><p class="likelihoodText">Likelihood</p><div class="responsive-table"><p class="impactText">Impact</p><table class="table table-bordered table-responsive text-center"><tbody><tr><td></td><td class="td-top-header">Minor</td><td class="td-top-header">Moderate</td><td class="td-top-header">Major</td><td class="td-top-header">Critical</td></tr><tr><td class="td-left-header">76-100%</td><td class="td-yellow">0</td><td class="td-red">0</td><td class="td-red">0</td><td class="td-red">0</td></tr><tr><td class="td-left-header">51-75%</td><td class="td-yellow">0</td><td class="td-yellow">0</td><td class="td-yellow">0</td><td class="td-red">0</td></tr><tr><td class="td-left-header">26-50%</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-yellow">0</td><td class="td-yellow">0</td></tr><tr><td class="td-left-header" riskmatrix-bind="text: likelyhoodRange">0-25%</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-green">0</td><td class="td-green">0</td></tr></tbody></table></div></div> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            
            sales: null,
            home: {icon: 'pi pi-home', to: '/dashboard'},
            items: [
                {label: 'Gestão de Riscos'},
            ],
             
        }
        
    },
    
    created() {
        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
 
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return this.formatCurrency(total);
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return this.formatCurrency(total);
        }
    },
    
}
</script>