<script setup lang="ts">
    import "98.css";

    const tabs = ["General", "Network Identification", "Hardware", "User Profiles",
                    "Advanced"];
</script>

<template>

    <div class="content">
        <menu role="tablist">
            <li role="tab" aria-selected="true" v-for="item in tabs"><a>{{ item }}</a></li>
        </menu>
        <div class="window" role="tabpanel">
            <div class="window-body">
                <div class="wrapper">
                    <div class="img">
                        <img src="pc.png" />
                    </div>
                    <div class="text">
                        System: <br>
                        &nbsp; &nbsp; Stephanie Flower <br>
                        &nbsp; &nbsp; First Edition <br>
                        &nbsp; &nbsp; 20.05.2000 <br>
                        <br>
                        Registered to: <br>
                        &nbsp; &nbsp; Motorola Solutions <br>
                        &nbsp; &nbsp; Graduate Frontend Developer <br>
                        <br>
                        Computer: <br>
                        &nbsp; &nbsp; GenuineIntel <br>
                        &nbsp; &nbsp; Pentium(r) II Processor <br>
                        &nbsp; &nbsp; 64.0MB RAM <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .content {
        user-select: none;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }

    .wrapper div {
        padding: 20px;
    }

    .img img {
        width: 10vw;
    }

    .text {
        color: black;
    }


</style>