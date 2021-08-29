function startSim() {
    document.getElementById("start").style.display = "none";
    document.getElementById("cpu").style.display = "block";
    document.getElementById("cpu_images").style.display = "block";

}

function nextRam() {
    document.getElementById("ram").style.display = "block";
    document.getElementById("cpu").style.display = "none";
    document.getElementById("cpu_images").style.display = "none";
    document.getElementById("task_man").style.display ="block";
    document.getElementById("set1").style.display= "block";
    document.getElementById("ram_images").style.display = "block";

}

function nextGPU() {
    document.getElementById("ram").style.display = "none";
    document.getElementById("gpu").style.display = "block";
    document.getElementById("set1").style.display = "none";
    document.getElementById("ram_images").style.display ="none";
    document.getElementById("set2").style.display = "block";
    document.getElementById("gpu_images").style.display = "block";

}

function backCPU() {
    document.getElementById("ram").style.display = "none";
    document.getElementById("cpu").style.display = "block";
    document.getElementById("set1").style.display = "none";
    document.getElementById("ram_images").style.display= "none";
    document.getElementById("cpu_images").style.display = "block";

}

function backRAM() {
    document.getElementById("gpu").style.display = "none";
    document.getElementById("ram").style.display = "block";
    document.getElementById("set1").style.display = "block";
    document.getElementById("set2").style.display = "none";
    document.getElementById("ram_images").style.display = "block";
    document.getElementById("gpu_images").style.display = "none";
}

function nextMB() {
    document.getElementById("gpu").style.display = "none";
    document.getElementById("set2").style.display = "none";
    document.getElementById("set3").style.display = "block";
    document.getElementById("motherboard").style.display = "block";
    document.getElementById("gpu_images").style.display = "none";
    document.getElementById("motherboard_img").style.display = "block";

}

function backGPU() {
    document.getElementById("gpu").style.display = "block";
    document.getElementById("motherboard").style.display = "none";
    document.getElementById("set2").style.display = "block";
    document.getElementById("gpu_images").style.display = "block";
    document.getElementById("set3").style.display = "none";
    document.getElementById("motherboard_img").style.display = "none";


}

function finish() {
    document.getElementById("motherboard").style.display = "none";
    document.getElementById("set3").style.display = "none";
    document.getElementById("finish_screen").style.display = "block";
    document.getElementById("set4").style.display = "block";
    document.getElementById("motherboard_img").style.display = "none";

}

function CPU() {
    document.getElementById("finish_screen").style.display = "none";
    document.getElementById("set4").style.display = "none";
    document.getElementById("cpu").style.display = "block";
    document.getElementById("cpu_images").style.display = "block";
}

function RAM() {
    document.getElementById("finish_screen").style.display = "none";
    document.getElementById("set4").style.display = "none";
    document.getElementById("ram").style.display = "block";
    document.getElementById("ram_images").style.display = "block";
    document.getElementById("set1").style.display = "block";

}

function GPU() {
    document.getElementById("finish_screen").style.display = "none";
    document.getElementById("set4").style.display = "none";
    document.getElementById("gpu").style.display = "block";
    document.getElementById("gpu_images").style.display = "block";
    document.getElementById("set2").style.display = "block";
}

function Motherboard() {
    document.getElementById("finish_screen").style.display = "none";
    document.getElementById("set4").style.display = "none";
    document.getElementById("set3").style.display = "block";
    document.getElementById("motherboard").style.display = "block";
    document.getElementById("motherboard_img").style.display = "block";

}