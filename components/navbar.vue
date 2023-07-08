<template>
    <nav>
        <div class="left">
            <div class="image-box">
                <img src="/assets/images/eth.png" alt="">
            </div>
            <div class="signer-wallet">
                <label class="address">{{ state.address }}</label>
                <label class="balance">{{ state.balance }}</label>
            </div>
        </div>

        <NuxtLink class="btn warning icon logout" to="/">Logout</NuxtLink>
    </nav>
</template>

<script setup>
import { useContractStore } from "~/stores/contract";
const state = useContractStore();
</script>