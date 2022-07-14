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

  <div style="width: 100%; padding: 10px; height: 100%">
      <div class="card">
         <div style="display: inline-block">
                <h5>DPO</h5>
            </div>
            <div style="display: inline-block; float: right">
                <Button type="button" icon="pi pi-plus" @click="toggle" style="height: 30px;"/>
                <Menu ref="menu" :model="submenu" :popup="true" />
            </div>
        <DataTable :value="dpo" removableSort responsiveLayout="scroll">
          <Column field="name" header="Nome" :sortable="true"></Column>
          <Column field="email" header="E-mail" :sortable="true"></Column>
          <Column field="function" header="Função" :sortable="true"></Column>
          <Column field="departament" header="Departamento" :sortable="true"></Column>
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
        <DataTable :value="team" removableSort responsiveLayout="scroll">
          <Column field="name" header="Nome" :sortable="true"></Column>
          <Column field="email" header="E-mail" :sortable="true"></Column>
          <Column field="function" header="Função" :sortable="true"></Column>
          <Column field="departament" header="Departamento" :sortable="true"></Column>
          <Column header="Ações">
          <template #body="">
                        <Button type="button" icon="pi pi-ellipsis-h" @click="toggle" style="height: 30px;"/>
                        <Menu ref="menu" :model="submenu" :popup="true" />
          </template>

          
          </Column>
    
        
          
        </DataTable>
      </div>
    </div>

</div>

</template>

<script>
import DPOService from '../service/DPOService';
import TeamService from '../service/TeamService';

export default {

    data() {
        return {
            dpo: null,
            team: null,
        }
    },
    dpoService: null,
    teamService: null,
    created() {
        this.dpoService = new DPOService();
        this.teamService = new TeamService();
    },
    mounted() {
        this.dpoService.getDPOsSmall().then(data => this.dpo = data);
        this.teamService.getTeamsSmall().then(data => this.team = data);
    }
}
</script>                


