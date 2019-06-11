<template>
    <div>
      
    </div>
</template>
<style>
  body {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
nav {
    background: lightskyblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 60px;
}
ul {
    align-self: flex-start;
    background: blue;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 60px;
    width: 100%;
}
li {
    align-items: center;
    color:cornflowerblue;
    cursor: pointer;
    display: flex;
    font-size: 1.5em;
    height: 2em;
    justify-content: center;
    list-style-type: none;
    text-transform: uppercase;
    transition: all .3s ease;
}
li hover: {
    border-color:#585555;
    color: green;
}
#app {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 850px;
}
@media (max-width: 1024px) {
    #app {
        width: 100vw;
        height: 100vh;
    }
}
/*
.fade-enter-active,
.fade-leave-active{
    transition: opasity .3s easy;
}
.fade-enter,
.fade-leave-to;
.menu, .clear{
  cursor: pointer;
  font-size: 3em;
  padding-left; 5%;
  transition: all .3s ease;
  width: 1.5em;
  color: #fff;
}
*/

</style>
