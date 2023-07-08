<template>
    <main class="auth">
        <aside class="content">
            <lighting titr="MultiSig Wallet" />

            <div class="auth-box">
                <div class="image-box">
                    <img src="/assets/images/eth.png" alt="">
                </div>
                <a href="#" class="btn warning" v-if="!address" @click.prevent="state.connect">Connect Wallet</a>
            </div>
            
        </aside>
        <aside class="board"></aside>
    </main>
</template>

<script setup>
import { useContractStore } from "~/stores/contract";
const state = useContractStore();
onMounted(async () => { });
</script>