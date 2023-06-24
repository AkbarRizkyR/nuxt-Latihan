<template>
    <div>
        <h1>Dashboard Page</h1>
        <p>Welcome, {{ profileName }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        profileName() {
            return localStorage.getItem('profileName');
        },
    },
};
</script>