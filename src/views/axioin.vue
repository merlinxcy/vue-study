<template>
  <div>
    <button @click="ff1"> click </button>
    <button @click="ff2"> click2 </button>
    <button @click="ff3"> click3 </button>
    <button @click="ff4"> click4 </button>
  </div>
</template>


<script>

  export default {
    methods: {
      ff1: function () {
        this.$axios.get('http://localhost:5000/').then((response)=>{
          console.log(response)
          sessionStorage.setItem("token","111")
          }
        )

      },
      ff2: function (){
          this.$axios({
            method: "GET",
            url:"http://localhost:5000/",
            headers:{
              'XXX-Header1': "xxxxxx",
              'XXX-Header2': "xxxxxx",
              'XXX-Header3': "xxxxxx",
            }
          }).then(function (res) {
            console.log(res.data)
          })
      },
      ff3: function () {
        this.$axios({
          method: "GET",
          url:"http://localhost:5000/",
        }).then(function (res) {
          console.log(res.data)
          console.log(res.data.data1)
          // this.$cookies.set("PHPSXXX", res.data.data1)
        })
      },
      ff4: function () {
        this.$axios({
          method: "POST",
          url:"http://localhost:5000/",
          data:{
            username: "123",
            password: "123"
          }
        }).then(function (res) {
          console.log(res.data)
          console.log(res.data.data1)
          // this.$store.commit('SET_TOKEN', "response.data.token")
          // this.$store.commit('GET_USER', "response.data.user")
          // this.$store.commit('GET_USER', "response.data.user")
          sessionStorage.setItem("token","asdaasddsadasdxcvb fgh")

          // this.$cookies.set("PHPSXXX", res.data.data1)
        })
      }
    }
  }
</script>
