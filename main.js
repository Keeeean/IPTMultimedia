function startSim() {
    document.getElementById("start").style.display = "none";
    document.getElementById("cpu").style.display = "block";
    document.getElementById("cpu_image").style.display = "block";

}

function nextRam() {
    document.getElementById("ram").style.display = "block";
    document.getElementById("cpu").style.display = "none";
    document.getElementById("cpu_image").style.display = "none";
    document.getElementById("task_man").style.display ="block";
    document.getElementById("set1").style.display= "block";
    document.getElementById("ram_image").style.display = "block";

}

function nextGPU() {
    document.getElementById("ram").style.display = "none";
    document.getElementById("gpu").style.display = "block";
    document.getElementById("set1").style.display = "none";
    document.getElementById("ram_image").style.display ="none";

}

function backCPU() {

}
