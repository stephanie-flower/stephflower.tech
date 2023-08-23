<script setup lang="ts">
    import '98.css';
    import DesktopIcon from '../DesktopIcon.vue';

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
                <div class="btn"> Back </div>
                <div class="btn"> Forward </div>
                <div class="btn"> Up </div>
                <div class="btn"> Cut </div>
                <div class="btn"> Copy </div>
                <div class="btn"> Paste </div>
                <div class="btn"> Undo </div>
                <div class="btn"> Delete </div>
            </div>
        </fieldset>
        <div class="bg">
            <div class="title">
                Projects
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

<style>

fieldset {
    padding: 2px;
}

.optn {
    padding-left: 5px;
    padding-right: 5px;
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