<template>
<div>
<h2>Контакты</h2><hr>
<table class="hide-mobile">
  <tr>
    <td width="50%"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.3091786008547!2d30.26154716810745!3d59.946181511395515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696312c68ed5831%3A0x9ea8b54cb33adb3!2z0J3QntCe0KHQpNCV0KDQkCwg0LrQu9C40L3QuNC60LAg0LvQtdGH0LXQvdC40Y8g0L_QvtC30LLQvtC90L7Rh9C90LjQutCw!5e0!3m2!1sru!2sru!4v1521475877394"
      width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </td>
    <td> </td>
    <td><img src="/static/images/biglogo.png" width="80%">
      <center><br>199178, Санкт-Петербург, 14-линия В.О., д.91.
        <br>
        Телефон: (812) 321 01 95</center>
   </td>
  </tr>
</table>

<div class="only-mobile">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.3091786008547!2d30.26154716810745!3d59.946181511395515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696312c68ed5831%3A0x9ea8b54cb33adb3!2z0J3QntCe0KHQpNCV0KDQkCwg0LrQu9C40L3QuNC60LAg0LvQtdGH0LXQvdC40Y8g0L_QvtC30LLQvtC90L7Rh9C90LjQutCw!5e0!3m2!1sru!2sru!4v1521475877394"
  width="90%" height="200px" frameborder="0" style="border:0" allowfullscreen></iframe>
  <br><br><div class="block"><img src="/static/images/biglogo.png" width="80%">
    <center><br>199178, Санкт-Петербург, 14-линия В.О., д.91.
      <br>
      Телефон: (812) 321 01 95</center></div><br>
</div>

<div class="block">
<lightbox id="mylightbox"
      :images="images" :album_class=" 'album' ">
    </lightbox>
</div>

<!--
<div class="images block" v-viewer="{movable: false, toolbar: false, title: false}">


      <img src="/static/images/01.jpg" width="32%">
      <img src="/static/images/02.jpg" width="32%">
      <img src="/static/images/03.jpg" width="32%">
      <img src="/static/images/04.jpg" width="32%">
      <img src="/static/images/05.jpg" width="32%">
      <img src="/static/images/06.jpg" width="32%">

    </div>
-->

<!--<div class="gallery cf">
  <table>
    <tr>
  <td>
    <img src="/static/images/01.jpg" />
  </td>
  <td>
    <img src="/static/images/02.jpg" />
  </td>
  <td>
    <img src="/static/images/03.jpg" />
  </td>
    </tr>
    <tr>
  <td>
    <img src="/static/images/04.jpg" />
  </td>
  <td>
    <img src="/static/images/05.jpg" />
  </td>
  <td>
    <img src="/static/images/06.jpg" />
  </td>
    </tr>
</table>
</div>-->

</div>
</template>


<style scoped>
  .block {
  text-indent:0;
  width:80%;
  margin:auto;
  }

  .album a img{
    width:32% !important;
    float:left;
  }
</style>

<script>
  import Lightbox from 'vue-simple-lightbox'

  export default {
    components: {
      Lightbox
    },
    data(){
        return{
          images : [
            {
                src : '/static/images/01.jpg',
                title : ''
            },
            {
                src : '/static/images/02.jpg',
                title : ''
            },
            {
                src : '/static/images/03.jpg',
                title : ''
            },
            {
                src : '/static/images/04.jpg',
                title : 'Аппарат DRX9000'
            },
            {
                src : '/static/images/05.jpg',
                title : ''
            },
            {
                src : '/static/images/06.jpg',
                title : 'Аппарат DRX9000'
            },
          ],
          options : {
            closeText : 'х'
          }
        }
      }
  }
</script>
