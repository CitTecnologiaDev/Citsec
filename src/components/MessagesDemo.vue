/* eslint-disable */

<template>

	<div
    style="
      position: center;
      width: 100%;
      height: 80%;
      left: 25px;
      top: 34px;
      padding-top: 20px;
	  padding-bottom: 20px;
      background: #ffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
    "
  >
  
  <link
      href="https://fonts.googleapis.com/css?family=Montserrat:100"
      rel="stylesheet"
/>
<div style="width: 100%">

	<p
        style="
          font-family: 'Montserrat', sans-serif;
          color: #000000;
          font-weight: 1000;
          font-size: 25px;
          line-height: 17px;
		  padding-left: 15px;
        "
      >
        Perguntas frequentes (FAQ)
      </p>

<div style="padding-top: 10px">
	
	<!-- <i class="pi pi-check"></i> -->
	<!-- <div style= "justify-content: space-between; display: inline-block;">
		<span class="pi pi-fw pi-home"></span>	
    </div>	 -->
	<Panel header="Quem é o titular de dados pessoais?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px;">
	
		<!-- <i class="pi pi-check" style="display: inline-block;"></i> -->
	<!-- <Panel header="Quem é o titular de dados pessoais?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px;">
		<template #icons>
		
		
		<span class="pi pi-check" style="display: inline-block; float: left"></span>
	

		</template> -->
	<!-- </Panel> -->
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">Quem é o titular de dados pessoais?</b> -->
		<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">É a pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.</p>
	</Panel>

	<!-- <h5>Advanced</h5>
	<Panel header="Header">
		<template #icons>
			<button class="p-panel-header-icon p-link mr-2" @click="toggle">
				<span class="pi pi-cog"></span>
			</button>
			<Menu id="config_menu" ref="menu" :model="items" :popup="true" />
		</template>
	</Panel> -->
	
</div>

<div style="padding-top: 10px">
	<Panel header="O que é a Autoridade Nacional de Proteção de Dados (ANPD)?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">O que é a Autoridade Nacional de Proteção de Dados (ANPD)?</b> -->
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A ANPD é o “órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional”.</p>
	</Panel>
</div>

<div style="padding-top: 10px">
	<Panel header="Quais as obrigações e os direitos?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">Quais as obrigações e os direitos?</b> -->
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">Respeito com os titulares dos dados: as pessoas. A instituições devem ter cuidado desde a coleta até o descarte, oferecendo o máximo de transparência e de segurança. As pessoas terão direito a receber informações explícitas, legítimas e específicas sobre como os dados serão tratados. Os indivíduos poderão consultar, de forma fácil e gratuita, como seus dados estão sendo tratados. 
		E, a qualquer momento, elas podem revogar o consentimento e exigir a eliminação dos dados.</p>
	</Panel>
</div>

<div style="padding-top: 10px">
	<Panel header="O que é tratamento de dados pessoais?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">O que é tratamento de dados pessoais?</b> -->
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A LGPD define tratamento de dados pessoais e toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, 
		avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>
	</Panel>
</div>

<div style="padding-top: 10px">
	<Panel header="Quem são os agentes de tratamento de dados previstos na LGPD?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quem são os agentes de tratamento de dados previstos na LGPD?</b> -->
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">O controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais. O operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de 
		dados pessoais em nome do controlador.</p>
	</Panel>
</div>

<div style="padding-top: 10px">
	<Panel header="Quem é o encarregado de dados pessoais ou DPO (Data Protection Officer)?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
		<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quem é o encarregado de dados pessoais ou DPO (Data Protection Officer)?</b> -->
		<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">É a pessoa (física ou jurídica) indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD.</p>
	</Panel>
</div>

<div style="padding-top: 10px">
	<Panel header="Quais as sanções previstas, em caso de descumprimento?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
	<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quais as sanções previstas, em caso de descumprimento?</b> -->
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">Multa de até R$ 50 milhões. A suspensão, ou proibição, “do exercício de atividades relacionadas a tratamento de dados”.</p>
	</Panel>
</div>


<div style="padding-top: 10px">
	<Panel header="Existem exceções?" :toggleable="true" style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-right: 15px">
		<!-- <b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Existem exceções?</b> -->
		<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A LGPD não se aplica ao tratamento de dados realizado por pessoas para fins exclusivamente particulares e não econômicos, ou para fins jornalístico e artístico; acadêmicos; de segurança pública; 
		defesa nacional ou segurança de Estado; de investigações e repressão de crimes; ou provenientes de fora do país.</p>
	</Panel>
</div>

</div>

</div>

</template>

<script>
	export default {
		data() {
			return {
				message: [],
				username:null,
				email:null
			}
		},
		methods: {
			addMessage(type) {
				if(type === 'success') {
					this.message = [{severity: 'success', detail: 'Success Message', content: 'Message sent', id: this.count++}]
				}
				else if(type === 'info') {
					this.message = [{severity: 'info', detail: 'Info Message', content: 'PrimeVue rocks', id: this.count++}]
				}
				else if(type === 'warn') {
					this.message = [{severity: 'warn', detail: 'Warn Message', content: 'There are unsaved changes', id: this.count++}]
				}
				else if(type === 'error') {
					this.message = [{severity: 'error', detail: 'Error Message', content: 'Validation failed', id: this.count++}]
				}
			},
			showSuccess() {
				this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Detail', life: 3000});
			},
			showInfo() {
				this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Detail', life: 3000});
			},
			showWarn() {
				this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Detail', life: 3000});
			},
			showError() {
				this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Detail', life: 3000});
			},
		}
	}
</script>
