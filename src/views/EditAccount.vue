<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">MY ACCOUNT</v-toolbar-title>
    <div class="mainBlock">
        <v-row>
          <v-col class="col-3">
            <div class="mb-5 ml-8 mt-3">
              <MyAccountMenu/>
            </div>
            <div class="ml-8">
              <AddNewProductBtn/>
            </div>
          </v-col>
          
          <div class="col-8">
          
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Name:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Name" single-line v-model="seller.name"></v-text-field>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Email:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Email" single-line v-model="seller.email">
                </v-text-field>
              </v-col>
            </v-row>
            
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Personal information:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Personal Information" single-line v-model="seller.personalInformation">
                </v-text-field>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Address:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Address" single-line v-model="seller.address">
                </v-text-field>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Phone:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Phone" single-line v-model="seller.phone">
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn color="blue darken-1" @click="updateSellerFunc()">SAVE</v-btn>
          </div>
        </v-row>
    </div>
  </v-main>
</template>

<script>

import Hero from "@/components/Hero";
import MyAccountMenu from "@/components/MyAccountMenu";
import AddNewProductBtn from "@/components/AddNewProductBtn";

let getSeller = function () {
  let url = this.host + "/getSeller";
  this.$http.get(url)
      .then(response => this.seller = response.data)
}

let updateSeller = function (){
  let url = this.host + "/updateSeller";
  this.$http.put(url, this.seller)
      .then(response => alert(response.data.message))
}

export default {
  name: 'EditAccount',

  components: {
    AddNewProductBtn,
    MyAccountMenu,
    Hero
  },

  data: () => ({
    seller: {}
  }),

  methods: {
    getSellerFunc: getSeller,
    updateSellerFunc: updateSeller
  },
  created: function () {
    this.getSellerFunc()
  },

}
</script>
