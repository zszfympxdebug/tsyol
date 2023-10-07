<template>
    <button @click="prev">返回上一页</button>
</template>

<script>
export default{
    data() {
        return{

        }
    }, methods: {
        prev(){
            this.$router.back();
        }
    }
}