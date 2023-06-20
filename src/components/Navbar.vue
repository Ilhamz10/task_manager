<template>
    <nav class="nav">
        <div @click="$router.push('/')" class="logo">Task<span style="color: blueviolet;">Manager</span></div>
        <ul class="nav_list">
            <li @click="$router.push('/')">Main</li>
            <li @click="$router.push('/tasks')">Tasks</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: lightgray;
    padding: 0 50px;
}

.nav_list{
    list-style-type: none;
    display: flex;
    gap: 50px;
}

.nav_list li{
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 5px;
    transition: 0.3s;
}

.nav_list li:hover{
    background: rgb(168, 168, 168);
}

.logo{
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
}
</style>