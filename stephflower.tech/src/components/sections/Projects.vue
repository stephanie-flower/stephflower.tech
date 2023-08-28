<script setup lang="ts">
    import '98.css';
    import DesktopIcon from '../DesktopIcon.vue';
    import Sep from '../Sep.vue';

    const projects = [
        {
            title : "Swordle",
            open : () => { console.log("open swordle"); }
        },
        {
            title: "stephflower.tech",
            open : () => { console.log("open stephflower.tech"); }
        },
        {
            title: "Burble",
            open : () => { console.log("open burble"); }
        },
        {
            title: "rhulani.me",
            open : () => { console.log("open rhulani.me"); }
        },


    ];

</script>

<template>

    <div>
        <fieldset>
            <div class="toolbar">
                <Sep />
                <div class="optn"> <u>F</u>ile </div> 
                <div class="optn"> <u>E</u>dit </div> 
                <div class="optn"> <u>V</u>iew </div> 
                <div class="optn"> <u>G</u>o </div> 
                <div class="optn"> F<u>a</u>vorites </div> 
                <div class="optn"> <u>H</u>elp </div> 
            </div>
        </fieldset>
        <fieldset>
            <div class="toolbar">
                <div class="btns">
                    <Sep />
                    <div> <img src="explorer/open.png" /> Back </div>
                    <div> <img src="explorer/open.png" /> Forward </div>
                    <div> <img src="explorer/open.png" /> Up </div>
                    <Sep />
                    <div> <img src="explorer/open.png" /> Cut </div>
                    <div> <img src="explorer/open.png" /> Copy </div>
                    <div> <img src="explorer/open.png" /> Paste </div>
                    <Sep />
                    <div> <img src="explorer/open.png" /> Undo </div>
                    <Sep />
                    <div> <img src="explorer/open.png" /> Delete </div>
                </div>
            </div>
        </fieldset>
        <div class="bg">
            <div class="title">
                <strong style="font-size: 1.7rem; font-family: Arial;">(C:)</strong>
                <div class="line" />
                Select an item to view its description.
            </div>
            <div class="folders">
                <DesktopIcon v-for="item in projects"
                    image="desktopIcons/projects.png"
                    :title="item.title"
                    @open="item.open"
                />
            </div>
        </div>
        <div class="status-bar">
            <p class="status-bar-field">20 object(s) (plus 17 hidden)</p>
            <p class="status-bar-field">31.11MB</p>
            <p class="status-bar-field">My Projects</p>
        </div>
    </div>

</template>

<style scoped>

fieldset {
    padding: 2px;
}

.optn {
    padding-left: 5px;
    padding-right: 5px;
}

.line {
    height: 2px;
    width: 200px;
    background: linear-gradient(to right, #FF3300 25%, #FFCC00 25%, #FFCC00 50%, #66CC33 50%, #66CC33 75%, #0099FF 75%);
}

.btns {
    display: flex;
    flex-direction: row;
}

.btns div {
    display: flex;
    flex-direction: column;
    width: 50px;
    align-items: center;
}

.btns img {
    width: 24px;
}

.btns .sep {
    width: 3px !important;
    margin: 0;
    height: 100%;
}

.toolbar {
    display: flex;
    flex-direction: row;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
}

.bg {
    background-image: url('explorer/explorerbg.png');
    background-size: 300px 100px;
    background-repeat: no-repeat;
    background-color: white;
    display: flex;
    flex-direction: row;
}

.bg .text {
    color: black;
}

.folders {
    display: flex;
    flex-direction: row;
}

</style>