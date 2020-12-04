<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">MY ACCOUNT</v-toolbar-title>
    <div class="block latestPostBlock">
      <v-container>
        <v-row>
          <div class="col col-3">
            <v-card
                class="mx-auto"
                height="300"
                width="256"
            >
              <v-navigation-drawer
                  class="deep-orange accent-5"
                  dark
                  permanent
              >
                <v-list>
                  <v-list-item link color="white">
                    <v-list-item-icon>
                      <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/my_account" tag="none">My Products</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account-box</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="edit_account" tag="none">Edit Account</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block>
                      Logout
                    </v-btn>
                  </div>
                </template>
              </v-navigation-drawer>
            </v-card>
          </div>

          <div class="col col-9">

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">
                  Name:
                </div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Name" single-line v-model="seller.name"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                    <v-btn
                      text
                      medium
                      color="primary"
                      v-on:click="changeNameFunc"
                  >
                    UPDATE
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">
                  Email:
                </div>
              </v-col>
              <v-col md="7">
                <v-text-field
                    label="Email"
                    single-line
                    v-model="seller.email"
                ></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn
                      text
                      medium
                      color="primary"
                  >
                    UPDATE
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Username:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Username" single-line v-model="seller.username"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn text medium color="primary">UPDATE</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Password:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Password" single-line v-model="seller.password"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn text medium color="primary">UPDATE</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Personal information:</div>
              </v-col>
              <v-col md="7">
                <v-text-field
                    label="Personal Information"
                    single-line
                    v-model="seller.personalInformation"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn text medium color="primary">UPDATE</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Address:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Address" single-line v-model="seller.address"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn text medium color="primary">UPDATE</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col md="3">
                <div class="blue-grey--text pa-5">Phone:</div>
              </v-col>
              <v-col md="7">
                <v-text-field label="Phone" single-line v-model="seller.phone"></v-text-field>
              </v-col>
              <v-col md="2">
                <div class="pa-3">
                  <v-btn text medium color="primary">UPDATE</v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-row>
      </v-container>
    </div>
    {{seller}}
  </v-main>
</template>

<script>

import Hero from "@/components/Hero";

let getSeller = function () {
  let url = "http://localhost:8090/getSeller";
  this.$http.get(url)
      .then(response => this.seller = response.data)
}

let changeName = function (){
  let url = "http://localhost:8090/updateSellerName";
  this.$http.put(url, this.seller)
}


export default {
  name: 'EditAccount',

  components: {
    Hero
  },

  data: () => ({
    seller: {}
  }),

  methods: {
    getSellerFunc: getSeller,
    changeNameFunc: changeName,

  },
  created: function () {
    this.getSellerFunc()
  },

}
</script>
