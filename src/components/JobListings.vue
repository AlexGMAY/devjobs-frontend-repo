<script setup>
 import JobCard from '@/components/JobCard.vue' // job card component
 // import JobData from '@/jobs.json' // List of Jobs
 import { reactive, defineProps, onMounted } from 'vue';
 import { RouterLink } from 'vue-router';
 import PulseLoader from "vue-spinner/src/PulseLoader.vue";
 import axios from 'axios';

 defineProps({
    // Define the limit of the jobs on a job list section 
    // And to show a button View all jobs to true all false
    limit : Number,
    showBtn :{
        type : Boolean,
        defaults : false       
    }
  })

 const state = reactive({
  jobs : [],
  isLoading : false
 });

 // Get/Fetch the Jobs listing from Json-server using Axios
 onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.log('Error fecthing datas', error);
  } finally{
    state.isLoading = false;
  }
 })
</script>
<template>
    <!-- Browse Jobs -->
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
      </div>
      <!-- Show spinner while loading -->
       <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
       </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard v-for="job in state.jobs.slice(0, limit || state.jobs.length) " :key="job.id" :job="job" />
      </div>
    </section>
    <section v-if="showBtn" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>