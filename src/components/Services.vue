<template>
<div id="container">
<h2>Услуги клиники</h2>
<p>Клиника лечения позвоночника «Ноосфера» предлагает полный комплекс
    терапевтических услуг, позволяющих не просто снять болевые симптомы, а
    полностью вылечить имеющееся заболевание.</p>
<table width="100%">
  <tr>
    <td width="50%"><h3>Лечение заболеваний:</h3>
    <ol class="rectangle-list">
      <li><router-link to="/services/neck#info">шейного отдела</router-link></li>
      <li><router-link to="/services/chest#info">грудного отдела</router-link></li>
      <li><router-link to="/services/lumbar#info">поясничного отдела</router-link></li>
      <li><router-link to="/services/sacral#info">крестцового отдела</router-link></li>
      <li><router-link to="/services/neck#info">межпозвонковых дисков</router-link></li>
      <li><router-link to="/services/neck#info">болезни суставов</router-link></li>
      <li><router-link to="/services/neck#info">протрузии дисков</router-link></li>
      <li><router-link to="/services/neck#info">лечение грыжи</router-link></li>
      <li><router-link to="/services/neck#info">лечение остеохондроза</router-link></li>
    </ol>
    </td>
    <td><h3>Методы лечения:</h3>
    <ol class="rectangle-list">
      <li>аппаратное лечение</li>
      <li>мануальная терапия</li>
      <li>остеопатия</li>
      <li>неврология</li>
      <li>иглорефлексотерапия</li>
      <li>лечебный массаж</li>
      <li>функциональная диагностика</li>
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
    border: 4px solid #e7e7e7;
    text-indent: 15px;
  }

  h2{
    text-align:center;
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
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
    text-indent:15px;
  }

</style>
