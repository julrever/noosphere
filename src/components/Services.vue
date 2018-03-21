<template>
<div>
<h2>Услуги клиники</h2><hr>
<p>Клиника лечения позвоночника «Ноосфера» предлагает полный комплекс
    терапевтических услуг, позволяющих не просто снять болевые симптомы, а
    полностью вылечить имеющееся заболевание.</p>
<table width="100%">
  <tr>
    <td width="50%"><h3>Лечение заболеваний:</h3>
    <ol class="rectangle-list">
      <router-link to="/services/neck#info"><li>шейного отдела</li></router-link>
      <router-link to="/services/chest#info"><li>грудного отдела</li></router-link>
      <router-link to="/services/lumbar#info"><li>поясничного отдела</li></router-link>
      <router-link to="/services/sacral#info"><li>крестцового отдела</li></router-link>
      <router-link to="/services/interdisk#info"><li>межпозвонковых дисков</li></router-link>
      <router-link to="/services/joint#info"><li>болезни суставов</li></router-link>
      <router-link to="/services/protrusion#info"><li>протрузии дисков</li></router-link>
      <router-link to="/services/hernia#info"><li>лечение грыжи</li></router-link>
      <router-link to="/services/osteo#info"><li>лечение остеохондроза</li></router-link>
    </ol>
    </td>
    <td><h3>Методы лечения:</h3>
    <ol class="rectangle-list">
      <router-link to="/services/machine#info"><li>аппаратное лечение</li></router-link>
      <router-link to="/services/manual#info"><li>мануальная терапия и остеопатия</li></router-link>
      <router-link to="/services/neurology#info"><li>неврология</li></router-link>
      <router-link to="/services/needle#info"><li>иглорефлексотерапия</li></router-link>
      <router-link to="/services/massage#info"><li>лечебный массаж</li></router-link>
    </ol>
    </td>
  </tr>
</table>

<router-view></router-view>
</div>
</template>



<style scoped>
  td{
    background-color: white;
    padding: 2%;
    color: #333333;
    border: 4px solid #F3F5F5;
    text-indent: 15px;
  }


  ol{
    width:90%;
  }

  a{
    text-decoration: none;
  }

  #info{
    width: 90%;
    margin: 0 auto;
    padding: 3%;
    background: #fff;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    text-indent:15px;
    border-radius: 6px;

  }


  .rectangle-list li:after{
      position: absolute;
      content: '';
      border: .5em solid transparent;
      left: -1em;
      top: 50%;
      margin-top: -.5em;
      transition: all .3s ease-out;
      opacity:0.8;
  }

  .rectangle-list li:hover:after{
      left: -.5em;
      border-left-color: #59bad9;
  }

  .rectangle-list li:hover{
      background: #e7eced;
  }

  .active-link li{
      background: #e7eced;
  }

  .active-link li:after{
      left: -.5em;
      border-left-color: #59bad9;
  }

</style>
