<template>
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
<div style="width: 99%">

<div>
	<!-- <div style="display: inline-block;"><img alt="pessoa" src="images/lgpd/balanca.png" style="width: 200px; height: 200px"></div> -->
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">Quem é o titular de dados pessoais?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">É a pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">O que é a Autoridade Nacional de Proteção de Dados (ANPD)?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A ANPD é o “órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional”.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">Quais as obrigações e os direitos?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">Respeito com os titulares dos dados: as pessoas. A instituições devem ter cuidado desde a coleta até o descarte, oferecendo o máximo de transparência e de segurança. As pessoas terão direito a receber informações explícitas, legítimas e específicas sobre como os dados serão tratados. Os indivíduos poderão consultar, de forma fácil e gratuita, como seus dados estão sendo tratados. 
		E, a qualquer momento, elas podem revogar o consentimento e exigir a eliminação dos dados.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px">O que é tratamento de dados pessoais?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A LGPD define tratamento de dados pessoais e toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, 
		avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quem são os agentes de tratamento de dados previstos na LGPD?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">O controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais. O operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de 
		dados pessoais em nome do controlador.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quem é o encarregado de dados pessoais ou DPO (Data Protection Officer)?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">É a pessoa (física ou jurídica) indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD.</p>
</div>

<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Quais as sanções previstas, em caso de descumprimento?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">Multa de até R$ 50 milhões. A suspensão, ou proibição, “do exercício de atividades relacionadas a tratamento de dados”.</p>
</div>


<div style="padding-top: 10px">
	<b style="font-size: 20px; font-family: 'Montserrat', sans-serif; padding-left: 15px; padding-top: 1000px">Existem exceções?</b>
	<p style="font-size: 15px; font-family: 'Montserrat', sans-serif; padding-left: 30px; padding-top: 5px; font-weight: 800;">A LGPD não se aplica ao tratamento de dados realizado por pessoas para fins exclusivamente particulares e não econômicos, ou para fins jornalístico e artístico; acadêmicos; de segurança pública; 
		defesa nacional ou segurança de Estado; de investigações e repressão de crimes; ou provenientes de fora do país.</p>
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
